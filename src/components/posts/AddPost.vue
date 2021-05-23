<template>
  <div>
    <h3 class="text-center">Add Post</h3>
    <div class="row">
      <div class="col-md-6">
        <form @submit.prevent="addPost">
          <div class="form-group">
            <label>Title</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
          <div class="form-group">
            <label>Body</label>
            <input type="text" class="form-control" v-model="post.body">
          </div>
          <button type="submit" class="btn btn-primary">Add Post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      post: {}
    }
  },
  methods: {
    addPost: function () {
      this.axios
        .post('http://localhost:8000/api/book/add', this.post)
        .then(response => (
          this.$router.push({ name: 'posts' })
        ))
        .catch(error => console.log(error))
    }
  }
}
</script>
