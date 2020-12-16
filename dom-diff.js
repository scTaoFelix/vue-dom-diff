// 1、属性发生了变化  {type: "ATTRs", attrs: {class: 'list-new}}
// 2、文本节点发生了变化 {type: "TEXT", text: 1}
// 3、节点被删除了 {type: "REMOVE", index: 1}
// 4、节点不一致 {type: "replace", newNode: newNOde }
import _ from './uitl.js'
let globalIndex = 0
// b补丁包
let pactshs = {}
function diff(oldTree, newTree){
  dfswalk(oldTree, newTree, globalIndex)
  return pactshs
}

function dfswalk(oldTree, newTree, index){
  let currentPatchs =[]
  if (!newTree) {
    currentPatchs.push({
      type: 'REMOVE',
      index
    })
  }
  if (_.isString(oldTree)) {
    if (_.isString(newTree) && (oldTree !== newTree)) {
      currentPatchs.push({
        type: 'TEXT',
        text: newTree
      })
    }

  }else if (oldTree.type == newTree.type) {
      diffProps()
      diffChildren(oldTree.children, newTree.children)
  }
  if (currentPatchs.length > 0) {
    pactshs[index] = currentPatchs
  }
}

function diffProps(){
  
}
function diffChildren(oldChildrens, newChildrens){
  oldChildrens.forEach( (child, idx) => {
    dfswalk(child, newChildrens[idx], ++ globalIndex)
  })
}


export {
  diff
}