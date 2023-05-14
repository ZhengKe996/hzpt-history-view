import Service from '@/utils/request'

export const getInfoList = () => {
  return Service({ url: '/list' })
}
