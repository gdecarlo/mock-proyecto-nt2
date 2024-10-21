import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useShoppingCartStore = defineStore('shoppingCartStore',()=>{
    const _cart = ref([])

    const cartSize = computed(()=> _cart.value.length)

    const addItemCart = (item)=> _cart.value.push(item) 

    return {cartSize,addItemCart}
})