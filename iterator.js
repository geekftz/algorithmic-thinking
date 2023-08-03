function loop(arr) {
  console.log(arguments);

  const args = [].slice.call(arguments);

  args.forEach((ele) => {
    console.log(ele);
  });
}

const arr = [1, 2, 3, 4];

loop(arr);
