<template>
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

</template>

<style>
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
</style>