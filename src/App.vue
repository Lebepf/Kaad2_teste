<script setup>
import { RouterView } from 'vue-router'

import 'aframe'
import 'mind-ar/dist/mindar-image-aframe.prod.js'
</script>

<template>
  <div id="app">
    <main>
      <router-view v-slot="{ Component }">
        <transition name="anim-fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style scoped>
main {
  overflow: hidden auto;
}
</style>
