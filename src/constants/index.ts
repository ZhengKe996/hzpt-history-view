import Logo from '@/assets/images/logo.png'
import LogoSM from '@/assets/images/logo-sm.png'
import HeaderBg from '@/assets/images/header-bg.png'

export { Logo, LogoSM, HeaderBg }
// PC 设备指定宽度
export const PC_DEVICE_WIDTH: number = 1280

/**
 * @description Category 类型
 */
export interface Category {
  col?: number
  id: string
  name: string
  urlname?: string
}
/**
 * @description Grade 类型
 */
export interface Grade {
  id: string
  grade: string
}

/**
 * @description 主题类型
 */
export interface ThemeType {
  id: string
  type: typeof THEME_LIGHT | typeof THEME_DARK | typeof THEME_SYSTEM
  icon: string
  name: string
}

// category 的本地构建数据
export const ALL_CATEGORY_ITEM = {
  id: 'all',
  name: '全部',
}

// 暗黑主题
export const THEME_DARK = 'dark'
// 浅色主题
export const THEME_LIGHT = 'light'
// 系统主题
export const THEME_SYSTEM = 'system'
