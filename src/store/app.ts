import { defineStore } from 'pinia'
import { ALL_CATEGORY_ITEM, Category } from '@/constants'
import { isMobileTerminal } from '@/utils/flexible'

export interface AppState {
  // 当前选中的分类
  currentCategory: Category
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => {
    return {
      currentCategory: ALL_CATEGORY_ITEM,
    }
  },
  getters: {
    getCurrentCategory(): Category {
      console.log('getCurrentCategory', this.currentCategory)
      return this.currentCategory
    },
  },
  actions: {
    changeCurrentCategory(newCategory: Category) {
      this.currentCategory = newCategory
    },
  },
})
