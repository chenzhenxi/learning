function quicksortNoDupliacte(array, lo = 0, hi = array.length - 1) {
  if (lo >= hi) return array;
    
  let i = lo, j = hi + 1;
  shuffle(array, i, j);
  
  while (true) {
    while(i < hi && array[++i] < array[lo]) {}
    while(lo < j && array[--j] > array[lo]) {}
    if (i >= j) {
      break;
    }
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  [array[lo], array[j]] = [array[j], array[lo]];  
  quicksortNoDupliacte(array, lo, j - 1);
  quicksortNoDupliacte(array, j + 1, hi);
  
  return array;
}

function shuffle(a, lo = 0, hi = a.length) {
	let diff = hi - lo;
    for (let i = hi; i > lo; i--) {
        let j = lo + parseInt(Math.random() * diff, 10);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
