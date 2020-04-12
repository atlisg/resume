<template>
  <div class="page-container">
    <h2 v-animate="'slide-up'" class="main-title">{{ mainTitle }}</h2>
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
          title: 'Ethicode.org',
          smallText:
            'This website was whipped up in March 2020, originally to create an online résumé but then morphed into a frontpage for Ethicode. The page was built with Vue.js, Webpack and TypeScript.',
          links: [
            {
              linkText: 'ethicode.org',
              url: 'http://ethicode.org',
            },
            {
              linkText: 'GitHub repo',
              url: 'https://github.com/atlisg/resume',
            },
          ],
          image: {
            img: 'ethicodepic.png',
            name: 'ethicode',
          },
        },
        {
          title: 'VeganBot.com',
          smallText:
            'VeganBot provides answers to frequently asked questions about veganism, as well as counter arguments for common justifications for animal abuse. The aim is to educate and train people in the vegan conversation, so that veganism can spread even faster. Released in May 2018, the client was built with TypeScript/Angular.js, the server with Node.js and then some Python scripts to gather the content.',
          links: [
            {
              linkText: 'veganbot.com',
              url: 'http://veganbot.com',
            },
            {
              linkText: 'GitHub repo',
              url: 'https://github.com/atlisg/vegan-bot',
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
  color: #9c27b0;
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
