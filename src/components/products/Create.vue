<script>
import axios from "axios";
import { Field, Form } from "vee-validate";

export default {
  name: "CreateProducts",
  components: {
    Field,
    Form,
    // ErrorMessage,
  },
  data() {
    return {
      product: {
        name: null,
        product_id: "10",
      },
    };
  },
  methods: {
    onSubmit() {
      axios
        .post(
          "https://codechallenge.pikdrive.com/api/new-product",
          this.product
        )
        .then((data) => {
          console.log(data);
        });
    },
    isRequired(value) {
      return value ? true : "This field is required";
    },
  },
};
</script>
<template>
  <div class="col-12 d-flex justify-content-between mt-2 container">
    <label class="h2">New Product</label>
    <div class="btn-toolbar">
      <router-link to="/products" class="btn btn-sm btn-outline-secondary"
        >Products</router-link
      >
    </div>
  </div>
  <div class="col-12 container">
    <div class="flex flex-row">
      <Form v-slot="{ errors }" @submit="onSubmit">
        <div class="col-4"></div>
        <div class="mb-3 row">
          <div class="col-sm-4">
          <label for="staticEmail" class="col-sm-1 col-form-label">Name</label>
            <Field
              type="text"
              class="form-control"
              v-model="product.name"
              name="productname"
              :rules="isRequired"
              placeholder="Product Name"
            />
            <span>{{ errors.productname }}</span>
          </div>
          <div class="col-sm-4">
          <label for="inputPassword" class="col-sm-1 col-form-label"
            >Description</label
          >
            <Field
              type="text"
              class="form-control"
              v-model="product.description"
              name="productdescription"
              placeholder="Product Description"
            />
            <span>{{ errors.productdescription }}</span>
          </div>
          <div class="col-sm-4">
          <label for="inputPassword" class="col-sm-1 col-form-label"
            >Quantiy</label
          >
            <Field
              type="number"
              class="form-control"
              v-model="product.quantity"
              name="productquantity"
              placeholder="Quantity"
            />
            <span>{{ errors.productquantity }}</span>
          </div>
        </div>
        <div class="my-2">
          <button type="submit" class="btn btn-sm btn-primary float-end">
            Add product
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
<style></style>
