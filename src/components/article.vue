<template>
  <div class="artticle">
    <h1>page article!</h1>
    <p>

    </p>
  </div>
</template>

<script>
import Article from '../components/article.vue'
import axios from 'axios'

export default {
  name: 'article',
  components: {
    Article
  },
  created() {
    this.getArticles();
  },

  methods: {
    getArticles() {
      axios.get("https://jsonplaceholder.typicode.com/post/{id}/")
        .then(response => {
          this.articles = response.data;
          console.log(this.articles);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
}

</script>