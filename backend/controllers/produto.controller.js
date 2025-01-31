import mongoose from "mongoose"
import Produto from "../models/produto.model.js"



export const getProdutos = async (req,res)  =>{
    try {
        const produtos = await Produto.find({})
        res.status(200).json({success: true, data:produtos})
    } catch (error) {
        console.log(("Erro ao procurar por produtos:", error.message))
        res.status(500).json({success: false, message:"Server Error"})
    }
}


export const postProdutos = async (req,res) =>{
    const produto = req.body

    if(!produto.name || !produto.price || !produto.image){
        return res.status(400).json({success:false, message:"Por favor inclua todos os atributos"})
    }
    const novoProduto = new Produto(produto)

    try{
        await novoProduto.save()
        res.status(201).json({success:true, data: novoProduto})
    } catch(error){
        console.error("Erro ao criar um produto:", error.message)
        res.status(500).json({success: false, message: "Server Error"})
    }
}


export const deleteProdutos = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Inválido produto id"})
    }
    
    try {
        await Produto.findByIdAndDelete(id)
        res.status(200).json({success:true, message:"Produto Deletado"})
    } catch (error) {
        res.status(404).json({success:false,message:"Produto não encontrado"})
    }
}


export const putProdutos = async (req,res)=> {
    const {id} = req.params

    const produto = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Inválido produto id"})
    }

    try {
       const updateProduto = await Produto.findByIdAndUpdate(id,produto,{new:true})
       res.status(200).json({success:true, data: updateProduto})
    } catch (error) {
        res.status(500).json({success:false, message:'Produto não encontrado'})
    }
}