<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "ReportsIndex",
  data() {
    return {
      productSuppliers: [],
      moment: moment,
    };
  },
  created() {
    this.fetchProductSuppliers();
  },

  methods: {
    fetchProductSuppliers() {
      axios
        .get("https://codechallenge.pikdrive.com/api/product-suppliers")
        .then(({ data }) => {
          this.productSuppliers = data.data;
        });
    },
  },
};
</script>
<template>
  <div class="container" style="margin-top: 200px; margin-bottom: 80px">
    <div class="row featurette">
      <div class="col-md-5" style="margin-top: auto; margin-bottom: auto;">
        <form>
          <img
            class="mb-4"
            src="../../assets/OILogo.png"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">Please sign up here</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Repeat Password"
            />
            <label for="floatingPassword">Repeat Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign up
          </button>
        </form>
        <div class="row">
        <div class="col-md-6">
          <router-link to="/" class="nav-link">Forgot password?</router-link>
        </div>
        <div class="col-md-6">
        <router-link to="/products" class="nav-link float-end"
          >Sign in</router-link
        >
        </div>
        </div>
      </div>
      <div class="col-md-5">
        <img src="../../assets/feature1.jpg" class="img-responsive" alt="..." />
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <footer>
    <div class="container pt-5 border-bottom">
      <div class="row">
        <div class="col-md-3 col-sm-12 mb-3 text-center">
          <img
            class="img-fluid"
            style="width: 200px; height: 60px;"
            src="../../assets/OILogoFooter.png"
            alt=""
          />
        </div>
        <div class="col-md-3 col-sm-6 col-6 p-0 float-left mb-3">
          <h5 class="mb-4 font-weight-bold text-uppercase">Solutions</h5>
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="../sales/sales-performance-market-pipeline.html"
                >About</a
              >
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="../project-management/project-management.html"
                >Programmes</a
              >
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="../workforce/workforce-organization-management-hr.html"
                >Cohort</a
              >
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="../e-commerce/e-commerce.html"> Gallery</a>
            </li>
          </ul>
        </div>

        <div class="col-md-3 col-sm-6 col-6 p-0 mb-3 float-left">
          <h5 class="mb-4 font-weight-bold text-uppercase">Contact Us</h5>
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://github.com/naologic">Email: oiuni@gmail.com</a>
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="tel:254-726-304245">Tel: 0722000000</a>
            </li>
          </ul>
        </div>

        <div class="col-md-3 col-sm-6 col-6 mb-3 p-0 float-left">
          <h5 class="mb-4 font-weight-bold text-uppercase">We are social</h5>
          <ul class="list-group">
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://www.linkedin.com/in/oyaro"
                > LinkedIn</a
              >
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://twitter.com/osmadeit"
                > Twitter</a
              >
            </li>
            <li class="list-group-item bg-transparent border-0 p-0 mb-2">
              <a href="https://www.facebook.com/osmadeit/" target="_blank"
                > Facebook</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  </div>
</template>

<style>
a {
  color: #818494;
  font-weight: 500;
  text-decoration: none;
  background-color: transparent;
}

a:hover {
  color: #007bff;
  text-decoration: none;
}

footer {
  background: #ebf4fa;
}
</style>
