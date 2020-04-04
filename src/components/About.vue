<template>
  <div class="about-me">
    <pageHeader v-bind:mainTitle="mainTitle" />
    <textBody v-bind:paragraphs="paragraphs" />
    <continueButton v-bind:buttonText="buttonText" v-bind:route="nextRoute" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "About",
  data() {
    return {
      mainTitle: "So much Atli",
      buttonText: "Keep talking..",
      nextRoute: "/experience",
      paragraphs: [
        {
          title: "Passion",
          text:
            "My passion, my purpose, my 'why', is to improve life on this planet. I want to reduce suffering for sentient animals, human and non-human. I want to improve our treatment of Earth, our only home. I want to explore and experiment to figure out new ways to improve our collective impact on the world and our connection to the universe. I want to improve the way we organize in groups, in order to achieve these goals. I want to improve mankind."
        },
        {
          title: "Coding",
          text:
            "I fell in love with Software Engineering in 2013 but I want to be clear that this is not my passion. I thought it was for a few years but I now realize that it's just a powerful tool to help me work on my real passions, stated above. I only happen to have some natural talents for it and the capacity to super focus for long time periods. However, I do enjoy it immensely, I love to solve challenging problems and design beautiful software. Because of my OCD tendencies, my code is usually very tidy and clean, and because of my desire to continuously improve myself my code is usually very current and built with state of the art technologies."
        },
        {
          title: "Family",
          text:
            "My wife and I have two kids, age 3 and 6, and two dogs, age 8 and 14. We lived in Hafnarfjörður before moving to Garður, Suðurnesjabær in January 2017. We love the calm, quiet life here and being so close to Iceland's wilderness."
        }
      ]
    };
  }
});
</script>
