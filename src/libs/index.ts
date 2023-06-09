import { App, defineAsyncComponent } from 'vue'
export { message } from './message'

export default {
  install(app: App) {
    // 1. 获取当前路径下所有文件夹中的 index.vue
    const components = import.meta.glob('./*/index.vue')

    // 2. 遍历获取到的组件模块
    for (const [fullPath, fn] of Object.entries(components)) {
      // 3. 利用 app.component 进行注册
      const componentName = `m-${fullPath.replace('./', '').split('/')[0]}`

      // @ts-ignore
      app.component(componentName, defineAsyncComponent(fn))
    }
  },
}
