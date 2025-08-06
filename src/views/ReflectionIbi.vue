<script setup>
import { ref, onMounted } from 'vue'

// Remova esta importação se não estiver usando 'right' do @popperjs/core
// import { right } from '@popperjs/core'

const props = defineProps({
  reflection: Object,
})

const audioreflex = ref('')
const photo = ref('')

onMounted(() => {
  audioreflex.value = props.reflection.audioreflex1
  photo.value = props.reflection.photo1
})

function baixarContato() {
  if (!props.reflection.linkext) {
    // Use um modal ou mensagem na UI em vez de alert()
    console.warn('ID de usuário não especificado para download de contato.');
    // Exemplo de como você poderia mostrar uma mensagem na UI:
    // this.showErrorMessage = true;
    return
  }

  // Monta a URL do arquivo .vcf usando o ID do usuário
  const vcfUrl = props.reflection.linkext
  window.location.href = vcfUrl
}

function enviarEmail() {
  // `mailto:` para enviar um e-mail automático
  const email = 'kaadi@ibi.art.br'
  const subject = `Contato via KAADI Ibiama (${props.reflection.name})`
  const body = 'Olá, estou entrando em contato através do seu cartão de visitas AR!'
  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

// NOVO: Função para abrir o link do LinkedIn
function abrirLinkedIn() {
  // verifica se o link do linkedin existe na prop reflection
  if (props.reflection.linkedin_url) {
    window.open(props.reflection.linkedin_url, '_blank') // Abre em uma nova aba
  } else {
    // Use um modal ou mensagem na UI em vez de alert()
    console.warn('Link do LinkedIn não configurado para este perfil.');
    // Exemplo de como você poderia mostrar uma mensagem na UI:
    // this.showLinkedInError = true;
  }
}
</script>

<template>
  <div class="" v-if="reflection">
    <div v-textbox="{ color: 'white', fontSize: '1.1rem' }" class="">
      <div class="text-dark">
        <img src="/img/webp/logo_ibiama.webp" class="cardimg" alt="logo_ibiama" />
        <h1>{{ props.reflection.name }}</h1>
        <p>{{ props.reflection.cargo }}</p>
      </div>
      <img :src="photo" class="cardphoto" alt="" />
      <div class="col-12 d-grid gap-4 p-4">
        <button @click="baixarContato" class="btn btn-dark btn-lg" type="button">
          Register Contacto
        </button>
        <button @click="enviarEmail" class="btn btn-success btn-lg" type="button">
          Send E-mail
        </button>

        <!-- NOVO: Botão do LinkedIn - ADICIONADO AQUI NO TEMPLATE -->
        <button
          v-if="reflection.linkedin_url"
          @click="abrirLinkedIn"
          class="btn btn-linkedin btn-lg"
          type="button"
        >
          <!--img src="/public/img/webp/linkedin.webp" alt="LinkedIn" class="linkedin-icon" type="button">-->
          LinkedIn
        </button>
      </div>
    </div>
  </div>
</template>
