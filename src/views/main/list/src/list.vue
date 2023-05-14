<template>
  <div>
    <m-infinite
      v-model="loading"
      :isFinished="isFinished"
      @onLoad="getInfoData"
    >
      <m-waterfall
        class="px-1 w-full"
        :data="infolList"
        nodeKey="id"
        :column="isMobileTerminal ? 2 : 5"
        :picturePreReading="false"
      >
        <template v-slot="{ item, width }">
          <ListItem :info="item" :width="width" />
        </template>
      </m-waterfall>
    </m-infinite>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAppStore } from '@/store/app'
import ListItem from './list-item.vue'
import { getInfoList } from '@/api/list'
import { Info } from '@/constants'
import { isMobileTerminal } from '@/utils/flexible'
const appStore = useAppStore()

/**
 * 构建数据请求
 */
let query = {
  page: 1,
  size: 20,
}

// 数据是否加载中
const loading = ref<boolean>(false)

// 数据是否全部加载完成
const isFinished = ref<boolean>(false)

const infolList = ref<Info[]>([])
const getInfoData = async () => {
  // 数据全部加载完 return
  if (isFinished.value) return

  // 完成了第一次请求后，后续的请求让page自增
  if (infolList.value.length) {
    query.page += 1
  }

  // 触发接口
  const { data } = await getInfoList()
  if (query.page === 1) {
    infolList.value = data
  } else {
    infolList.value.push(...data)
  }

  // 判断数据是否全部加载完成
  if (infolList.value.length === data.length * 10) {
    isFinished.value = true
  }

  // 修改 loading 标记
  loading.value = false
  console.log(infolList.value)
}

/**
 * 通过此方法修改 query 请求参数，重新发起请求
 */
const resetQuery = (newQuery: any) => {
  query = { ...query, ...newQuery }
  // 重置状态
  isFinished.value = false
  infolList.value = []
}

/**
 * 监听 currentCategory 的变化
 */
watch(
  () => appStore.getCurrentCategory,
  (currentCategory) => {
    // 重置请求参数
    resetQuery({
      page: 1,
      categoryId: currentCategory.id,
    })
  }
)
</script>
