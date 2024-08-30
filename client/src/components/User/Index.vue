<template>
  <div>
    <h1>Get All User</h1>
    <h4>จำนวนผู้ใช้งาน {{ users.length }}</h4>
    <p><button v-on:click="navigateTo('/user/create')">เพิ่มผู้ใช้งาน</button></p>
    <div v-for="user in users" v-bind:key="user.id">
      <p>ID : {{ user.id }}</p>
      <p>ชื่อ-นามสกุล : {{ user.name }} - {{ user.lastname }}</p>
      <p>Email : {{ user.email }}</p>
      <p>Password : {{ user.password }}</p>
      <p>
        <button v-on:click="navigateTo('/user/' + user.id)">ดูข้อมูลผู้ใช้</button>
        <button v-on:click="navigateTo('/user/edit/' + user.id)">แก้ไขข้อมูลผู้ใช้</button>
      </p>
      <hr>
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";
export default {
  data () {
    return {
      users: []
    }
  },
  async created () {
    try {
      this.users = (await UsersService.index()).data
    } catch (err) {
      console.log(err)
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
  }
};
</script>

<style scoped>
</style>
