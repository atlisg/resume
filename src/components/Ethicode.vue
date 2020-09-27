<template>
  <div class="ethicode">
    <div class="vision">
      <h2 v-animate="'slide-up'" class="for-world pink">
        {{ forWorld }}
      </h2>
      <h3 v-animate="'slide-up'" class="where-sentient">
        {{ whereSentient[0] }}
        <span class="yellow">{{ whereSentient[1] }}</span>
      </h3>
      <h4 v-animate="'slide-up'" class="the-right">
        {{ theRight[0] }}<span class="blue">{{ theRight[1] }}</span
        >{{ theRight[2] }}<span class="blue">{{ theRight[3] }}</span
        >{{ theRight[4] }}<span class="blue">{{ theRight[5] }}</span
        >{{ theRight[6] }}
      </h4>
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
      forWorld: 'For a world',
      whereSentient: ['where all', 'sentient beings'],
      theRight: [
        'have the right to ',
        'life',
        ', ',
        'liberty',
        ' and the ',
        'pursuit of happiness',
        '.',
      ],
    };
  },
});
</script>

<style scoped>
.vision {
  height: 100vh;
  padding: 0 20px;
}
.for-world {
  padding-top: 33vh;
}
.for-world,
.where-sentient {
  max-width: 1200px;
  margin: 0 auto;
  font-size: 48px;
  text-align: left;
  line-height: 48px;
  color: #eee;
  font-style: italic;
  -webkit-animation: fadeInBottom 1s;
  animation: fadeInBottom 1s;
}
.where-sentient {
  font-size: 32px;
  line-height: 32px;
}
.the-right {
  max-width: 1200px;
  padding-top: 5px;
  margin: 0 auto;
  color: #eee;
  font-size: 18px;
  text-align: left;
  font-style: italic;
  line-height: 24px;
  -webkit-animation: fadeInBottom 1.5s;
  animation: fadeInBottom 1.5s;
}
.pink {
  color: #f0006d;
}
.yellow {
  color: #ffd300;
}
.blue {
  color: #00bad4;
}

@media screen and (min-width: 450px) {
  .for-world {
    font-size: 72px;
    line-height: 60px;
  }
  .where-sentient {
    font-size: 48px;
    line-height: 48px;
  }
  .the-right {
    font-size: 24px;
    line-height: 28px;
  }
}

@media screen and (min-width: 800px) {
  .vision {
    padding: 0 45px;
  }
  .for-world {
    font-size: 112px;
    line-height: 104px;
  }
  .where-sentient {
    font-size: 56px;
    line-height: 56px;
  }
  .the-right {
    font-size: 30px;
    line-height: 34px;
  }
}
@media screen and (min-width: 1200px) {
  .for-world {
    font-size: 172px;
    line-height: 156px;
  }
  .where-sentient {
    font-size: 80px;
    line-height: 80px;
  }
  .the-right {
    font-size: 40px;
    line-height: 44px;
    padding-top: 10px;
  }
}
</style>
