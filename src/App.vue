<template>
  <div id="app" v-bind:class="{ frontground: !isResume() }">
    <div v-if="$route.path === '/resume'" class="bkgr" />
    <div v-if="$route.path !== '/resume'" class="bkgr2" />
    <div v-if="$route.path === '/resume'" class="behind" />
    <div v-if="isResume()" class="menu menu-resume" v-bind:class="{ 'menu-scrolled': isScrolled }">
      <router-link
        v-for="page in pages"
        v-bind:key="page.name"
        v-bind:class="{
          'menu-item': true,
          'menu-item-dark': $route.path === '/resume',
          'menu-item-active': page.route === $route.path,
          'menu-item-first': page.route === '/resume',
        }"
        :to="page.route"
        >{{ page.name }}</router-link
      >
      <div
        class="menu-nav menu-nav-back"
        v-bind:class="{
          'menu-nav-hidden': $route.path === '/' || $route.path === '/resume',
        }"
        v-on:click="back()"
      />
      <div
        class="menu-nav menu-nav-next"
        v-bind:class="{
          'menu-nav-hidden': $route.path === '/' || $route.path === '/resume/contact',
        }"
        v-on:click="next()"
      />
    </div>
    <div
      v-if="!isResume()"
      class="menu menu-main"
      v-bind:class="{
        'menu-scrolled': isScrolled,
        'menu-main-light': $route.path === '/work' || $route.path === '/contact',
      }"
    >
      <router-link
        v-for="page in mainPages"
        v-bind:key="page.name"
        v-bind:class="{
          'menu-item': true,
          'menu-item-main': true,
          'menu-item-main-light': $route.path === '/work' || $route.path === '/contact',
          'menu-item-active': page.route === $route.path,
          'menu-item-first': page.route === '/',
        }"
        :to="page.route"
      >
        {{ page.name }}
        <img v-if="page.route === '/'" :src="getImgUrl()" alt="ethicode-logo" class="logo"
      /></router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import VueAnimate from 'vue-animate-scroll';
import VueAnalytics from 'vue-analytics';
import router from './router';
import pageHeader from './components/PageHeader';
import textBody from './components/TextBody';
import frontPage from './components/FrontPage';
import continueButton from './components/Continue';

Vue.use(VueAnimate);
Vue.use(VueAnalytics, {
  id: 'UA-113130296-2',
  router,
});

