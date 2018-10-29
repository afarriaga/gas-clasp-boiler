// helper functions
function times(n: number, callback: Function) {
  let counter = 0;
  while ((counter += 1) <= n) {
    callback(counter);
  }
}
