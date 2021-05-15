<script setup lang="ts">

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
    <p v-if="verbose" class="">
      I'm working on, and have worked on, some awesome projects that I hope help make people's days easier and more
      enjoyable. I work with Bavel to help bring a lot of these projects to life.
    </p>
    <p v-if="verbose" class="">
      Outside of water polo I am a pretty avid water polo coach. TL;DR - find out more here. I love surfing, coffee, food & wine,
      family, friends and of course, Wesley.
    </p>
    <hr v-if="verbose" class="w-[50px] m-auto my-4" />
    <p v-if="verbose" class="">
      Love to talk about all things tech, water polo, surfing, food, life. Fine me on GitHub, Twitter, Instagram, or email n@nickgraffis.space.
    </p>
    <div class="w-full cursor-pointer flex items-center justify-center space-x-2">
      <span class="text-dracula text-xs font-semibold tracking-wider uppercase">Read More</span>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-dracula inline-flex" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</template>
