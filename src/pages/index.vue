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

const timelineevents = [
  {
    title: 'Started working at Model Match!',
    date: 'April 4th, 2021',
    color: 'bg-blade',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    `,
  },
  {
    title: 'Graduated from UC Irvine Coding course.',
    date: 'March 12th, 2021',
    color: 'bg-morbius',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path d="M12 14l9-5-9-5-9 5 9 5z" />
      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
    </svg>
    `,
  },
  {
    title: 'Started Bavel with some friends...started making really cool things.',
    date: 'December 1st, 2020',
    color: 'bg-vonCount',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
`,
  },
  {
    title: 'Wesley is born!',
    date: 'October 27th, 2018',
    color: 'bg-dracula',
    icon: `
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    `,
  },
]

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
      I'm working at <span class="text-dracula hover:underline transition-all duration-150 cursor-pointer">Model Match</span>, where I help to make software that brings huge amounts of data
      to the fingertips of people who can find it useful. I love solving problems and making incremental
      improvements to everything I work on. I graduated from Long Beach State and UC Irvine - where I am currently a part time teaching assistant.
    </p>
    <div class="w-full cursor-pointer flex items-center justify-center space-x-2" @click="router.push(`/about`)">
      <span class="text-dracula text-xs font-semibold tracking-wider uppercase">Read More</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-dracula inline-flex" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
  <h1 className="text-lg text-black dark:text-cullen font-medium mb-4 mt-6">
    Timeline
  </h1>
  <ul className="w-full space-y-12">
    <li v-for="(event, index) in timelineevents" class="relative">
      <div style="z-index: 1;" class="absolute w-0.5 bg-cullen rounded-sm mt-1 left-4 -ml-px h-24 " :class="[index === timelineevents.length - 1 ? 'hidden': '']"></div>
      <div style="z-index: 1;" class="flex w-full items-center relative space-x-4">
        <div :class="event.color" class="text-aro rounded-full h-8 w-8 flex items-center justify-center">
          <span v-html="event.icon"></span>
        </div>
        <p class="flex-grow mx-4 text-sm text-gray-600 dark:text-cullen">
          {{ event.title }}
        </p>
        <p class="text-sm text-gray-600 dark:text-cullen">
          {{ event.date }}
        </p>
      </div>
    </li>
  </ul>
  <div>
  </div>
</template>
