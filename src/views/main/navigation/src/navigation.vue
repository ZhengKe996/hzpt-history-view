<template>
  <MobileNavigation
    v-if="isMobileTerminal"
    :categorys="categorys"
    :grades="grades"
  />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'
import MobileNavigation from './mobile'
// import PCNavigation from './pc'
import { getCategory, getGrade } from '@/api/category'
import { Category, Grade } from '@/constants'
import { ALL_CATEGORY_ITEM } from '@/constants'

const categorys = ref<Category[]>([])
const grades = ref<Grade[]>([])

const getCategoryData = async () => {
  const { data } = await getCategory()
  categorys.value = data as Category[]
  categorys.value.unshift(ALL_CATEGORY_ITEM)
}
const getGradeData = async () => {
  const { data } = await getGrade()
  grades.value = data as Grade[]
}

onMounted(() => {
  getCategoryData()
  getGradeData()
})
</script>
