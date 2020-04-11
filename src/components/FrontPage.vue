<template>
  <div class="front-page">
    <div v-for="p in paragraphs" v-bind:key="p.title">
      <h3 v-if="p.title" v-bind:class="`paragraph-title paragraph-title-${p.title.toLowerCase()}`">
        {{ p.title }}
      </h3>
      <p v-if="p.text" v-bind:class="`paragraph-text paragraph-text-${$route.name.toLowerCase()}`">
        {{ p.text }}
      </p>
      <p v-if="p.about" class="paragraph-about">{{ p.about }}</p>
      <p v-if="p.smallText" class="paragraph-small-text">{{ p.smallText }}</p>
      <img
        v-if="p.image"
        :src="getImgUrl(p.image.img)"
        v-bind:alt="p.image.img"
        class="picture"
        v-bind:class="`picture-${p.image.name}`"
      />
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

export default Vue.component('frontPage', {
  props: ['paragraphs'],
  methods: {
    getImgUrl: function (pic) {
      return require('../assets/' + pic);
    },
  },
});
</script>

<style scoped>
.front-page {
  max-width: 1000px;
  margin: 0 200px;
  text-align: left;
  padding: 50px 0;
}
.paragraph-title {
  display: inline-block;
  font-size: 64px;
  margin: 0;
  padding: 0 20px;
  color: #e91e63;
  animation: fadeInBottom 0.5s;
}
.paragraph-title-why {
  transform: rotate(60deg);
}
.paragraph-title-how {
  transform: rotate(300deg);
}
.paragraph-title-who {
  transform: rotate(180deg);
}
.paragraph-about {
  padding: 0 20px;
  color: #9c27b0;
  font-size: 24px;
  font-style: italic;
  animation: fadeInBottom 0.5s;
}
.paragraph-text {
  padding: 0 20px;
  color: #eee;
  font-size: 32px;
  animation: fadeInBottom 0.7s;
}
.paragraph-small-text {
  padding: 0 20px;
  color: #222;
  font-size: 24px;
  animation: fadeInBottom 0.7s;
}
.paragraph-text-work {
  color: #222;
}
.paragraph-link {
  display: inline-block;
  padding: 20px;
  text-decoration: none;
  color: #3f51b5;
  font-size: 21px;
  animation: fadeInBottom 0.7s;
}
.paragraph-link:hover {
  opacity: 0.7;
}
.picture {
  display: block;
  padding: 0 20px;
  animation: fadeInBottom 0.7s;
}
.picture-atli {
  height: 300px;
  width: 300px;
}

@media screen and (min-width: 800px) {
  .text-body {
    padding: 5px 0 20px;
  }
  .paragraph-title {
    padding: 60px 60px 20px;
  }
  .paragraph-title-why {
    padding: 200px 115px 40px;
  }
  .paragraph-title-how {
    padding: 100px 20px 40px;
  }
  .paragraph-title-who {
    padding: 40px 60px 80px;
  }
  .paragraph-about {
    padding: 0 60px;
  }
  .paragraph-text {
    padding: 0 60px;
  }
  .paragraph-small-text {
    padding: 0 60px;
  }
  .paragraph-link {
    padding: 30px 60px;
  }
  .picture {
    padding: 0 60px;
  }
  .picture-atli {
    height: 500px;
    width: 500px;
  }
  .picture-ethicode,
  .picture-veganbot,
  .picture-hfp {
    width: calc(100% - 120px);
  }
}
</style>
