import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/ReflexIbi.vue'

import reflections from '@/content/reflections'
//import { name } from '@vue/eslint-config-prettier/skip-formatting'

const routes = [
  {
    path: '/',
    name: 'reflex',
    component: HomeView,
    children: [
      {
        path: 'aline-reflection',
        name: 'reflex:aline:reflection',
        component: () =>
          import(/* webpackChunkName: "aline-reflection" */ '@/views/ReflectionIbi.vue'),
        props: { reflection: reflections.alineKaadi },
      },
      {
        path: 'joel-reflection',
        name: 'reflex:joel:reflection',
        component: () =>
          import(/* webpackChunkName: "joel-reflection" */ '@/views/ReflectionIbi.vue'),
        props: { reflection: reflections.joelKaadi },
      },
      {
        path: 'cristiane-reflection',
        name: 'reflex:cristiane:reflection',
        component: () =>
          import(/* webpackChunkName: "cristiane-reflection" */ '@/views/ReflectionIbi.vue'),
        props: { reflection: reflections.cristianeKaadi },
      },
      {
        path: 'daniel-reflection',
        name: 'reflex:daniel:reflection',
        component: () =>
          import(/* webpackChunkName: "daniel-reflection" */ '@/views/ReflectionIbi.vue'),
        props: { reflection: reflections.danielKaadi },
      },
      {
        path: 'lisboa-reflection',
        name: 'reflex:lisboa:reflection',
        component: () =>
          import(/* webpackChunkName: "lisboa-reflection" */ '@/views/ReflectionIbi.vue'),
        props: { reflection: reflections.lisboaKaadi },
      },
      {

        path: 'Sarah-reflection',
        name: 'reflex:sarah:reflection',
        component: () =>
          import(/* webpackChunkName: "sarah-reflection" */ '@/views/ReflectionIbi.vue'),
        props: { reflection: reflections.Sarahkaadi },

      },
      {

        path: 'flavia-reflection',
        name: 'reflex:flavia:reflection',
        component: () =>
          import(/* webpackChunkName: "flavia-reflection" */ '@/views/ReflectionIbi.vue'),
        props: { reflection: reflections.flaviaKaadi },

      },
      {
        path: 'calebe-reflection',
        name: 'reflex:calebe:reflection',
        component: () =>
          import(/* webpackChunkName: "calebe-reflection" */ '@/views/ReflectionIbi.vue'),
        props: { reflection: reflections.calebeKaadi },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
