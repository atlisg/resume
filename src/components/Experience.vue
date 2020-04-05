<template>
  <div class="experience">
    <pageHeader v-bind:mainTitle="mainTitle" />
    <textBody v-bind:paragraphs="paragraphs" />
    <continueButton
      v-bind:buttonText="buttonText"
      v-bind:route="nextRoute"
      v-bind:hoverFill="true"
    />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Experience',
  data() {
    return {
      mainTitle: 'So much work',
      buttonText: "I'm listening",
      nextRoute: '/skills',
      paragraphs: [
        {
          title: 'Software Engineer at Dohop, Sep 2017 - current',
          about:
            'Dohop provides virtual interline platforms for airlines, i.e. a flight search and booking engine to connect with other airlines.',
          text:
            "I've been so lucky to work with a lot of excellent people at Dohop. I've learned so much and evolved as an engineer and as a person. During my time at Dohop I have spent most of my time working on our biggest partner platform, easyJet.",
          links: [
            {
              linkText: 'dohop.com',
              url: 'https://dohop.com',
            },
            {
              linkText: 'worldwide.easyjet.com',
              url: 'https://worldwide.easyjet.com',
            },
          ],
        },
        {
          title: 'Software Engineer at Code North, May 2016 - Sep 2017',
          about:
            'Code North provides business solutions connecting dated software with fast, modern interfaces and architechtures.',
          text:
            'My first gig after graduating was at this brand new startup and I was only the second employee to be hired. There was always a lot of action in both the rapid software development and the business side of things. I worked on business solutions for another software company, DK Hugbúnaður, and created an Aircraft Maintenance Control System for Icelandair.',
          links: [
            {
              linkText: 'codenorth.com',
              url: 'https://www.codenorth.com',
            },
          ],
        },
        {
          title: 'Software Engineer and Instructor at Reykjavik University, Jun 2015 - May 2016',
          about:
            'Reykjavik University is the largest private university in Iceland with more than 3,500 students',
          text:
            "I spent the summer of 2015 automating processes for the School of Computer Science Offices. I then worked part-time during the final year of my degree as an instructor in the courses 'Calculus and Statistics' and 'Programming languages'.",
          links: [
            {
              linkText: 'ru.is',
              url: 'https://www.ru.is',
            },
          ],
        },
        {
          title:
            'Sound specialist and salesman at Hljóðfærahúsið og Tónabúðin, Jan 2013 - Jun 2015',
          about:
            "Hljóðfærahús and Tónabúðin, the two oldest music retail companies in Iceland, have united to form the country's largest music store.",
          text:
            'Fun fact: My great grandmother, Anna Friðriksson, founded Hljóðfærahús Reykjavíkur (Reykjavik house of musical instruments) in 1916 and ran it, partly, alongside my grandfather, Atli Ólafsson, until 1960 when she passed away. The company was sold a few years later but I consider myself very fortunate to have been able to work at this important company from my family history. I worked as a salesman specialized in sound recording equipment.',
          links: [
            {
              linkText: 'hljodfaerahusid.is',
              url: 'https://www.hljodfaerahusid.is/',
            },
          ],
        },
      ],
    };
  },
});
</script>
