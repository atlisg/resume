<template>
  <div class="page-container">
    <h2 class="main-title">{{ mainTitle }}</h2>
    <frontPage v-bind:paragraphs="paragraphs" />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('work', {
  data() {
    return {
      mainTitle: 'Up and running',
      paragraphs: [
        {
          title: 'Ethicode.org (this website)',
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
            img: 'ethicode.png',
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
            img: 'veganbotscreen.png',
            name: 'veganbot',
          },
        },
        {
          title: 'Hvert fara peningarnir?',
          smallText:
            "'Hvert fara peningarnir?' or 'Where does the money go?' is a website displaying the books for the town of Kópavogur in a user friendly way to increase transparency on how the town's finance is managed. The town of Kópavogur was the first establishment in Iceland to open their books in this way but now many other towns and counties have followed suit. The client was built using Angular.js, the server with Node.js and a Python script was used to move the data from the towns SQL database into a super fast NoSQL ElasticSearch search engine.",
          links: [
            {
              linkText: 'hfp.kopavogur.is',
              url: 'https://hfp.kopavogur.is',
            },
            {
              linkText: 'GitHub repo',
              url: 'https://github.com/agirmar92/HvertFaraPeningarnir',
            },
          ],
          image: {
            img: 'hfpscreen.png',
            name: 'hfp',
          },
        },
      ],
    };
  },
});
</script>

<style scoped>
.main-title {
  padding-top: 200px;
  margin: 0 100px;
  font-size: 48px;
  text-align: left;
  line-height: 100px;
  color: #9c27b0;
  animation: fadeInBottom 1s;
}

@media screen and (min-width: 800px) {
  .main-title {
    font-size: 132px;
    line-height: 120px;
  }
}
</style>