export default Vue.extend({
  name: 'app',
  data() {
    return {
      pages: [
        {
          name: 'Resume',
          route: '/resume',
        },
        {
          name: 'About',
          route: '/resume/about',
        },
        {
          name: 'Experience',
          route: '/resume/experience',
        },
        {
          name: 'Skills',
          route: '/resume/skills',
        },
        {
          name: 'Projects',
          route: '/resume/projects',
        },
        {
          name: 'Education',
          route: '/resume/education',
        },
        {
          name: 'References',
          route: '/resume/references',
        },
        {
          name: 'Contact',
          route: '/resume/contact',
        },
      ],
      mainPages: [
        {
          name: '',
          route: '/',
        },
        {
          name: 'About',
          route: '/about',
        },
        {
          name: 'Work',
          route: '/work',
        },
        {
          name: 'Contact',
          route: '/contact',
        },
      ],
      isScrolled: false,
    };
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll: function() {
      this.isScrolled = window.scrollY > 50;
    },
    next: function() {
      const currentIndex = this.pages.indexOf(
        this.pages.find(page => page.name === this.$route.name),
      );
      const nextPage = this.pages[(currentIndex + 1) % this.pages.length];
      this.$router.push(nextPage.route);
    },
    back: function() {
      const currentIndex = this.pages.indexOf(
        this.pages.find(page => page.name === this.$route.name),
      );
      if (currentIndex === 0) return;
      const nextPage = this.pages[currentIndex - 1];
      this.$router.push(nextPage.route);
    },
    isResume: function() {
      const pathSplit = this.$route.path.split('/');
      return pathSplit[1] === 'resume';
    },
    getImgUrl: function() {
      const version =
        this.$route.path === '/work' || this.$route.path === '/contact' ? 'black' : 'white';
      return require(`./assets/ethicode-logo-${version}.png`);
    },
  },
});
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eee;
  margin: 0;
  height: max-content;
  width: 100%;
  z-index: 1;
}
.frontground {
  background-color: #222;
}
.page-container {
  padding: 0 0 50px;
  background: transparent;
  min-height: 100vh;
  color: #222;
}
.page-container-dark {
  background-color: #222;
}
.bkgr,
.bkgr2 {
  position: fixed;
  background-image: url('../static/atli.png');
  background-size: 100vw;
  opacity: 0.3;
  height: 100%;
  width: 100%;
  z-index: -1;
}
.bkgr2 {
  background-image: url('./assets/tveir_i_sjotta.jpg');
  background-size: 200vw;
  opacity: 0.2;
}
.behind {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #222;
  z-index: -2;
}
.menu {
  position: fixed;
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: 40px 0;
  background: transparent;
  transition: background-color 0.3s ease-in-out;
  z-index: 2;
}
.menu-main {
  width: calc(100% - 35px);
  padding: 20px 20px;
  background-color: #222;
  color: #eee;
}
.menu-main-light {
  background-color: #eee;
  color: #222;
}
.menu-item {
  display: none;
  margin-right: 10px;
  font-size: 16px;
  color: #222;
  border: none;
  background: none;
  padding: 0;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  transform: translateY(0);
}
.menu-item-dark {
  color: #eee;
}
.menu-item-main {
  display: block;
  color: #eee;
}
.menu-item-main-light {
  color: #222;
}
.menu-item:hover,
.menu-item-active {
  color: #e91e63;
  transition: color 0.2s ease-in-out;
}
.home {
  position: fixed;
  display: block;
  height: 40px;
  width: 40px;
  top: -15px;
  left: 50%;
  z-index: 1;
  margin-left: -20px;
}
.menu-item-first {
  display: none;
  margin-right: auto;
}
.logo {
  width: 80px;
  height: 25px;
}
.menu-nav {
  background: url('./assets/back.svg') no-repeat;
  width: 50%;
  height: 40px;
  margin: 0;
}
.menu-nav-next {
  transform: rotate(180deg);
  margin: 0;
}
.menu-nav-hidden {
  opacity: 0;
}
.animate {
  transition-delay: 0.1s;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
}
.slide-up {
  -webkit-transform: -webkit-translateY(100px);
  transform: translateY(100px);
  -webkit-opacity: 0;
  opacity: 0;
}
.slide-up.animate-active {
  -webkit-transform: -webkit-translateY(0);
  transform: translateY(0);
  -webkit-opacity: 1;
  opacity: 1;
}

@-webkit-keyframes fadein {
  from {
    -webkit-opacity: 0;
  }
  to {
    -webkit-opacity: 1;
  }
}

@-webkit-keyframes fadeInBottom {
  from {
    -webkit-opacity: 0;
    -webkit-transform: -webkit-translateY(100%);
  }
  to {
    -webkit-opacity: 1;
  }
}

@-webkit-keyframes wiggle {
  77% {
    -webkit-transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  80%,
  86%,
  92% {
    -webkit-transform: scale(1.1) rotateZ(1deg);
  }
  83%,
  89%,
  95% {
    -webkit-transform: scale(1.1) rotateZ(-1deg);
  }
  98% {
    -webkit-transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
  }
}

@keyframes wiggle {
  77% {
    transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
  80%,
  86%,
  92% {
    transform: scale(1.1) rotateZ(1deg);
  }
  83%,
  89%,
  95% {
    transform: scale(1.1) rotateZ(-1deg);
  }
  98% {
    transform: scale(1) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  }
}

@media screen and (min-width: 800px) {
  .logo {
    width: 100px;
    height: 31px;
  }
  .menu-main {
    width: calc(100% - 60px);
    padding: 30px;
  }
  .page-container {
    padding: 0 45px 50px;
  }
  .page-container-dark {
    background-color: #222;
  }
  .menu {
    justify-content: flex-end;
    width: calc(100% - 40px);
    padding: 40px 20px;
  }
  .menu-main {
    display: flex;
  }
  .menu-item {
    display: block;
    margin: 0 15px;
  }
  .menu-item-first {
    display: flex;
    margin-right: auto;
  }
  .home {
    left: 60px;
  }
  .menu-nav {
    display: none;
  }
  .bkgr,
  .bkgr2 {
    background-size: auto;
  }
}

@media screen and (min-width: 1000px) {
  .menu-item {
    font-size: 21px;
  }
}
</style>
