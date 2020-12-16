import { createElement } from './element.js'
import { diff } from './dom-diff.js'
let vDom1 = createElement('ul', { class: 'list' }, [
  createElement('li', { class: 'item' }, ['1']),
  createElement('li', { class: 'item' }, ['2']),
  createElement('li', { class: 'item' }, ['3'])
])

console.log(vDom1)

let vDom2 = createElement('ul', { class: 'list-new' }, [
  createElement('li', { class: 'item' }, ['a']),
  createElement('li', { class: 'item' }, ['2']),
  createElement('li', { class: 'item' }, ['c'])
])
const patchs = diff(vDom1, vDom2)
console.log('得到到补丁包', patchs)