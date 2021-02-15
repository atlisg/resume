<template>
  <div class="hello">
    <h3>{{ subTitle }}</h3>
    <h1>{{ mainTitle }}</h1>
    <h3>{{ fullName }}</h3>
    <h4>{{ job }}</h4>
    <continueButton v-bind:buttonText="beginText" v-bind:route="nextRoute" v-bind:animate="true" />
  </div>
</template>

<script>
import Vue from 'vue';
import Download from '../assets/download.svg';

export default Vue.extend({
  name: 'Resume',
  data() {
    return {
      subTitle: 'Welcome to my',
      mainTitle: 'Resume',
      fullName: 'Atli Sævar Guðmundsson',
      job: 'Software Engineer',
      pdfText: 'Download PDF',
      beginText: "Let's see it",
      nextRoute: '/resume/about',
    };
  },
});
</script>

<style scoped>
h1 {
  margin: 30px 0;
  font-size: 72px;
  font-weight: normal;
  color: #e91e63;
  animation: fadeInBottom 0.7s;
}
h3 {
  margin: 0;
  font-size: 48px;
  font-weight: normal;
  animation: fadeInBottom 1s;
}
h4 {
  margin: 0;
  font-size: 32px;
  font-weight: normal;
  color: #ffd300;
  animation: fadeInBottom 1s;
}
.pdf-btn {
  display: flex;
  margin: 50px auto;
  width: max-content;
  background-color: white;
  border: 2px solid #2c3e50;
  font-size: 18px;
  color: #2c3e50;
  padding: 10px 30px;
  animation: fadeInBottom 1s;
  text-decoration: none;
}
.download-icon,
.click-icon {
  display: inline-block;
  margin-left: 15px;
  background-image: url('../assets/download.svg');
  height: 20px;
  width: 20px;
  opacity: 0.8;
}
.download-icon {
  background-image: url('../assets/download.svg');
}
.click-icon {
  background-image: url('../assets/click.svg');
  animation-name: wiggle;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-delay: 0s;
}
.hello {
  padding-top: 150px;
}

@media screen and (min-width: 800px) {
  h1 {
    font-size: 172px;
  }
  h3 {
    font-size: 72px;
  }
  h4 {
    font-size: 48px;
  }
  button {
    font-size: 32px;
  }
  .download-icon {
    height: 20px;
    width: 20px;
  }
}
</style>
