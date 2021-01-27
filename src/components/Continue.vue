<template>
  <router-link
    class="continue-button slide"
    v-bind:class="{
      'animation-wiggle': animate,
      'hover-slide': hoverSlide,
      'hover-fill': hoverFill,
      'hover-up': hoverUp,
    }"
    :to="route"
  >
    {{ buttonText }}
    <span class="forward-icon" />
  </router-link>
</template>

<script>
import Vue from 'vue';

export default Vue.component('continueButton', {
  props: {
    buttonText: String,
    route: String,
    animate: Boolean,
    hoverSlide: Boolean,
    hoverFill: Boolean,
    hoverUp: Boolean,
  },
});
</script>

<style scoped>
.continue-button {
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: max-content;
  background-color: white;
  border: 2px solid #2c3e50;
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
  padding: 15px 30px;
  -webkit-animation: fadeInBottom 1s;
  animation: fadeInBottom 1s;
  text-decoration: none;
  box-shadow: none;
  transition: box-shadow 0.25s ease;
}
.hover-slide:hover,
.hover-slide:focus {
  box-shadow: inset 260px 0 0 0 #e91e6361;
  transition: box-shadow 0.5s ease;
}
.hover-fill:hover,
.hover-fill:focus {
  box-shadow: inset 0 0 0 35px #e91e6361;
  transition: box-shadow 0.5s ease;
}
.hover-up:hover,
.hover-up:focus {
  box-shadow: inset 0 -70px 0 0 #e91e6361;
  transition: box-shadow 0.5s ease;
}
.forward-icon {
  background: url('../assets/arrow.svg') no-repeat;
  display: inline-block;
  height: 30px;
  width: 30px;
  margin-left: 15px;
  opacity: 0.8;
}
.animation-wiggle {
  animation-name: wiggle;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-delay: 0s;
}
</style>
