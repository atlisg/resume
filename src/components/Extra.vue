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
            "If your company or project is working towards making the world a more ethical place in any way and you need a webpage or any software built to help you reach your objectives, I'm your man. Let's change the world together.",
        },
      ],
    };
  },
});
</script>
