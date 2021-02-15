<template>
  <div class="page-container">
    <pageHeader v-bind:mainTitle="mainTitle" />
    <textBody v-bind:paragraphs="paragraphs" />
    <continueButton
      v-bind:buttonText="buttonText"
      v-bind:route="nextRoute"
      v-bind:hoverSlide="true"
    />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Projects',
  data() {
    return {
      mainTitle: 'Such moonlight',
      buttonText: 'Continue',
      nextRoute: '/resume/education',
      paragraphs: [
        {
          title: 'FOOD·E',
          text:
            'Released in May 2020, FOOD·E is helping food professionals promote the sustainability of their food. Built with Next.js and MongoDB.',
          links: [
            {
              linkText: 'foodprintcalculator.com',
              url: 'https://foodprintcalculator.com/',
            },
            {
              linkText: 'GitHub repo',
              url: 'https://github.com/ethicodeorg/foodprint-calculator',
            },
          ],
        },
        {
          title: 'Ethicode',
          text:
            'Created in March 2020, the homepage for Ethicode was originally built with Vue.js but after experimenting with that framework a bit, I decided to rewrite this project using Next.js.',
          links: [
            {
              linkText: 'ethicode.org',
              url: 'https://ethicode.org',
            },
            {
              linkText: 'GitHub repo',
              url: 'https://github.com/ethicodeorg/website',
            },
          ],
        },
        {
          title: 'VeganBot.com',
          text:
            'Deployed in May 2018, VeganBot educates and trains people in the vegan conversation, to help veganism spread even faster. The client was built with TypeScript/Angular.js, the server with Node.js and then some Python scripts to gather the content.',
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
        },
        {
          title: 'Hvert fara peningarnir?',
          text:
            "'Hvert fara peningarnir?' or 'Where does the money go?' was my graduation project. Me and two other geniuses took it upon ourselves to display the books for the town of Kópavogur in a user friendly UI to increase transparency on how the town's finance is managed. The town of Kópavogur was the first establishment in Iceland to open their books in this way but now many other towns and counties have followed suit. We used Angular.js on the client, Node.js on the server and a Python script to move the data from the towns SQL database into our super fast NoSQL ElasticSearch search engine.",
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
        },
      ],
    };
  },
});
</script>
