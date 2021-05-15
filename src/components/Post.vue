<script setup lang='ts'>
import { defineProps, onMounted } from 'vue'
import { formatDate } from '../logic'
import { useRoute } from 'vue-router'
import { useEventListener, isClient } from '@vueuse/core'

const route = useRoute()
const { frontmatter } = defineProps<{ frontmatter: any }>()

if (isClient) {
  const navigate = () => {
    if (location.hash) {
      document.querySelector(location.hash)
        ?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEventListener(window, 'hashchange', navigate, false)

  onMounted(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault()
        const href = anchor.getAttribute('href') as string
        history.replaceState({}, '', href)
        navigate()
      })
    })

    navigate()
    setTimeout(navigate, 500)
  })
}
</script>

<template>

  <slot />

</template>
