// 递归算法

function getByElementId(node, id) {
  //遍历所有的Node
  while (node) {
    console.log("🚀 --> getByElementId --> node:", node);
    console.log("🚀 --> getByElementId --> node.innerText:", node.outerText);
    if (node.id === id) return node;
    node = nextElement(node);
  }
  return null;
}

// 深度遍历
function nextElement(node) {
  // 先判断是否有子结点
  if (node.children.length) {
    // 有则返回第一个子结点
    return node.children[0];
  }
  // 再判断是否有相邻结点
  if (node.nextElementSibling) {
    // 有则返回它的下一个相邻结点
    return node.nextElementSibling;
  }
  // 否则，往上返回它的父结点的下一个相邻元素，相当于上面递归实现里面的for循环的i加1
  while (node.parentNode) {
    if (node.parentNode.nextElementSibling) {
      return node.parentNode.nextElementSibling;
    }
    node = node.parentNode;
  }
  return null;
}

const target = getByElementId(document.body, "haha");
console.log("🚀 --> target:", target);
