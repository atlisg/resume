<template>
  <router-link
    class="continue-button"
    v-bind:class="{
      'animation': animate
    }"
    :to="route"
    >{{ buttonText }}<span class="forward-icon" /></router-link>
</template>

<script>
import Vue from "vue";

export default Vue.component("continueButton", {
  props: {
    buttonText: String,
    route: String,
    animate: Boolean,
  }
});
</script>

<style scoped>
.continue-button {
  display: flex;
  margin: 30px auto 50px;
  width: max-content;
  background-color: white;
  border: 2px solid #2c3e50;
  font-size: 24px;
  color: #2c3e50;
  padding: 15px 30px;
  animation: fadeInBottom 1s;
  text-decoration: none;
  box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.25);
}
.forward-icon {
  background: url("../assets/arrow.svg") no-repeat;
  display: inline-block;
  height: 30px;
  width: 30px;
  margin-left: 15px;
  opacity: 0.8; 
}
.animation {
  animation-name: wiggle;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-delay: 0s;
}


@media screen and (min-width: 800px) {
  button {
    
  }
}
@media screen and (min-width: 1000px) {
  button {
    
  }
}
</style>
