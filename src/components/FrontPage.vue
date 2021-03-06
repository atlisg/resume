<template>
  <div v-if="$route.path === '/'" class="front-page">
    <div
      v-for="p in paragraphs"
      v-bind:key="p.title"
      class="paragraph"
      v-bind:class="{ 'paragraph-contact': isContact }"
    >
      <h3
        v-if="p.title"
        v-animate="'slide-up'"
        class="paragraph-title"
        v-bind:class="{
          'paragraph-title-why': p.title === 'Why',
          'paragraph-title-how': p.title === 'How',
          'paragraph-title-who': p.title === 'Who',
          'paragraph-title-what': p.title === 'What now',
        }"
      >
        {{ p.title }}
      </h3>
      <p
        v-if="p.text"
        v-animate="'slide-up'"
        class="paragraph-text"
        v-bind:class="{ 'paragraph-text-contact': isContact }"
      >
        {{ p.text }}
      </p>
      <img
        v-if="p.image"
        v-animate="'slide-up'"
        :src="getImgUrl(p.image.img)"
        v-bind:alt="p.image.img"
        class="picture"
        v-bind:class="`picture-${p.image.name}`"
      />
      <p v-if="p.about" v-animate="'slide-up'" class="paragraph-about">
        {{ p.about }}
      </p>
      <p v-if="p.smallText" v-animate="'slide-up'" class="paragraph-small-text">
        {{ p.smallText }}
      </p>
      <a v-if="p.email" v-animate="'slide-up'" class="paragraph-link" :href="`mailto:${p.email}`">
        {{ p.email }}
      </a>
      <a
        v-for="link in p.links"
        v-animate="'slide-up'"
        v-bind:key="link.linkText"
        class="paragraph-link"
        :href="link.url"
        target="_blank"
        >{{ link.linkText }}</a
      >
      <router-link
        v-if="p.route"
        v-animate="'slide-up'"
        class="paragraph-link"
        :to="p.route.route"
        >{{ p.route.text }}</router-link
      >
    </div>
  </div>
  <div v-else class="front-page">
    <div
      v-for="p in paragraphs"
      v-bind:key="p.title"
      class="paragraph"
      v-bind:class="{ 'paragraph-contact': isContact }"
    >
      <h3
        v-if="p.title"
        class="paragraph-title"
        v-bind:class="{
          'paragraph-title-why': p.title === 'Why',
          'paragraph-title-how': p.title === 'How',
          'paragraph-title-who': p.title === 'Who',
          'paragraph-title-what': p.title === 'What now',
        }"
      >
        {{ p.title }}
      </h3>
      <p
        v-if="p.text"
        class="paragraph-text"
        v-bind:class="{ 'paragraph-text-contact': isContact }"
      >
        {{ p.text }}
      </p>
      <img
        v-if="p.image"
        :src="getImgUrl(p.image.img)"
        v-bind:alt="p.image.img"
        class="picture"
        v-bind:class="`picture-${p.image.name}`"
      />
      <p v-if="p.about" class="paragraph-about">
        {{ p.about }}
      </p>
      <p v-if="p.smallText" class="paragraph-small-text">
        {{ p.smallText }}
      </p>
      <a v-if="p.email" class="paragraph-link" :href="`mailto:${p.email}`">
        {{ p.email }}
      </a>
      <a
        v-for="link in p.links"
        v-bind:key="link.linkText"
        class="paragraph-link"
        :href="link.url"
        target="_blank"
        >{{ link.linkText }}</a
      >
      <router-link v-if="p.route" class="paragraph-link" :to="p.route.route">{{
        p.route.text
      }}</router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('frontPage', {
  props: ['paragraphs', 'isContact'],
  methods: {
    getImgUrl: function (pic) {
      return require('../assets/' + pic);
    },
  },
});
</script>

<style scoped>
.front-page {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  text-align: left;
  padding: 50px 0;
}
.paragraph {
  margin: 0 auto 20px;
  width: 555px;
}
.paragraph:nth-child(2n) {
  padding-top: 50px;
}
.paragraph-contact {
  margin-bottom: 0;
}
.paragraph-title {
  display: block;
  font-size: 32px;
  margin: 0;
  padding: 30px 0 20px;
  color: #f0006d;
  -webkit-animation: fadeInBottom 0.5s;
  animation: fadeInBottom 0.5s;
  font-style: italic;
}
.paragraph-title-why {
  display: inline-block;
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
}
.paragraph-title-how {
  display: inline-block;
  -webkit-transform: rotate(300deg);
  transform: rotate(300deg);
}
.paragraph-title-who {
  display: inline-block;
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
}
.paragraph-title-what {
  display: inline-block;
  -webkit-transform: rotate(200deg);
  transform: rotate(200deg);
}
.paragraph-about {
  padding: 0;
  color: #ffd300;
  font-size: 24px;
  font-style: italic;
  -webkit-animation: fadeInBottom 0.5s;
  animation: fadeInBottom 0.5s;
}
.paragraph-text {
  padding: 0;
  color: #eee;
  font-size: 24px;
  -webkit-animation: fadeInBottom 0.7s;
  animation: fadeInBottom 0.7s;
}
.paragraph-small-text {
  display: inline-block;
  padding: 0;
  color: #222;
  font-size: 18px;
  -webkit-animation: fadeInBottom 0.7s;
  animation: fadeInBottom 0.7s;
}
.paragraph-text-contact {
  display: inline-block;
  margin-right: 20px;
  color: #222;
}
.paragraph-link {
  display: block;
  padding: 10px 0;
  margin-right: 40px;
  text-decoration: none;
  color: #00bad4;
  font-size: 21px;
  -webkit-animation: fadeInBottom 0.7s;
  animation: fadeInBottom 0.7s;
}
.paragraph-link:hover {
  opacity: 0.7;
}
.picture {
  display: block;
  padding: 0;
  width: 100%;
  -webkit-animation: fadeInBottom 0.7s;
  animation: fadeInBottom 0.7s;
}

@media screen and (min-width: 800px) {
  .paragraph {
    margin: 0 auto 20px;
  }
  .paragraph-contact {
    margin-bottom: 0;
  }
  .paragraph-title {
    padding: 60px 0 20px;
    font-size: 48px;
  }
  .paragraph-title-why,
  .paragraph-title-how {
    padding: 0;
  }
  .paragraph-about {
    padding: 0;
  }
  .paragraph-text {
    padding: 0;
    font-size: 32px;
  }
  .paragraph-small-text {
    padding: 0;
    font-size: 24px;
  }
  .paragraph-link {
    display: inline-block;
    padding: 30px 0;
    font-size: 24px;
  }
  .picture {
    padding: 0;
    width: 100%;
  }
}

@media screen and (min-width: 1200px) {
  .paragraph {
    margin: 0 0 80px;
  }
  .paragraph-contact {
    margin-bottom: 0;
  }
}
</style>
