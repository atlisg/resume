<template>
  <div class="page-container">
    <h2 class="main-title">{{ mainTitle }}</h2>
    <frontPage v-bind:paragraphs="paragraphs" />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('contactEthicode', {
  data() {
    return {
      mainTitle: "Don't be shy",
      paragraphs: [
        {
          title: 'Email',
          email: 'atlisaevar@gmail.com',
        },
        {
          title: 'Phone',
          email: '+354 699 1647',
        },
        {
          title: 'GitHub',
          links: [
            {
              linkText: 'github.com/atlisg',
              url: 'https://github.com/atlisg',
            },
          ],
        },
        {
          title: 'LinkedIn',
          links: [
            {
              linkText: 'linkedin.com/in/atlisaevar',
              url: 'https://www.linkedin.com/in/atlisaevar/',
            },
          ],
        },
        {
          title: 'Instagram',
          links: [
            {
              linkText: 'instagram.com/atlisaevar',
              url: 'https://www.instagram.com/atlisaevar/',
            },
          ],
        },
        {
          title: 'Facebook',
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
