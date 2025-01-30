import mongoose from "mongoose"
import Produto from "../models/produto.model.js"



export const getProdutos = async (req,res)  =>{
    try {
        const produtos = await Produto.find({})
        res.status(200).json({sucess: true, data:produtos})
    } catch (error) {
        console.log(("Erro ao procurar por produtos:", error.message))
        res.status(500).json({sucess: false, message:"Server Error"})
    }
}


export const postProdutos = async (req,res) =>{
    const produto = req.body

    if(!Produto.name || !produto.price || !produto.image){
        return res.status(400).json({sucess:false, message:"Por favor inclua todos os atributos"})
    }
    const novoProduto = new Produto(produto)

    try{
        await novoProduto.save()
        res.status(201).json({sucess:true, data: novoProduto})
    } catch(error){
        console.error("Erro ao criar um produto:", error.mesage)
        res.status(500).json({sucess: false, message: "Server Error"})
    }
}


export const deleteProdutos = async(req,res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({sucess:false, message:"Inválido produto id"})
    }
    
    try {
        await Produto.findByIdAndDelete(id)
        res.status(200).json({sucess:true, message:"Produto Deletado"})
    } catch (error) {
        res.status(404).json({sucess:false,message:"Produto não encontrado"})
    }
}


export const putProdutos = async (req,res)=> {
    const {id} = req.params

    const produto = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({sucess:false, message:"Inválido produto id"})
    }

    try {
       const updateProduto = await Produto.findByIdAndDelete(id,produto,{new:true})
       res.status(200).json({sucess:true, data: updateProduto})
    } catch (error) {
        res.status(500).json({sucess:false, message:'Produto não encontrado'})
    }
}