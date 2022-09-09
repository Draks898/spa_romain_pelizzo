<template>
  <div class="article">
    <h1>page article!</h1>
    <div>
      {{article.title}}
      <br />
      {{article.body}}
      <br />
      <div v-for="com in coms" :key="com.id">
        {{com.name}}
        <br />
        {{com.email}}
        <br />
        {{com.body}}
      </div>
    </div>
  </div>
</template>

<script>
import Article from '../components/article.vue'
import axios from 'axios'

export default {
  name: 'Article',
  components: {
    Article
  },
  created() {
    this.getArticle();
    this.getcoms();
  },

  data() {
    return {
      id: this.$route.params.id,
      article: [],
      coms: [],
    }
  },
  methods: {
    getArticle() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
          this.article = response.data;
          console.log(this.article);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getcoms() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}/comments`)
        .then(response => {
          this.coms = response.data;
          console.log(this.coms);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
}

</script>