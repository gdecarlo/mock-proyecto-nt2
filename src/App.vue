<template>
  <div class="min-h-screen bg-gray-100">
    <nav class="navbar">
      <div class="navbar-links">
        <a href="#">Rol usuario</a>
        <a href="#">Dashboard</a>
        <a href="#" class="ver-carrito">
          Ver carrito
          <span class="cart-count">3</span>
        </a>
        <a href="#" class="salir">Salir</a>
      </div>
    </nav>

    <div class="container">
    <!-- Filtros en la columna izquierda -->
    <AppFilters class="FilterColumn"></AppFilters>

    <!-- Productos en la columna derecha -->
    <AppProducts class="products-column" />
  </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppFilters from './components/AppFilters.vue';
import AppProducts from './components/AppProducts.vue';

</script>

<style>
body {
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  margin: 0;
  padding: 0;
  color: #484848;
  background-color: #f7f7f7;
}
.navbar {
  background-color: #00a699;
  padding: 0 24px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
.navbar-links {
  display: flex;
  gap: 24px;
  align-items: center;
  flex-grow: 1;
}
.navbar-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  transition: color 0.3s ease;
}
.navbar-links a:hover {
  color: #ffd700;
}
.salir {
  margin-left: auto;
}
.container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
  gap: 24px;
}
.filters-column {
  width: 250px;
}
.products-column {
  flex-grow: 1;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 24px;
}
.product-card {
  background-color: #ffffff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.12);
}
.product-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.product-info {
  padding: 20px;
}
.product-title {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #484848;
}
.product-price {
  font-size: 16px;
  color: #00a699;
  font-weight: 600;
  margin-bottom: 12px;
}
.product-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}
.btn {
  padding: 8px 12px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}
.btn-primary {
  background-color: #00a699;
  color: #ffffff;
}
.btn-primary:hover {
  background-color: #008489;
}
.btn-secondary {
  background-color: #ffffff;
  color: #00a699;
  border: 1px solid #00a699;
}
.btn-secondary:hover {
  background-color: #f7f7f7;
}
.cart-icon {
  width: 16px;
  height: 16px;
}

.ver-carrito {
  position: relative;
  display: flex;
  align-items: center;
}
.cart-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #ff0000;
  color: #ffffff;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: bold;
}
@media (max-width: 768px) {
  .navbar {
    padding: 0 16px;
  }
  .container {
    padding: 24px 16px;
  }
  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}
</style>