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
      mainTitle: 'So personal',
      buttonText: 'Alright, alright',
      nextRoute: '/resume/education',
      paragraphs: [
        {
          title: 'Ethicode.org',
          text:
            "I created this project in March 2020 to familiarize myself with the Javascript framework Vue.js, originally to create an online résumé but then morphed into a frontpage for Ethicode. At first glance, I really like it. At least for a small project like this to whip up in no time, it's a great fit. I used a template to kickstart a project with webpack and typescript and I was impressed with the quick reload time and the learning curve was very minimal, as I have quite a bit of experience in React.js and Angular.js.",
          links: [
            {
              linkText: 'ethicode.org',
              url: 'http://ethicode.org',
            },
            {
              linkText: 'GitHub repo',
              url: 'https://github.com/atlisg/resume',
            },
            {
              linkText: 'Template used',
              url: 'https://github.com/ryutamaki/vue-template-webpack-typescript',
            },
          ],
        },
        {
          title: 'VeganBot.com',
          text:
            'VeganBot provides answers to frequently asked questions about veganism, as well as counter arguments for common justifications for animal abuse. The aim is to educate and train people in the vegan conversation, so that veganism can spread even faster. The idea for this project was born in the final year of my degree and I worked on it on and off after graduating and in May 2018 it was released. The client was built with TypeScript/Angular.js, the server with Node.js and then some Python scripts to gather the content.',
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
