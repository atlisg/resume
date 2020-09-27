<template>
  <div class="page-container">
    <h2 v-animate="'slide-up'" class="main-title">{{ mainTitle }}</h2>
    <frontPage v-bind:paragraphs="paragraphs" v-bind:isContact="true" />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('contactEthicode', {
  data() {
    return {
      mainTitle: 'Get in touch',
      paragraphs: [
        {
          text:
            'Now is the time to build something new. Drop us a line if you have a brilliant idea that needs to be implemented and shared with the world.',
        },
        {
          text:
            'If you want to join Ethicode or contribute in any way, we are always looking for purposeful people to collaborate with. Feel free to send in your resume. Skills and experience are important but Ethicode is most interested in your passions. What makes you tick? What inspires you?',
        },
        {
          text: 'Email: ',
          email: 'ethicode@ethicode.org',
        },
        {
          text: 'Instagram: ',
          links: [
            {
              linkText: 'instagram.com/ethicodeorg',
              url: 'https://www.instagram.com/ethicodeorg/',
            },
          ],
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
