export const ADD_CATEGORY = 'ADD_CATEGORY'
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY'
export const UPDATE_IMAGE = 'UPDATE_IMAGE'
export const DISPLAY_CATEGORY= 'DISPLAY_CATEGORY'

export function addCategory(name) {
  return { type: ADD_CATEGORY, name }
}

export function updateCategory(name, index) {
  return { type: UPDATE_CATEGORY, data:{name, index} }
}

export function updateCurrentImage(image) {
  return { type: UPDATE_IMAGE, image }
}

export function displayCategory(name) {
  return { type: DISPLAY_CATEGORY, name }
}