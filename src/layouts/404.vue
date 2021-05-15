<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

const router = useRouter()
const { t } = useI18n()

const stars = new Array(20).fill(0)
const starStyle = []
stars.forEach(star => starStyle.push({ top: `${Math.floor(Math.random() * 100)}%`, left: `${Math.floor(Math.random() * 100)}%` }))
</script>

<template>
  <div class="h-screen w-screen -top-[40rem] -left-[30rem] absolute">
  </div>
  <div class="w-screen h-screen fixed font-bold text-dracula text-10xl flex items-center justify-center">
    <div class="absolute z-50 -ml-24 -mt-24">
      <div class="moon">
        <div class="shade"></div>
      </div>
    </div>
    <p class="absolute z-40 text-center">
      4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4
    </p>
    <a class="cursor-pointer absolute mt-64 bg-dracula px-6 py-2 text-aro rounded-md text-2xl font-semibold" @click="router.back()">
      Back
    </a>
    <div v-for="(star, index) in stars" class="z-30 absolute rounded-full h-2 w-2 bg-lincoln" :style="starStyle[index]"></div>
  </div>
</template>

<style scoped>
.moon {
  position: absolute;
  background: white;
  height: 100px;
  width: 100px;
  border-radius: 100%;
}
.moon::before {
  content: '';
  position: absolute;
  opacity: 0.1;
  background: white;
  height: 140px;
  width: 140px;
  border-radius: 100%;
  left: -20px;
  top: -20px;
  animation: 5s enlarge infinite linear;
}
.moon::after {
  content: '';
  position: absolute;
  background: white;
  opacity: 0.2;
  height: 120px;
  width: 120px;
  border-radius: 100%;
  left: -10px;
  top: -10px;
  animation: 5s enlarge infinite linear;
}
.shade {
  position: absolute;
  left: 30px;
  top: 10px;
  opacity: 0.3;
  background: grey;
  height: 20px;
  width: 20px;
  border-radius: 100%;
}
.shade::before {
  content: '';
  position: absolute;
  background: grey;
  height: 10px;
  width: 10px;
  border-radius: 100%;
  top: 30px;
}
.shade::after {
  content: '';
  position: absolute;
  background: grey;
  height: 8px;
  width: 8px;
  border-radius: 100%;
  left: -15px;
  top: 15px;
}

</style>
