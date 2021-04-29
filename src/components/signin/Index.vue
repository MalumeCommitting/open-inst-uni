<script>
//import { Field, Form } from "vee-validate";

export default {
  name: "SignUpIndex",
  /*components: {
    Field,
    Form,
    // ErrorMessage,
  },
  methods: {
    isRequired(value) {
      return value ? true : "This field is required";
    },
  },*/
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
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

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

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button class="w-100 btn btn-lg btn-primary" type="submit">
            Sign in
          </button>
        </form>
        <div class="row">
          <div class="col-md-6">
            <router-link to="/" class="nav-link">Forgot password?</router-link>
          </div>
          <div class="col-md-6">
            <router-link to="/signup" class="nav-link float-end"
              >Create a new account</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-md-5">
        <img src="../../assets/feature1.jpg" class="img-responsive" alt="..." />
      </div>
    </div>
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
