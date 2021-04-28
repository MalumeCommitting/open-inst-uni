<script>
export default {};
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <!-- <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <span data-feather="home"></span>
                Dashboard
              </a>
            </li>
            <li class="nav-item">
                <span data-feather="file"></span>
                <router-link to="/products" class="nav-link">Products</router-link>
            </li>
            <li class="nav-item">
              <span data-feather="users"></span>
              <router-link to="/suppliers" class="nav-link">Suppliers</router-link>
            </li>
            <li class="nav-item">
              <span data-feather="users"></span>
              <router-link to="/product-suppliers" class="nav-link">Product Suppliers</router-link>
            </li>
            <li class="nav-item">
                <span data-feather="file"></span>
                <router-link to="/orders" class="nav-link">Orders</router-link>
            </li>
          </ul>

          <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <span>Sales</span>
            <a class="link-secondary" href="#" aria-label="Add a new report">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          <ul class="nav flex-column mb-2">
            <li class="nav-item">
              <span data-feather="file-text"></span>
              <router-link to="/sales" class="nav-link">Top Sales</router-link>
            </li>
          </ul>
        </div>
      </nav> -->
      <nav
        class="navbar navbar-expand-lg navbar-light fixed-top"
        style="background-color: #e3f2fd;"
      >
        <div class="container-fluid">
          <a
            class="navbar-brand"
            href="#"
            style="background-color: transparent; box-shadow: none;"
          >
            <img
              src="../../assets/OILogo.png"
              alt=""
              width="80"
              height="74"
              class="d-inline-block align-text-top"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor03"
            aria-controls="navbarColor03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/orders" class="nav-link">About</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/products" class="nav-link"
                  >Programmes</router-link
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Cohort</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Gallery</a>
              </li>
            </ul>
            <form class="d-flex">
              <router-link to="/products" class="nav-link">
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  style="margin-right: 20px; width: 100px; border-radius: 20px;"
                >
                  Sign in
                </button>
              </router-link>
              <router-link to="/product-suppliers" class="nav-link">
                <button
                  class="btn btn-primary"
                  type="button"
                  style="width: 100px; border-radius: 20px;"
                >
                  Register
                </button>
              </router-link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
<style></style>
