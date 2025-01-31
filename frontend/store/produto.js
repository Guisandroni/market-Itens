
import {create} from 'zustand'


export const useProdutoStore = create ((set) => ({

    produtos:[],
    setProdutos:(produto) => set({produto}),
    createProduto: async (newProduto) => {
        if(!newProduto.name || !newProduto.image || !newProduto.price){
            return {success:false, message:'Por favor preencha os campos vazios'}
        }

        const res = await fetch('/api/produtos',{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(newProduto),
        })
        const data = await res.json()
        set((state) => ({produtos:[...state.produtos, data.data]}))
        return {success:true, message:'Produto criado com sucesso'}
    },

    fetchProdutos: async ()=>{
        const res = await fetch('/api/produtos')
        const data = await res.json()
        set({produtos: data.data })
    },

    deleteProduto: async (pid) =>{
        const rest = await fetch(`/api/produtos/${pid}`, {
            method:'DELETE',
        })
        const data = await rest.json()
        if(!data.success) return {success: false, message: data.message}
        set (state=> ({produtos: state.produtos.filter(produto => produto._id !==pid)}))
        return {success: true, message: data.message}
    }
})
)
