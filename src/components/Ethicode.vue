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
      noble: 'where all sentient animals',
      convert: 'have the right to life, liberty and the pursuit of happiness.',
    };
  },
});
</script>

<style scoped>
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
.noble {
  color: #673ab7;
  font-size: 32px;
  line-height: 32px;
}
.converted {
  max-width: 1200px;
  padding-top: 5px;
  margin: 0 auto;
  color: #eee;
  font-size: 18px;
  text-align: left;
  line-height: 24px;
  animation: fadeInBottom 1.5s;
}

@media screen and (min-width: 450px) {
  .passion {
    font-size: 72px;
    line-height: 60px;
  }
  .noble {
    font-size: 48px;
    line-height: 48px;
  }
  .converted {
    font-size: 24px;
    line-height: 28px;
  }
}

@media screen and (min-width: 800px) {
  .vision {
    padding: 0 45px;
  }
  .passion {
    font-size: 112px;
    line-height: 104px;
  }
  .noble {
    font-size: 56px;
    line-height: 56px;
  }
  .converted {
    font-size: 30px;
    line-height: 34px;
  }
}
@media screen and (min-width: 1200px) {
  .passion {
    font-size: 182px;
    line-height: 156px;
  }
  .noble {
    font-size: 96px;
    line-height: 96px;
  }
  .converted {
    font-size: 44px;
    line-height: 48px;
    padding-top: 10px;
  }
}
</style>
