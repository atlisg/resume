<template>
  <div class="skills">
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
      mainTitle: "So much skill",
      buttonText: "Go on..",
      nextRoute: "/projects",
      paragraphs: [
        {
          title: "Frontend",
          text: "React.js, Angular.js, Typescript, Vue.js",
        },
        {
          title: "Backend",
          text: "Python, Node.js, C++, Java",
        },
        {
          title: "Databases",
          text: "MySQL, ElasticSearch, MongoDB",
        },
        {
          title: "Deployments",
          text: "Kubernetes, Elastic Beanstalk, Code Pipeline, Docker",
        },
      ],
    };
  },
});
</script>
