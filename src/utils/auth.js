import Cookies from 'js-cookie'

const IdKey = 'Admin-userId'

export function getUserId() {
  return sessionStorage.getItem(IdKey)
}

export function setUserId(userId) {
  return sessionStorage.setItem(IdKey, userId)
}

export function removeUserId() {
  return sessionStorage.removeItem(IdKey)
}

