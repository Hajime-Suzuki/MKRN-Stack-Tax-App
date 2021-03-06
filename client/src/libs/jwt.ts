const decodeJwt = (token: string) => {
  const base64Url = token.split('.')[1]
  const base64 = base64Url.replace('-', '+').replace('_', '/')
  return JSON.parse(window.atob(base64))
}

const storeJwt = token => {
  localStorage.setItem('jwt', token)
}

const getJwt = () => localStorage.getItem('jwt')

const getUserId = (): string | null => {
  const token = getJwt()
  return token ? decodeJwt(token).id : null
}
export const JWT = {
  storeJwt,
  getJwt,
  decodeJwt,
  getUserId
}
