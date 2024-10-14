<template>
     <div class="product-grid">
        <div v-for="product in products" :key="product.id" class="product-card">
          <img :src="product.thumbnail" :alt="product.title" class="product-image">
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
      "id": 168,
      "title": "Charger SXT RWD",
      "price": 32999.99,
      "quantity": 3,
      "total": 98999.97,
      "discountPercentage": 13.39,
      "discountedTotal": 85743.87,
      "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
    },
    {
      "id": 78,
      "title": "Apple MacBook Pro 14 Inch Space Grey",
      "price": 1999.99,
      "quantity": 2,
      "total": 3999.98,
      "discountPercentage": 18.52,
      "discountedTotal": 3259.18,
      "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Apple%20MacBook%20Pro%2014%20Inch%20Space%20Grey/thumbnail.png"
    },
    {
      "id": 183,
      "title": "Green Oval Earring",
      "price": 24.99,
      "quantity": 5,
      "total": 124.95,
      "discountPercentage": 6.28,
      "discountedTotal": 117.1,
      "thumbnail": "https://cdn.dummyjson.com/products/images/womens-jewellery/Green%20Oval%20Earring/thumbnail.png"
    },
    {
      "id": 100,
      "title": "Apple Airpods",
      "price": 129.99,
      "quantity": 5,
      "total": 649.95,
      "discountPercentage": 12.84,
      "discountedTotal": 566.5,
      "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/thumbnail.png"
    },
    {
          "id": 108,
          "title": "iPhone 12 Silicone Case with MagSafe Plum",
          "price": 29.99,
          "quantity": 2,
          "total": 59.98,
          "discountPercentage": 14.68,
          "discountedTotal": 51.17,
          "thumbnail": "https://cdn.dummyjson.com/products/images/mobile-accessories/iPhone%2012%20Silicone%20Case%20with%20MagSafe%20Plum/thumbnail.png"
        },
        {
          "id": 138,
          "title": "Baseball Ball",
          "price": 8.99,
          "quantity": 5,
          "total": 44.95,
          "discountPercentage": 18.49,
          "discountedTotal": 36.64,
          "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Baseball%20Ball/thumbnail.png"
        },
        {
          "id": 157,
          "title": "Party Glasses",
          "price": 19.99,
          "quantity": 2,
          "total": 39.98,
          "discountPercentage": 19.17,
          "discountedTotal": 32.32,
          "thumbnail": "https://cdn.dummyjson.com/products/images/sunglasses/Party%20Glasses/thumbnail.png"
        },
        {
          "id": 8,
          "title": "Dior J'adore",
          "price": 89.99,
          "quantity": 3,
          "total": 269.97,
          "discountPercentage": 10.79,
          "discountedTotal": 240.84,
          "thumbnail": "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png"
        },
        {
          "id": 80,
          "title": "Huawei Matebook X Pro",
          "price": 1399.99,
          "quantity": 5,
          "total": 6999.95,
          "discountPercentage": 9.99,
          "discountedTotal": 6300.65,
          "thumbnail": "https://cdn.dummyjson.com/products/images/laptops/Huawei%20Matebook%20X%20Pro/thumbnail.png"
        },
        {
          "id": 28,
          "title": "Ice Cream",
          "price": 5.49,
          "quantity": 3,
          "total": 16.47,
          "discountPercentage": 10,
          "discountedTotal": 14.82,
          "thumbnail": "https://cdn.dummyjson.com/products/images/groceries/Ice%20Cream/thumbnail.png"
        }
])
</script>