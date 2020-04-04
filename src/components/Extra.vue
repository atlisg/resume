<template>
  <div class="extra">
    <pageHeader v-bind:mainTitle="mainTitle" />
    <textBody v-bind:paragraphs="paragraphs" />
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Extra",
  data() {
    return {
      mainTitle: "Such ethical",
      paragraphs: [
        {
          title: "Ethicode",
          about:
            "Ethicode is a brand new company building software to make the world a more ethical place.",
          text:
            "If your company or project is working towards making the world a more ethical place in any way, shape or form, and you need a webpage or any software built to help you reach your objectives, Ethicode can help you out. Reduce suffering, improve our treatment of the planet, balance out injustice, erradicate hunger and poverty, support mental health, etc. are among our favorite causes to work for.",
        },
      ],
    };
  },
});
</script>
