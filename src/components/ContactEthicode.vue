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
          text: 'Email: ',
          email: 'atlisaevar@gmail.com',
        },
        {
          text: 'GitHub: ',
          links: [
            {
              linkText: 'github.com/atlisg',
              url: 'https://github.com/atlisg',
            },
          ],
        },
        {
          text: 'LinkedIn: ',
          links: [
            {
              linkText: 'linkedin.com/in/atlisaevar',
              url: 'https://www.linkedin.com/in/atlisaevar/',
            },
          ],
        },
        {
          text: 'Instagram: ',
          links: [
            {
              linkText: 'instagram.com/atlisaevar',
              url: 'https://www.instagram.com/atlisaevar/',
            },
          ],
        },
        {
          text: 'Facebook: ',
          links: [
            {
              linkText: 'facebook.com/atlisaevar',
              url: 'https://www.facebook.com/atlisaevar',
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
