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
  name: 'Contact',
  data() {
    return {
      mainTitle: 'So many ways',
      buttonText: "There's more?",
      nextRoute: '/extra',
      paragraphs: [
        {
          title: 'Email',
          email: 'atlisaevar@gmail.com',
        },
        {
          title: 'GitHub',
          links: [
            {
              linkText: 'github.com/atlisg',
              url: 'https://github.com/atlisg',
            },
            {
              linkText: 'github.com/atlidohop',
              url: 'https://github.com/atlidohop',
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
