<template>
  <h2>{{ mainTitle }}</h2>
</template>

<script>
import Vue from "vue";

export default Vue.component("pageHeader", {
  props: ["mainTitle"]
});
</script>

<style scoped>
h2 {
  margin: 0;
  padding-top: 100px;
  font-size: 40px;
  color: #9c27b0;
  -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
  -moz-animation: fadein 1s; /* Firefox < 16 */
  -ms-animation: fadein 1s; /* Internet Explorer */
  -o-animation: fadein 1s; /* Opera < 12.1 */
  animation: fadein 1s;
}

@media screen and (min-width: 800px) {
  h2 {
    font-size: 64px;
    padding-top: 124px;
  }
}
@media screen and (min-width: 1000px) {
  h2 {
    font-size: 104px;
  }
}
</style>
