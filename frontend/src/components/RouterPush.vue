<template>
  <div class="container">
    <h1>Router push page</h1>
    <table class="table" id="datatable">
      <thead>
        <tr>
          <th>key</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in datas" :key="d.key">
          <td>{{ d.key }}</td>
          <td>{{ d.val }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css" 

export default {
  props: ["testJson"],
  data() {
    return {
      datas: JSON.parse(this.testJson),
    };
  },
};
</script>

<style>
.container {
  margin-left: 300px;
}
</style>