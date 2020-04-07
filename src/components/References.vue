<template>
  <div class="page-container">
    <pageHeader v-bind:mainTitle="mainTitle" />
    <textBody v-bind:paragraphs="paragraphs" />
    <continueButton v-bind:buttonText="buttonText" v-bind:route="nextRoute" v-bind:hoverUp="true" />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'References',
  data() {
    return {
      mainTitle: 'So many mentors',
      buttonText: 'Interesting',
      nextRoute: '/contact',
      paragraphs: [
        {
          title: 'Davíð Gunnarsson, Dohop CEO',
          text:
            'Davíð has been an excellent CEO at Dohop and I thoroughly enjoy working with him, since we share a lot of ideas and opinions on how to lead an organization. He has taught me a lot about leadership and our conversations are often intense and inspiring.',
        },
        {
          title: 'Kristján Guðni Bjarnason, Dohop CTO',
          text:
            'Kristján is such a powerful technical leader, yet remains humble and patient. He has taught me a lot of valuable lessons but my favorite lesson of his, is that you can have such a positive impact on others, by simply being trusting and engaging.',
        },
        {
          title: 'Jónas Sigurðsson, Code North CEO',
          text:
            "Jónas is definitely one of the most intense people I know. He took a chance on me when I had just graduated and working with him on a daily basis was incredibly fun and always full of action and creativity. It's difficult to have a conversation with him without it being meaningful or even mindblowing.",
        },
        {
          title: 'Ingimar Þór Friðriksson, Kópavogsbær IT Department Director',
          text:
            'Ingimar was the driving force behind getting this project through the door for the town of Kópavogur. He was the man with the vision, the man we relentlessly asked for details, when we were unsure. He was always full of answers and always with a sparkle in his eyes when talking about the project. It was thoroughly enjoying working with him and we all learned a lot about what pure drive and inspiration looks like.',
        },
      ],
    };
  },
});
</script>
