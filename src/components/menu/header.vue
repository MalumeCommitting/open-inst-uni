<script>
export default {};
</script>
<template>
  <div class="container-fluid">
    <div class="row">
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
                <router-link to="/about" class="nav-link">About OI University</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/programmes" class="nav-link"
                  >Programmes</router-link
                >
              </li>
            </ul>
            <form class="d-flex">
              <router-link to="/signin" class="nav-link">
                <button
                  class="btn btn-outline-primary"
                  type="button"
                  style="margin-right: 20px; width: 100px; border-radius: 20px;"
                >
                  Sign in
                </button>
              </router-link>
              <router-link to="/signup" class="nav-link">
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
