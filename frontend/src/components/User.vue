<template>
  <div class="container">
    <h1>User Page.</h1>
    <table class="table" id="datatable">
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="d in users" :key="d.id">
          <td>{{ d.id }}</td>
          <td>{{ d.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
    };
  },
  mounted: function() {
    console.log('user mounted.')
    axios.get('http://localhost:3000/users').then(res => {
      this.users = res.data
    })
  }
};
</script>

<style>
.container {
  margin-left: 300px;
}
</style>