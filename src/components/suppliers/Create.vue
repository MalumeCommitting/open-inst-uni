<script>
import axios from 'axios';
import { Field, Form } from 'vee-validate';

export default {
  name: 'CreateSuppliers',
   components: {
    Field,
    Form,
    // ErrorMessage,
  },
  data() {
    return {
      supplier: {
        name: null,
        supplier_id: '10',
      },
    };
  },
  methods: {
    onSubmit() {
       axios.post('https://codechallenge.pikdrive.com/api/new-supplier', this.supplier).then((data) => {
         console.log(data);
      });
    },
    isRequired(value) {
      return value ? true : 'This field is required';
    },
  }
}
</script>
<template>
  <div class="col-12 d-flex justify-content-between mt-2 container">
      <label class="h2">New Supplier</label>
      <div class="btn-toolbar">
        <router-link to="/suppliers" class="btn btn-sm btn-outline-secondary">Supplier List</router-link>
      </div>
  </div>
  <div class="col-12 container">
    <div class="flex flex-row">
      <div class="col-6 offset-2">
        <Form v-slot="{ errors }" @submit="onSubmit">
          <Field 
            type="text"
            class="form-control" 
            v-model="supplier.name" 
            name="suppliername" 
            :rules="isRequired"
          />
          <span>{{ errors.suppliername }}</span>
        <div class="my-2">
          <button type="submit" class="btn btn-sm btn-primary float-end">Add supplier</button>
        </div>
        </Form>
      </div>
    </div>
  </div>

</template>
<style>

</style>