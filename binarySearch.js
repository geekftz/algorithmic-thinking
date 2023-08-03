function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivotIndex = arr.length >> 1;

  // 取出中间值 数组长度-1
  let pivot = arr.splice(pivotIndex, 1)[0];

  // 子数组 左
  let left = [];
  // 子数组 右
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (item < pivot) {
      left.push(item);
    } else {
      right.push(item);
    }
  }

  return quickSort(left).concat(pivot).concat(quickSort(right));
}

function binarySearch(items, item) {
  // 快排
  quickSort(items);
  var low = 0,
    high = items.length - 1,
    mid,
    elem;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    elem = items[mid];
    if (elem < item) {
      low = mid + 1;
    } else if (elem > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// 测试
var arr = [2, 3, 1, 4];
const res1 = binarySearch(arr, 3);
console.log("🚀 --> res1:", res1);
// 2

const res2 = binarySearch(arr, 5);
console.log("🚀 --> res2:", res2);
// -1
