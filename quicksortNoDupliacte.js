function quicksortNoDupliacte(array, lo = 0, hi = array.length - 1) {
  if (lo >= hi) return array;
  
  let i = lo, j = hi + 1;
  
  while (i < j) {
    while(i < hi && array[++i] < array[lo]) {}
    while(lo < j && array[--j] > array[lo]) {}
    
    if (i < j) {
      let tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
    }
  }
  
  let tmp = array[lo];
  array[lo] = array[j];
  array[j] = tmp;
  
  quicksortNoDupliacte(array, lo, j - 1);
  quicksortNoDupliacte(array, j + 1, hi);
  
  return array;
}
