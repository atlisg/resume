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
  name: 'About',
  data() {
    return {
      mainTitle: 'Such expertise',
      buttonText: 'Go on',
      nextRoute: '/resume/projects',
      paragraphs: [
        {
          title: 'Frontend',
          text: 'React.js, Next.js, Typescript, Angular.js, Vue.js',
        },
        {
          title: 'Backend',
          text: 'Python, Node.js, C++, Java',
        },
        {
          title: 'Deployments',
          text: 'Kubernetes, Elastic Beanstalk, Code Pipeline, Docker',
        },
        {
          title: 'Databases',
          text: 'MySQL, ElasticSearch, MongoDB',
        },
      ],
    };
  },
});
</script>
