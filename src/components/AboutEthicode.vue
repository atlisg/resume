<template>
  <div>
    <frontPage v-bind:paragraphs="paragraphs" />
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.component('aboutEthicode', {
  data() {
    return {
      buttonText: 'My resume',
      resumeRoute: '/resume',
      paragraphs: [
        {
          title: 'Why',
          text:
            "Ethicode's mission is to end suffering and exploitation of all living souls by accelerating the world's transition to a plant-based diet.",
        },
        {
          title: 'How',
          text:
            'By creating intuitive user experiences in elegant software that makes this transformation easier and more appealing.',
        },
        {
          title: 'Who',
          about: 'Atli Sævar Guðmundsson, CEO, CTO, CFO, Developer, Designer, ...',
          text: "Currently, it's just me..",
          image: {
            img: 'tveir_i_sjotta.jpg',
            name: 'atli',
          },
          links: [
            {
              linkText: 'My résumé',
              url: 'http://ethicode.org/resume',
            },
          ],
        },
      ],
    };
  },
});
</script>
