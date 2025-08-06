<script setup>
import { ref, onMounted } from 'vue'

onMounted(() => {
  showNextIntro.value = 1
})

const showNextIntro = ref(0)
// const videoplay = ref("")

defineProps({
  intro: Object,
})
</script>

<template>
  <div class="intro">
    <div class="intro-text" v-show="showNextIntro === 1">
      <div style="margin: 1rem; text-align: center">
        <p>
          Que tal se, além de ler as músicas<br />
          você também puder ouví-las
        </p>
      </div>
      <div style="margin: 1rem; text-align: center; margin-bottom: 30px">
        <img src="/img/webp/logo_ibiama.webp" alt="" srcset="" />
        <!--<p><span style="font-size: 60px; color:#ec251e;"><b><i>Brasa Editora</i></b></span></p> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro {
  margin-top: 50px;
  display: flex;
  background-size: 100%;
  background-repeat: no-repeat;
  scroll-behavior: smooth;
}

.intro-text {
  font-size: larger;
  margin-top: 1rem;
  margin-bottom: 3px;
}

.title {
  width: 65%;
  margin-top: -2rem;
}

.intro-button {
  width: 80%;
  background: transparent;
  padding: 1%;
  border: 0;
  position: relative;
}

.intro-buttonleft {
  width: 30%;
  background: transparent;
  padding: 1%;
  border: 0;
  position: relative;
  float: left;
}

.introibi {
  border-radius: 15px;
  padding-top: 2%;
}

.arrows {
  height: 2rem;
  fill: aqua;
}

.fontsize {
  font-size: larger;
}

.buttons {
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.btnvideo {
  position: absolute;
  z-index: 100;
  border: none;
}

.overlay {
  position: relative;
}

.overlaybutton {
  width: 30px;
}

.textOrientation {
  font-size: 22px;
}
</style>
