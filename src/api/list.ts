import Service from '@/utils/request'

export const getInfoList = () => {
  return Service({ url: '/list' })
}

export const getInfoFromId = (id: number | string) => {
  return Service({
    url: `/info/${id}`,
  })
}
