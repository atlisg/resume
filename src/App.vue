<template>
  <div id="app">
    <div class="bkgr" />
    <router-link
      v-bind:class="{ 'menu-item-active': $route.name === 'Welcome' }"
      class="menu-item home"
      to="/"
    />
    <div class="menu" v-bind:class="{ 'menu-scrolled': isScrolled }">
      <router-link
        v-for="page in pages"
        v-bind:key="page.name"
        v-bind:class="{
          'menu-item': true,
          'menu-item-active': page.name === $route.name,
          'menu-item-first': page.name === 'Welcome',
          'menu-item-last': page.name === 'Extra',
        }"
        :to="page.route"
        >{{ page.name }}</router-link
      >
      <div
        class="menu-nav menu-nav-back"
        v-bind:class="{
          'menu-nav-hidden':
            $route.name === 'Welcome' || $route.name === 'About',
        }"
        v-on:click="back()"
      />
      <div
        class="menu-nav menu-nav-next"
        v-bind:class="{
          'menu-nav-hidden':
            $route.name === 'Welcome' || $route.name === 'Contact',
        }"
        v-on:click="next()"
      />
    </div>
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import pageHeader from "./components/PageHeader";
import textBody from "./components/TextBody";
import continueButton from "./components/Continue";

export default Vue.extend({
  name: "app",
  data() {
    return {
      pages: [
        {
          name: "About",
          route: "/about",
        },
        {
          name: "Experience",
          route: "/experience",
        },
        {
          name: "Skills",
          route: "/skills",
        },
        {
          name: "Projects",
          route: "/projects",
        },
        {
          name: "Education",
          route: "/education",
        },
        {
          name: "References",
          route: "/references",
        },
        {
          name: "Contact",
          route: "/contact",
        },
        {
          name: "Extra",
          route: "/extra",
        },
      ],
      isScrolled: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      this.isScrolled = window.scrollY > 50;
    },
    next: function () {
      const currentIndex = this.pages.indexOf(
        this.pages.find((page) => page.name === this.$route.name)
      );
      if (currentIndex + 1 === this.pages.length) return;
      const nextPage = this.pages[currentIndex + 1];
      this.$router.push(nextPage.route);
    },
    back: function () {
      const currentIndex = this.pages.indexOf(
        this.pages.find((page) => page.name === this.$route.name)
      );
      if (currentIndex === 0) return;
      const nextPage = this.pages[currentIndex - 1];
      this.$router.push(nextPage.route);
    },
  },
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.bkgr {
  position: fixed;
  background-image: url("./assets/tveir_i_sjotta.jpg");
  opacity: 0.3;
  height: 100%;
  width: 100%;
  z-index: -1;
}
.menu {
  display: flex;
  position: fixed;
  align-items: center;
  width: 100%;
  height: 70px;
  background-color: transparent;
  transition: background-color 0.3s ease-in-out;
}
.menu-scrolled {
  background-color: #cddc39;
  box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease-in-out;
}
.menu-item {
  display: none;
  margin: 30px 15px;
  font-size: 16px;
  font-weight: bold;
  color: #222;
  border: none;
  background: none;
  padding: 0;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}
.menu-item:hover,
.menu-item-active {
  color: #9c27b0;
  transition: color 0.2s ease-in-out;
}
.home {
  position: fixed;
  display: block;
  background-image: url("./assets/house.svg");
  height: 40px;
  width: 40px;
  top: -15px;
  left: 50%;
  z-index: 1;
  margin-left: -20px;
}
.menu-item-last {
  margin-right: 60px;
}
.menu-nav {
  background: url("./assets/back.svg") no-repeat;
  width: 50%;
  height: 40px;
  margin: 0 10px;
}
.menu-nav-next {
  transform: rotate(180deg);
}
.menu-nav-hidden {
  opacity: 0;
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
  .menu {
    justify-content: flex-end;
  }
  .menu-item {
    display: block;
  }
  .home {
    left: 60px;
  }
  .menu-nav {
    display: none;
  }
}
@media screen and (min-width: 1000px) {
  .menu-item {
    font-size: 21px;
  }
}
</style>
