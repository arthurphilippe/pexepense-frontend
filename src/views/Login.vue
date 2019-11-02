<template>
  <div class="login">
    <h1>Login</h1>
    <input v-model="username" placeholder="username or email" />
    <br />
    <input v-model="password" placeholder="password" />
    <br />
    <button v-on:click="submit">Login</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Login extends Vue {
  username: string = this.$config.apiUrl;
  password!: string;

  submit() {
    alert("submitting");
    localStorage.setItem("token", "12");
  }
}
</script>

<style>
</style>