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
      <HeaderTheme class="mr-1" :theme-arr="themeArr" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  LogoSM,
  THEME_DARK,
  THEME_LIGHT,
  THEME_SYSTEM,
  ThemeType,
} from '@/constants'
import { useRouter } from 'vue-router'
import HeaderTheme from '../components/header-theme'
import HeaderMain from '../components/header-main'

// 构建渲染数据源
const themeArr: ThemeType[] = [
  {
    id: '0',
    type: THEME_LIGHT,
    icon: 'theme-light',
    name: '极简白',
  },
  {
    id: '1',
    type: THEME_DARK,
    icon: 'theme-dark',
    name: '极夜黑',
  },
  {
    id: '2',
    type: THEME_SYSTEM,
    icon: 'theme-system',
    name: '跟随系统',
  },
]
const router = useRouter()
const onToHome = () => {
  router.push('/')
}
</script>
