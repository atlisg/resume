import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Ethicode from '@/components/Ethicode.vue';
import AboutEthicode from '@/components/AboutEthicode.vue';
import Work from '@/components/Work.vue';
import ContactEthicode from '@/components/ContactEthicode.vue';
import Resume from '@/components/Resume.vue';
import About from '@/components/About.vue';
import Experience from '@/components/Experience.vue';
import Skills from '@/components/Skills.vue';
import Contact from '@/components/Contact.vue';
import References from '@/components/References.vue';
import Projects from '@/components/Projects.vue';
import Education from '@/components/Education.vue';

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ethicode',
      component: Ethicode,
    },
    {
      path: '/about',
      name: 'About',
      component: AboutEthicode,
    },
    {
      path: '/work',
      name: 'Work',
      component: Work,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactEthicode,
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume,
    },
    {
      path: '/resume/about',
      name: 'About',
      component: About,
    },
    {
      path: '/resume/experience',
      name: 'Experience',
      component: Experience,
    },
    {
      path: '/resume/skills',
      name: 'Skills',
      component: Skills,
    },
    {
      path: '/resume/projects',
      name: 'Projects',
      component: Projects,
    },
    {
      path: '/resume/education',
      name: 'Education',
      component: Education,
    },
    {
      path: '/resume/references',
      name: 'References',
      component: References,
    },
    {
      path: '/resume/contact',
      name: 'Contact',
      component: Contact,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});
