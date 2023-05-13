<template>
  <MobileNavigation v-if="isMobileTerminal" :grades="grades" />
  <PCNavigation v-else />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'
import MobileNavigation from './mobile'
import PCNavigation from './pc'
import { getGrade } from '@/api/category'
import { useCategorysStore } from '@/store/category'

import { Grade } from '@/constants'

const grades = ref<Grade[]>([])

const getGradeData = async () => {
  const { data } = await getGrade()
  grades.value = data as Grade[]
}
const categorysStore = useCategorysStore()

onMounted(() => {
  categorysStore.useCategoryData()
  getGradeData()
})
</script>
