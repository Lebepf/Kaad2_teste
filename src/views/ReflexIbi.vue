<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

function currentRouteName() {
  return route.name
}

window.AFRAME.registerComponent('aline', {
  init: function () {
    const target = this.el

    const targetFound = () => {
      setTimeout(() => {
        router.push({ name: 'reflex:aline:reflection' })
      }, 1500)
      target.removeEventListener('targetFound', targetFound)
    }

    const targetLost = (refev) => {
      if (refev) {
        setTimeout(() => {
          target.removeEventListener('markerLost', targetLost)
        }, 5000)
      }
    }

    target.addEventListener('targetFound', targetFound)
    target.addEventListener('targetLost', targetLost)
  },
})

window.AFRAME.registerComponent('joel', {
  init: function () {
    const target = this.el

    const targetFound = () => {
      setTimeout(() => {
        router.push({ name: 'reflex:joel:reflection' })
      }, 1500)
      target.removeEventListener('targetFound', targetFound)
    }

    const targetLost = (refev) => {
      if (refev) {
        setTimeout(() => {
          target.removeEventListener('markerLost', targetLost)
        }, 5000)
      }
    }

    target.addEventListener('targetFound', targetFound)
    target.addEventListener('targetLost', targetLost)
  },
})

window.AFRAME.registerComponent('cristiane', {
  init: function () {
    const target = this.el

    const targetFound = () => {
      setTimeout(() => {
        router.push({ name: 'reflex:cristiane:reflection' })
      }, 1500)
      target.removeEventListener('targetFound', targetFound)
    }

    const targetLost = (refev) => {
      if (refev) {
        setTimeout(() => {
          target.removeEventListener('markerLost', targetLost)
        }, 5000)
      }
    }

    target.addEventListener('targetFound', targetFound)
    target.addEventListener('targetLost', targetLost)
  },
})

window.AFRAME.registerComponent('lisboa', {
  init: function () {
    const target = this.el

    const targetFound = () => {
      setTimeout(() => {
        router.push({ name: 'reflex:lisboa:reflection' })
      }, 1500)
      target.removeEventListener('targetFound', targetFound)
    }

    const targetLost = (refev) => {
      if (refev) {
        setTimeout(() => {
          target.removeEventListener('markerLost', targetLost)
        }, 5000)
      }
    }

    target.addEventListener('targetFound', targetFound)
    target.addEventListener('targetLost', targetLost)
  },
})

window.AFRAME.registerComponent('flavia', {
  init: function () {
    const target = this.el

    const targetFound = () => {
      setTimeout(() => {
        router.push({ name: 'reflex:flavia:reflection' })
      }, 1500)
      target.removeEventListener('targetFound', targetFound)
    }

    const targetLost = (refev) => {
      if (refev) {
        setTimeout(() => {
          target.removeEventListener('markerLost', targetLost)
        }, 5000)
      }
    }

    target.addEventListener('targetFound', targetFound)
    target.addEventListener('targetLost', targetLost)
  },
})
</script>
<template>
  <div class="reflex">
    <div v-if="currentRouteName() === 'reflex'" class="content">
      <div class="row col-12 bg-light pt-2">
        <div class="col-4">
          <h6 class="float-end mt-2">Team</h6>
        </div>
        <div class="col-3">
          <img src="/img/webp/logo_ibiama.webp" class="card-img" alt="logo_ibiama" />
        </div>
      </div>
      <a-scene
        mindar-image="imageTargetSrc: img/targets/targets_kaadi.mind;uiScanning:no; autoStart: true"
        device-orientation-permission-ui="enabled: false"
        embedded
        vr-mode-ui="enabled: false"
      >
        <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

        <!-- Entidade de alvo AR -->
        <a-entity mindar-image-target="targetIndex: 0" aline></a-entity>
        <a-entity mindar-image-target="targetIndex: 1" cristiane></a-entity>
        <a-entity mindar-image-target="targetIndex: 2" joel></a-entity>
      </a-scene>
    </div>
    <router-view v-slot="{ Component }" class="content">
      <transition name="anim-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<style>
.clickable {
  cursor: pointer;
}

.reflex {
  display: flex;
  scroll-behavior: auto;
}

.content {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
  align-content: center;
}

.containerReflex {
  width: 100vw;
  height: 100vh;
}

.button {
  transition: all 0.3s ease-in-out;
  border-radius: 0.2rem;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.button:hover {
  opacity: 1;
  transform: translateY(-2px);
  box-shadow: 0px 6px 14px rgba(0, 0, 0, 0.25);
}

.button:active {
  transform: translateY(0);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2);
}
</style>
