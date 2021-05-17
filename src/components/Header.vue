<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isDark, toggleDark } from '~/logic'

const { t, availableLocales, locale } = useI18n()

const toolbar = ref(false)

const avatar = ref('/nick.png')
const avatars = ['/nick.png', '/045-dracula.svg', '/nick2.jpeg', '/nick3.jpeg', '/nick4.jpeg', 'nick5.jpeg', 'favicon.svg']

let index = 0

const dropAbout = ref(false)

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const router = useRouter()
const to = (route) => {
  dropAbout.value = !dropAbout.value
  router.push(route)
}

const flipAvatar = () => {
  document.querySelector('#avatar')?.classList.add('rotate-360')
  document.querySelector('#avatar').style.filter = 'blur(10px)'
  setTimeout(() => {
    index = index < 6 ? index + 1 : 0
    avatar.value = avatars[index]
    document.querySelector('#avatar')?.classList.remove('rotate-360')
    document.querySelector('#avatar').style.filter = ''
  }, 100)
}
</script>

<template>
  <nav style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px);" class="backdrop-filter sticky top-0 z-50 backdrop-blur-md flex items-center justify-between w-full py-6 my-6 font-semibold text-nosferatu dark:text-cullen">
    <div class="flex items-center justify-center h-full flex-shrink-0">
      <img id="avatar" class="h-10 transform transition-all duration-150 w-10 cursor-pointer rounded-full object-cover mr-4 items-center ring-2 ring-offset-4 dark:ring-offset-nosferatu ring-dracula" :src="avatar" @click="flipAvatar" />
    </div>
    <ul class="flex w-full h-full space-x-4 flex-grow items-center hidden lg:flex justify-end">
      <router-link class="font-semibold text-xl flex-grow dark:hover:text-dracula cursor-pointer" to="/">
        Nick Graffis
      </router-link>
      <li class="relative">
        <div class="group flex items-center space-x-2 cursor-pointer" @click="dropAbout = !dropAbout">
          <span class="dark:group-hover:text-dracula">About</span>
          <akar-icons:chevron-right class="h-4 w-4 transform transition-all duration-300 dark:group-hover:text-dracula" :class="{ 'rotate-90': dropAbout }" />
        </div>
        <ul class="rounded-md absolute top-8 -left-3 space-y-2 text-left w-48 bg-cullen dark:bg-nosferatu transition-all duration-300 z-50 px-2 h-0 overflow-hidden" :class="{ 'h-36': dropAbout }">
          <li class="dark:hover:text-dracula cursor-pointer" @click="to('/about')">
            Just Me
          </li>
          <li class="dark:hover:text-dracula cursor-pointer" @click="to('/about/techstack')">
            Tech Stack
          </li>
          <li class="dark:hover:text-dracula cursor-pointer" @click="to('/about/uses')">
            Uses
          </li>
          <li class="dark:hover:text-dracula cursor-pointer" @click="to('/about/waterpolo')">
            Water Polo
          </li>
        </ul>
      </li>
      <router-link class="cursor-pointer dark:hover:text-dracula cursor-pointer" to="/projects">
        Projects
      </router-link>
      <router-link class="cursor-pointer dark:hover:text-dracula cursor-pointer" to="/blog">
        Blog
      </router-link>
      <router-link class="cursor-pointer dark:hover:text-dracula cursor-pointer" to="/resume">
        Resume
      </router-link>
      <a class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="toggleDark">
        <Vampire v-if="isDark" />
        <Sun v-else />
      </a>
    </ul>
    <div :class="[toolbar ? 'translate-x-0' : 'translate-x-full']" class="fixed transform transition-all duration-500 bg-aro w-screen h-screen rounded-md top-0">
      <ul class="flex flex-col text-3xl w-full h-full items-center justify-center space-y-4 p-4">
        <router-link class="cursor-pointer dark:hover:text-dracula cursor-pointer" to="/about">
          About
        </router-link>
        <router-link class="cursor-pointer dark:hover:text-dracula cursor-pointer" to="/work">
          Work
        </router-link>
        <router-link class="cursor-pointer dark:hover:text-dracula cursor-pointer" to="/blog">
          Blog
        </router-link>
        <router-link class="cursor-pointer dark:hover:text-dracula cursor-pointer" to="/resume">
          Resume
        </router-link>
        <a class="icon-btn mx-2" :title="t('button.toggle_dark')" @click="toggleDark">
          <Vampire v-if="isDark" />
          <Sun v-else />
        </a>
      </ul>
    </div>
    <div class="relative">
      <div class="cursor-pointer p-2 rounded-full relative  lg:hidden md:hidden inline" @click="toolbar=!toolbar">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer text-cullen" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </nav>
</template>
