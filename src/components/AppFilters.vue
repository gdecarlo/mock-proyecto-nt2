<template>
    <aside class="sidebar">
      <h3 class="filter-title">Filtros de Búsqueda</h3>
      <div v-for="filter in filters" :key="filter" class="filter-group">
        <h4>{{ filter }}</h4>
        <div v-for="option in options" :key="option" class="filter-option">
          <label><input type="checkbox" /> {{ option }}</label>
        </div>
      </div>
      <div class="filter-group">
        <h4>Rango de Precio</h4>
        <input type="range" min="0" max="1000" />
        <div class="price-range">Hasta $1000</div>
      </div>
    </aside>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const filters = ref(['Categoría', 'Marca', 'Tamaño'])
  const options = ref(['Opcion 1', 'Opcion 2', 'Opcion 3'])
  </script>
  
  <style>
  .sidebar {
    width: 250px;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
  }
  .filter-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .filter-group {
    margin-bottom: 24px;
  }
  .filter-group h4 {
    margin-bottom: 8px;
  }
  .filter-option {
    margin-bottom: 8px;
  }
  .price-range {
    margin-top: 8px;
    font-weight: bold;
  }
  </style>