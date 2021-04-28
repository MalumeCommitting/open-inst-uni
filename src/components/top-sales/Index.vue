<script>
import axios from 'axios';
import moment from 'moment';

export default {
  name: 'TopSaleIndex',
  data() {
    return {
      sales: [],
      moment: moment,
    };
  },
  created() {
    this.fetchTopSales();
  },

  methods: {
    
    fetchTopSales() {
       axios.get('https://codechallenge.pikdrive.com/api/top-sales').then(({data}) => {
         this.sales = data.data;
       })
    }
  }
}
</script>
<template>
  <div class="col-12 d-flex justify-content-between mt-2">
      <label class="h2">Top 3 Sales</label>
  </div>
  <div class="col-12">
    <div class="flex flex-row">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Count</th>
              <th>Order Number</th>
              <th>Create At</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sale in sales" :key="sale.id">
              <td>{{ sale.id }}</td>
              <td>{{ sale.count }}</td>
              <td>{{ sale.orderNumber}}</td>
              <td>{{ moment(sale.created_at).format("DD-MM-YYYY hh:mm:ss") }}</td>
            </tr>
         
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style>

</style>