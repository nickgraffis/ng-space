<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { isDark, toggleDark } from '~/logic'

const { t, availableLocales, locale } = useI18n()

const toolbar = ref(false)

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px);" class="backdrop-filter sticky top-0 z-50 backdrop-blur-md flex items-center justify-between w-full py-6 my-6 font-semibold text-nosferatu dark:text-cullen">
    <div class="flex items-center justify-center h-full flex-shrink-0">
      <img class="h-10 w-10 rounded-full object-cover mr-4 items-center ring-2 ring-offset-4 dark:ring-offset-nosferatu ring-dracula" src="/nick.png" />
    </div>
    <ul class="flex w-full h-full space-x-4 flex-grow items-center hidden lg:flex justify-end">
      <router-link class="font-semibold text-xl flex-grow dark:hover:text-dracula cursor-pointer" to="/">
        Nick Graffis
      </router-link>
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
    <div class="relative">
      <div v-if="toolbar" class="absolute right-8 mt-10 bg-aro w-48 rounded-md">
        <ul class="flex flex-col w-full h-full space-y-4 p-4">
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
      <div class="cursor-pointer p-2 rounded-full hover:bg-aro relative" @click="toolbar=!toolbar">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer text-cullen lg:hidden md:hidden inline" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  </nav>
</template>
