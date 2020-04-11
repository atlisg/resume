<template>
  <div class="page-container">
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
  name: 'About',
  data() {
    return {
      mainTitle: 'So many lessons',
      buttonText: 'Yes, yes',
      nextRoute: '/resume/references',
      paragraphs: [
        {
          title: 'Reykjavík University, Aug 2013 - May 2016',
          about: 'BSc in Computer Science, Grade: 9.32',
          text:
            'I started my Computer Science studies completely clueless about the profession. I had only wanted to create more stable and higher income for my family since my girlfriend was pregnant. Luckily, it was a perfect fit, I enjoyed my courses a lot and had some natural talent to tackle the problems in front of me. I also met some great people there, some of whom I am still friends with today.',
        },
        {
          title: 'SAE Institude, Liverpool, Sep 2005 - Sep 2006',
          about: 'Diploma in Audio Engineering, Grade: 7',
          text:
            'I wanted to learn how to record, mix and produce my own music in order to skip paying for the high rates of music studios. The following 2 years after returning to Iceland, I recorded my only solo album, but decided not to release it in the end. Living in Liverpool was a great learning and eye-opening experience and it was the first place me and my girlfriend, now wife, lived together.',
        },
        {
          title: 'The Comprehensive School at Ármúli, Reykjavík, Aug 1997 - May 2001',
          about: 'Matriculation Exam in Natural Sciences, Grade: 8',
          text: 'My favorite subjects were Maths, Biology and Chemistry',
        },
      ],
    };
  },
});
</script>
