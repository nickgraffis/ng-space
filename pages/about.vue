<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()
</script>
<template>
  <p class="text-5xl lg:text-7xl md:text-7xl font-bold text-left w-full mb-6">
    {{ t (`Nick Graffis`) }}
  </p>
  <div class="prose text-lg text-left">
    <p class="">
      I am a full time software engineer from Long Beach, Calif. Currently working remotly
      from San Fransisco, San Diego, or Los Angeles.
    </p>
    <p class="">
      I'm working at Model Match, where I help to make software that brings huge amounts of data
      to the fingertips of people who can find it useful. I love solving problems and making incremental
      improvements to everything I work on. I graduated from Long Beach State and UC Irvine - where I am currently a part time teaching assistant.
    </p>
    <p class="">
      I'm working on, and have worked on, some awesome projects that I hope help make people's days easier and more
      enjoyable. I work with Bavel to help bring a lot of these projects to life.
    </p>
    <p class="">
      Outside of water polo I am a pretty avid water polo coach. TL;DR - find out more here. I love surfing, coffee, food & wine,
      family, friends and of course, Wesley.
    </p>
    <hr class="w-[50px] m-auto my-4" />
    <p class="">
      Love to talk about all things tech, water polo, surfing, food, life. Fine me on GitHub, Twitter, Instagram, or email n@nickgraffis.space.
    </p>
  </div>
</template>
