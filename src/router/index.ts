import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Welcome from "@/components/Welcome.vue";
import About from "@/components/About.vue";
import Experience from "@/components/Experience.vue";
import Skills from "@/components/Skills.vue";
import Contact from "@/components/Contact.vue";
import References from "@/components/References.vue";
import Projects from "@/components/Projects.vue";
import Education from "@/components/Education.vue";
import Extra from "@/components/Extra.vue";

export default new Router({
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/experience",
      name: "Experience",
      component: Experience,
    },
    {
      path: "/skills",
      name: "Skills",
      component: Skills,
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
    },
    {
      path: "/education",
      name: "Education",
      component: Education,
    },
    {
      path: "/references",
      name: "References",
      component: References,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "/extra",
      name: "Extra",
      component: Extra,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
