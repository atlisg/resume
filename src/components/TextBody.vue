<template>
  <div class="text-body">
    <div v-for="p in paragraphs" v-bind:key="p.title">
      <p v-if="p.title" class="paragraph-title">{{ p.title }}</p>
      <p v-if="p.about" class="paragraph-about">{{ p.about }}</p>
      <p v-if="p.text" class="paragraph-text">{{ p.text }}</p>
      <a v-if="p.email" class="paragraph-link" :href="`mailto:${p.email}`">{{ p.email }}</a>
      <a
        v-for="link in p.links"
        v-bind:key="link.linkText"
        class="paragraph-link"
        :href="link.url"
        target="_blank"
        >{{ link.linkText }}</a
      >
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('textBody', {
  props: ['paragraphs'],
});
</script>

<style scoped>
.text-body {
  max-width: 800px;
  margin: 30px auto 0;
  background: white;
  text-align: left;
  padding: 0 0 20px;
  box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.25);
}
.paragraph-title {
  font-size: 24px;
  margin: 0;
  padding: 20px 20px 0;
  margin-top: 30px;
  color: #e91e63;
  animation: fadeInBottom 0.5s;
}
.paragraph-about {
  padding: 0 20px;
  font-size: 14px;
  font-style: italic;
  animation: fadeInBottom 0.5s;
}
.paragraph-text {
  padding: 0 20px;
  font-size: 18px;
  animation: fadeInBottom 0.7s;
}
.paragraph-link {
  display: block;
  padding: 0 20px;
  text-decoration: none;
  color: #3f51b5;
  animation: fadeInBottom 0.7s;
}

@media screen and (min-width: 800px) {
  .text-body {
    padding: 5px 0 20px;
  }
  .paragraph-title {
    padding: 20px 40px 0;
  }
  .paragraph-about {
    padding: 0 40px;
  }
  .paragraph-text {
    padding: 0 40px;
  }
  .paragraph-link {
    display: inline;
    padding: 0 40px;
  }
}
</style>
