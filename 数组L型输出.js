const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function func(arr) {
  const m = arr.length;
  const n = arr[0].length;
  for (let i = 0; i < m; i++) {
    let x = 0;
    let y = i;
    while (x < m - i) {
      console.log(arr[x++][y]);
    }
    x--;
    y++;
    while (y < n) {
      console.log(arr[x][y++]);
    }
  }
}
func(arr);
