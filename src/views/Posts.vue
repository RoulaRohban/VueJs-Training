<template>
  <div class="post">
    <AllPosts></AllPosts>
  </div>
</template>

<script>
// @ is an alias to /src
import AllPosts from '@/components/posts/AllPosts'

export default {
  name: 'Posts',
  components: {
    AllPosts
  }
}
</script>
