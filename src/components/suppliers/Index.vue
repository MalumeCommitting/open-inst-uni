<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'SuppliersIndex',
  data() {
    return {
      suppliers: [],
      moment: moment,
    };
  },
  created() {
    this.fetchSuppliers();
  },
  methods: {
    fetchSuppliers() {
      axios.get('https://codechallenge.pikdrive.com/api/suppliers').then(({data}) => {
        this.suppliers = data.data;
      })
    }
  }

}
</script>
<template>
  <div class="col-12 d-flex justify-content-between mt-2">
      <label class="h2">Suppliers</label>
      <div class="btn-toolbar">
        <router-link to="/suppliers/create" class="btn btn-sm btn-outline-secondary">Add Supplier</router-link>
      </div>
  </div>
  <div class="col-12">
    <div class="flex flex-row">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Order Number</th>
              <th>Create At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="supplier in suppliers" :key="supplier.id">
              <td>{{ supplier.id }}</td>
              <td>{{ supplier.name }}</td>
              <td>{{ moment(supplier.created_at).format("DD-MM-YYYY hh:mm:ss") }}</td>
            </tr>
         
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>
<style>

</style>