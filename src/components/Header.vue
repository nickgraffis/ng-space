<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { isDark, toggleDark } from '~/logic'
const { t, availableLocales, locale } = useI18n()
const toolbar = ref(false)
const avatar = ref('/nick.png')
const avatars = [
  '/nick.png',
  '/045-dracula.svg',
  '/nick2.jpeg',
  '/nick3.jpeg',
  '/nick4.jpeg',
  '/nick5.jpeg',
  '/favicon.svg',
]
let index = 0
const dropAbout = ref(false)
const router = useRouter()
const to = (route: string) => {
  dropAbout.value = !dropAbout.value
  router.push(route)
}
const flipAvatar = () => {
  const avatarEl: HTMLElement | null = document.querySelector('#avatar') as HTMLElement
  if (avatarEl) {
    avatarEl.classList.add('rotate-360')
    avatarEl.style.filter = 'blur(10px)'
    setTimeout(() => {
      index = index < 6 ? index + 1 : 0
      avatar.value = avatars[index]
      avatarEl.classList.remove('rotate-360')
      avatarEl.style.filter = ''
    }, 100)
  }
}
</script>

<template>
  <nav
    style="-webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px);"
    class="sticky text-sm lg:text-lg top-0 z-50 flex items-center justify-between w-full py-6 my-6 font-semibold text-nosferatu dark:text-cullen"
  >
    <div class="flex items-center justify-center h-full flex-shrink-0">
      <img
        id="avatar"
        alt="avatar"
        class="h-10 transform transition-all duration-150 w-10 cursor-pointer rounded-full object-cover mr-4 items-center ring-2 ring-offset-4 dark:ring-offset-nosferatu dark:ring-dracula ring-draculaDark"
        :src="avatar"
        @click="flipAvatar"
      />
    </div>
    <div class="flex w-full h-full space-x-4 flex-grow items-center justify-end">
      <NavLink to="/" class="hidden lg:inline-flex flex-grow">
        Nick Graffis
      </NavLink>
      <div class="relative hidden lg:inline-flex">
        <div class="group flex items-center space-x-2 cursor-pointer" @click="dropAbout = !dropAbout">
          <span class="transition-all duration-300 dark:group-hover:text-dracula group-hover:text-draculaDark">{{ t(`about`) }}</span>
          <akar-icons:chevron-right class="transition-all duration-300 h-4 w-4 transform dark:group-hover:text-dracula group-hover:text-draculaDark" :class="{ 'rotate-90': dropAbout }" />
        </div>
        <ul
          class="rounded-md absolute top-8 -left-3 space-y-2 text-left w-48 bg-cullen dark:bg-nosferatu transition-all duration-300 z-50 px-2 h-0 overflow-hidden"
          :class="{ 'h-36': dropAbout }"
        >
          <li class="transition-colors duration-300 dark:hover:text-dracula hover:text-draculaDark cursor-pointer" @click="to('/about')">
            {{ t(`just-me`) }}
          </li>
          <li class="transition-colors duration-300 dark:hover:text-dracula hover:text-draculaDark cursor-pointer" @click="to('/about/techstack')">
            {{ t(`tech-stack`) }}
          </li>
          <li class="transition-colors duration-300 dark:hover:text-dracula hover:text-draculaDark cursor-pointer" @click="to('/about/uses')">
            {{ t(`uses`) }}
          </li>
          <li class="transition-colors duration-300 dark:hover:text-dracula hover:text-draculaDark cursor-pointer" @click="to('/about/waterpolo')">
            {{ t(`water-polo`) }}
          </li>
        </ul>
      </div>
      <NavLink to="/" class="inline-flex lg:hidden">
        <bx-bx-home-heart />
      </NavLink>
      <NavLink to="/projects" class="hidden lg:inline-flex">
        {{ t(`projects`) }}
      </NavLink>
      <NavLink to="/projects" class="inline-flex lg:hidden">
        <entypo-lab-flask />
      </NavLink>
      <NavLink to="/blog" class="hidden lg:inline-flex">
        {{ t(`blog`) }}
      </NavLink>
      <NavLink to="/blog" class="inline-flex lg:hidden">
        <ant-design:message-outlined />
      </NavLink>
      <NavLink to="/resume" class="hidden lg:inline-flex">
        {{ t(`resume`) }}
      </NavLink>
      <NavLink to="/resume" class="inline-flex lg:hidden">
        <akar-icons:paper />
      </NavLink>
      <a class="icon-btn" :title="t('button.toggle_dark')" @click="toggleDark">
        <Vampire v-if="isDark" />
        <Sun v-else />
      </a>
    </div>
  </nav>
</template>
