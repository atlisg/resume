<template>
  <div class="page-container">
    <h2 v-if="$route.path === '/'" v-animate="'slide-up'" class="main-title">{{ mainTitle }}</h2>
    <h2 v-else class="main-title">{{ mainTitle }}</h2>
    <frontPage v-bind:paragraphs="paragraphs" />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('work', {
  data() {
    return {
      mainTitle: 'Featured',
      paragraphs: [
        {
          title: 'Foodprint Calculator',
          smallText:
            'Released in May 2020, the Foodprint Calculator determines the environmental impact of a single meal, given a list of its ingredients. Built with Next.js and MongoDB.',
          links: [
            {
              linkText: 'foodprintcalculator.com',
              url: 'https://foodprintcalculator.com/',
            },
          ],
          image: {
            img: 'spori.png',
            name: 'foodprintcalculator',
          },
        },
        {
          title: 'Ethicode.org',
          smallText:
            'The Ethicode homepage (this website) was released in March 2020. Built with Vue.js.',
          links: [
            {
              linkText: 'ethicode.org',
              url: 'http://ethicode.org',
            },
          ],
          image: {
            img: 'ethicodeorg.png',
            name: 'ethicode',
          },
        },
        {
          title: 'VeganBot',
          smallText:
            'VeganBot provides answers to frequently asked questions about veganism, as well as counter arguments for common justifications for animal abuse. The aim is to educate and train people in the vegan conversation, so that veganism can spread even faster. Released in May 2018, the client was built with TypeScript/Angular.js, the server with Node.js and then some Python scripts to gather the content.',
          links: [
            {
              linkText: 'veganbot.com',
              url: 'http://veganbot.com',
            },
          ],
          image: {
            img: 'veganbotpic.png',
            name: 'veganbot',
          },
        },
      ],
    };
  },
});
</script>

<style scoped>
.main-title {
  max-width: 1200px;
  padding-top: 100px;
  margin: 0 auto;
  font-size: 36px;
  text-align: left;
  line-height: 50px;
  color: #222;
  -webkit-animation: fadeInBottom 1s;
  animation: fadeInBottom 1s;
}

@media screen and (min-width: 600px) {
  .main-title {
    padding-top: 160px;
    font-size: 48px;
    line-height: 100px;
  }
}

@media screen and (min-width: 1000px) {
  .main-title {
    font-size: 72px;
    line-height: 120px;
  }
}

@media screen and (min-width: 1200px) {
  .main-title {
    font-size: 104px;
    line-height: 120px;
  }
}
</style>
