<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const name = ref('')

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()

</script>

<template>
  <div class="h-full flex-grow">
    <div class="">
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
          to the fingertips of people who can find it useful. I am also working on some really cool stuff with Bavel. I graduated from Long Beach State and UC Irvine - where I am currently a part time teaching assistant.
        </p>
        <p class="flex items-center space-x-4">
          <span class="bg-dracula flex items-center justify-center p-1 rounded-full flex-shrink-0 h-6 w-6">
            <fa-solid:exclamation class="w-4 h-4" />
          </span>
          <a class="cursor-pointer">
            Want to know about how this site works?
          </a>
        </p>
        <div class="w-full cursor-pointer flex items-center justify-center space-x-2" @click="router.push(`/about`)">
          <span class="text-dracula text-xs font-semibold tracking-wider uppercase">Read More</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-dracula inline-flex" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    <div class=" space-y-4">
      <h1 class="text-lg text-left w-full text-nosferatu dark:text-cullen font-medium mb-4 mt-6">
        Projects
      </h1>
      <Projects :length="4" />
      <div class="w-full cursor-pointer flex items-center justify-center space-x-2" @click="router.push(`/projects`)">
        <span class="text-dracula text-xs font-semibold tracking-wider uppercase">See More Projects</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-dracula inline-flex" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
    <div class=" space-y-4">
      <h1 class="text-lg text-left w-full text-nosferatu dark:text-cullen font-medium mb-4 mt-6">
        Timeline
      </h1>
      <Timeline :length="6" />
      <div class="w-full cursor-pointer flex items-center justify-center space-x-2" @click="router.push(`/events`)">
        <span class="text-dracula text-xs font-semibold tracking-wider uppercase">See Full Timeline</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-dracula inline-flex" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
</template>
