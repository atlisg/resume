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
      mainTitle: 'Such Atli',
      buttonText: 'Keep talking',
      nextRoute: '/resume/experience',
      paragraphs: [
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
        {
          title: 'Mission',
          text:
            "The human being is an amazing animal with its unparalleled language skills, ability to infer others' mental states, and instinct for cooperation. But it's also a bit embarrassing, considering its treatment of the vulnerable, and the Earth, its only home. My mission as a human is to contribute towards animal liberation, environmental justice, human rights, or wherever fairness needs to be elevated.",
        },
      ],
    };
  },
});
</script>
