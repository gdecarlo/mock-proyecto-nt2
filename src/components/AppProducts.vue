<template>
     <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="`${product.image}${product.id}`" :alt="product.title" class="product-image">
          <div class="product-info">
            <div class="product-title">{{ product.title }}</div>
            <div class="product-price">${{ product.price.toFixed(2) }}</div>
            <div class="product-actions">
              <a href="#" class="btn btn-secondary">Ver más</a>
              <a href="#" class="btn btn-primary">
                <svg class="cart-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Agregar
              </a>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { ref } from 'vue'

const products = ref([
  {
    id: 1,
    title: 'Cámara Vintage',
    price: 199.99,
    image: 'https://picsum.photos/250?random='
  },
  {
    id: 2,
    title: 'Auriculares Premium',
    price: 149.99,
    image: 'https://picsum.photos/250?random='
  },
  {
    id: 3,
    title: 'Smartwatch Elegante',
    price: 299.99,
    image: 'https://picsum.photos/250?random='
  },
  {
    id: 4,
    title: 'Altavoz Portátil',
    price: 89.99,
    image: 'https://picsum.photos/250?random='
  }
])
</script>