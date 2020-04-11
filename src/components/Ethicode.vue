<template>
  <div class="ethicode">
    <div class="vision">
      <h2 class="passion">{{ passion }}</h2>
      <h3 class="noble">{{ noble }}</h3>
      <h4 class="converted">{{ convert }}</h4>
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
      convert: 'towards all sentient animals.',
    };
  },
});
</script>

<style scoped>
.vision {
  height: 100vh;
}
.passion {
  padding-top: 350px;
}
.passion,
.noble {
  margin: 0 100px;
  font-size: 48px;
  text-align: left;
  line-height: 100px;
  color: #e91e63;
  animation: fadeInBottom 1s;
}
.converted {
  padding-top: 20px;
  margin: 0 100px;
  color: #673ab7;
  font-size: 24px;
  text-align: left;
  line-height: 30px;
  animation: fadeInBottom 1.5s;
}

@media screen and (min-width: 800px) {
  .passion,
  .noble {
    font-size: 132px;
    line-height: 120px;
  }
  .converted {
    font-size: 48px;
    line-height: 20px;
  }
}
</style>
