<template>
  <div>
    <h3 class="text-center">Edit Post</h3>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="updatePost">
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
          <div class="form-group">
            <label>Body</label>
            <input type="text" class="form-control" v-model="post.body">
          </div>
          <button type="submit" class="btn btn-primary">Update Post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    updatePost () {
      this.axios
        .post(`http://localhost:8000/api/book/update/${this.$route.params.id}`, this.post)
        .then((response) => {
          this.$router.push({ name: 'posts' })
        })
    }
  }
}
</script>
