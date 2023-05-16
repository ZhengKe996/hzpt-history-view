import { defineStore } from 'pinia'
import { ALL_CATEGORY_ITEM, Category } from '@/constants'
import { THEME_LIGHT, THEME_DARK, THEME_SYSTEM } from '@/constants'

export interface AppState {
  // 当前选中的分类
  currentCategory: Category
  themeType: typeof THEME_LIGHT | typeof THEME_DARK | typeof THEME_SYSTEM
}

export const useAppStore = defineStore({
  id: 'app',
  state: (): AppState => {
    return {
      currentCategory: ALL_CATEGORY_ITEM,
      themeType: THEME_LIGHT,
    }
  },
  getters: {
    getCurrentCategory(): Category {
      return this.currentCategory
    },
    getThemeType():
      | typeof THEME_LIGHT
      | typeof THEME_DARK
      | typeof THEME_SYSTEM {
      return this.themeType
    },
  },
  actions: {
    changeCurrentCategory(newCategory: Category) {
      this.currentCategory = newCategory
      console.log(this.currentCategory.name)
    },
    changeThemeType(
      newTheme: typeof THEME_LIGHT | typeof THEME_DARK | typeof THEME_SYSTEM
    ) {
      this.themeType = newTheme
    },
  },
})
