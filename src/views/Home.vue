<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <AllPosts></AllPosts>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AllPosts from '@/components/posts/AllPosts'

export default {
  name: 'Home',
  components: {
    AllPosts,
    HelloWorld
  }
}
</script>
