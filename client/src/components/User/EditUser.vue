<template>
  <div>
    <h1>Edit User</h1>
    <form v-on:submit.prevent = editUser>
      <p>Name : <input type="text" v-model="user.name"></p>
      <p>Lastname : <input type="text" v-model="user.lastname"></p>
      <p>Email : <input type="text" v-model="user.email"></p>
      <p>Password : <input type="text" v-model="user.password"></p>
      <p>
        <button type="submit">Update user</button>
        <button v-on:click="navigateTo('/users')">ย้อนกลับ</button>
      </p>
    </form>
  </div>
</template>

<script>
import UsersService from '@/services/UsersService'

export default {
  data () {
    return {
      user: {
        name: '',
        lastname: '',
        email: '',
        password: '',
        status: 'active'
      }
    }
  },
  methods: {
    async editUser () {
      try {
        await UsersService.put(this.user)
        this.$router.push({
          name: 'users'
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created () {
    try {
      let userId = this.$route.params.userId
      this.user = (await UsersService.show(userId)).data
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>

</style>