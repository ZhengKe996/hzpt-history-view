<template>
  <div
    class="w-full duration-500 bg-white dark:bg-zinc-800 border-b border-b-zinc-200 dark:border-b-zinc-700 px-2 py-1"
  >
    <div class="flex items-center">
      <img
        class="h-5 cursor-pointer mr-2 guide-home"
        :src="LogoSM"
        @click="onToHome"
      />
      <HeaderMain class="mr-1" />
      <HeaderTheme class="mr-1" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LogoSM } from '@/constants'
import { useRouter } from 'vue-router'
import HeaderTheme from '../components/header-theme'
import HeaderMain from '../components/header-main'

const router = useRouter()
const onToHome = () => {
  router.push('/')
}
</script>
