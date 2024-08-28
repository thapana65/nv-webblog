<template>
  <div>
    <h1>Get All User</h1>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";
export default {
  async created() {
    let results = (await UsersService.index()).data;
    console.log(results);
  },
};
</script>

<style></style>
