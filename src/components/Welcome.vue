<template>
  <div class="hello">
    <pageHeader v-bind:mainTitle="subTitle" />
    <h1>{{ mainTitle }}</h1>
    <h3>{{ fullName }}</h3>
    <h4>{{ job }}</h4>
    <continueButton v-bind:buttonText="beginText" v-bind:route="nextRoute" v-bind:animate="true" />
    <!-- <button class="pdf-btn">
      {{ pdfText }}
      <span class="download-icon" />
    </button>-->
    <div class="quotes">
      <div v-for="quote in quotes" v-bind:key="quote.author" class="quote">
        <p class="text">{{ quote.text }}</p>
        <p class="cite">{{ quote.author }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Download from '../assets/download.svg';

export default Vue.extend({
  name: 'Welcome',
  data() {
    return {
      subTitle: 'Welcome to my',
      mainTitle: 'RÉSUMÉ',
      fullName: 'Atli Sævar Guðmundsson',
      job: 'Software Engineer',
      pdfText: 'Download PDF',
      beginText: "Let's see it",
      nextRoute: '/about',
      quotes: [
        {
          text:
            '“The true measure of any society can be found in how it treats its most vulnerable members”',
          author: '― Mahatma Gandhi',
        },
        {
          text:
            '“Non-violence leads to the highest ethics, which is the goal of all evolution. Until we stop harming all other living beings, we are still savages.”',
          author: '― Thomas A. Edison',
        },
      ],
    };
  },
});
</script>

<style>
h1 {
  margin: 0;
  font-size: 72px;
  color: #e91e63;
  animation: fadeInBottom 0.7s;
}
h3 {
  margin: 0;
  font-size: 48px;
  animation: fadeInBottom 1s;
}
h4 {
  margin: 0;
  font-size: 32px;
  color: #3f51b5;
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
.quotes {
  padding: 30px;
  background-color: #673ab7;
  color: white;
  animation: fadeInBottom 1.5s;
}
.text {
  max-width: 750px;
  margin: 0 auto;
  font-size: 21px;
  font-style: italic;
}
.cite {
  font-size: 21px;
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
