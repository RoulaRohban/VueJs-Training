<template>
  <div>
    <h3 class="text-center">All Posts</h3><br/>

    <table class="table table-bordered">
      <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in posts" :key="post.id">
        <td>{{ post.id }}</td>
        <td>{{ post.title }}</td>
        <td>{{ post.body }}</td>
        <td>
          <div class="btn-group" role="group">
            <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link>
            <button class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AllPosts',
  data: function () {
    return {
      posts: []
    }
  },
  mounted () {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.posts = response.data
        // console.log(this.posts)
      })
  },
  methods: {
    deletePost (id) {
      this.axios
        .delete(`http://localhost:8000/api/book/delete/${id}`)
        .then(response => {
          const i = this.books.map(item => item.id).indexOf(id) // find index of your object
          this.books.splice(i, 1)
        })
    }
  }
}
</script>
