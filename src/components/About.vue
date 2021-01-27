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
  name: 'About',
  data() {
    return {
      mainTitle: 'So much Atli',
      buttonText: 'Keep talking',
      nextRoute: '/resume/experience',
      paragraphs: [
        {
          title: 'Passion',
          text:
            "My passion – my 'why' – is to advocate for life-changing improvements, whether it's fighting for animal rights and environmental justice or rethinking and redefining the status quo in whatever grabs my attention.",
        },
        {
          title: 'Coding',
          text:
            "My mind was blown in 2013 when I started studying Computer Science. It's such a powerful tool that can be used for virtually anything. I was fortunate to have some natural talents there and enjoyed my studies a lot, and still do. My code is usually tidy and clean, and built using state of the art technologies.",
        },
        {
          title: 'Family',
          text:
            "My wife and I have two kids, ages 4 and 7, and a 9 year old dog. We lived in Hafnarfjörður before moving to Garður, Suðurnesjabær in January 2017. We love the calm, quiet life here and being so close to Iceland's wilderness.",
        },
      ],
    };
  },
});
</script>
