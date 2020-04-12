<template>
  <div class="page-container page-container-dark">
    <h2 class="main-title">{{ mainTitle }}</h2>
    <frontPage v-bind:paragraphs="paragraphs" />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('aboutEthicode', {
  data() {
    return {
      mainTitle: '',
      paragraphs: [
        {
          title: 'Why',
          text:
            "Ethicode's mission is to end suffering and exploitation of all living souls by accelerating the world's transition to a plant-based diet.",
        },
        {
          title: 'How',
          text:
            'By creating intuitive user experiences in elegant software that makes this transformation easier and more appealing to the public.',
        },
        {
          title: 'Who',
          text: "Currently, it's just me..",
          image: {
            img: 'tveir_i_sjotta.jpg',
            name: 'atli',
          },
          links: [
            {
              linkText: 'My résumé',
              url: 'http://ethicode.org/#/resume',
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
