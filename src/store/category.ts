import { defineStore } from 'pinia'
import {
  ALL_CATEGORY_ITEM,
  Category,
  CategoryState,
  CATEGORY_NOMAR_DATA,
} from '@/constants'
import { getCategory } from '@/api/category'
import { useAppStore } from './app'
const appStore = useAppStore()

export const useCategorysStore = defineStore({
  id: 'categorys',
  state: (): CategoryState => {
    return {
      categorys: CATEGORY_NOMAR_DATA,
    }
  },
  getters: {
    /**
     * navigationBar 数据源
     */
    getCategorys(): any[] {
      return this.categorys
    },
    getCurrentCategoryIndex(): number {
      return this.getCategorys.findIndex((item: Category) => {
        return item.id === appStore.currentCategory.id
      })
    },
  },
  actions: {
    async useCategoryData() {
      const { data } = await getCategory()
      this.setCategorys(data)
    },
    setCategorys(newCategorys: any[]) {
      this.categorys = [ALL_CATEGORY_ITEM, ...newCategorys]
    },
  },
})
