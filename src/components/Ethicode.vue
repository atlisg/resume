<template>
  <div class="ethicode">
    <div class="vision">
      <h2 v-animate="'slide-up'" class="passion">{{ passion }}</h2>
      <h3 v-animate="'slide-up'" class="noble">{{ noble }}</h3>
      <h4 v-animate="'slide-up'" class="converted">{{ convert }}</h4>
    </div>
    <work />
    <aboutEthicode />
    <contactEthicode />
  </div>
</template>

<script>
import Vue from 'vue';
import work from './Work';
import aboutEthicode from './AboutEthicode';
import contactEthicode from './ContactEthicode';

export default Vue.extend({
  name: 'Ethicode',
  data() {
    return {
      passion: 'For a world',
      noble: 'of non-violence',
      convert: 'for all sentient animals.',
    };
  },
});
</script>

<style scoped>
.ethicode {
}
.vision {
  height: 100vh;
  padding: 0 20px;
}
.passion {
  padding-top: 33vh;
}
.passion,
.noble {
  max-width: 1200px;
  margin: 0 auto;
  font-size: 48px;
  text-align: left;
  line-height: 48px;
  color: #e91e63;
  animation: fadeInBottom 1s;
}
.converted {
  max-width: 1200px;
  padding-top: 5px;
  margin: 0 auto;
  color: #673ab7;
  font-size: 18px;
  text-align: left;
  line-height: 24px;
  animation: fadeInBottom 1.5s;
}

@media screen and (min-width: 600px) {
  .vision {
    padding: 0 45px;
  }
  .passion,
  .noble {
    font-size: 72px;
    line-height: 72px;
  }
  .converted {
    font-size: 24px;
    line-height: 30px;
  }
}
@media screen and (min-width: 1000px) {
  .passion,
  .noble {
    font-size: 132px;
    line-height: 120px;
  }
  .converted {
    font-size: 48px;
    padding-top: 20px;
  }
}
</style>
