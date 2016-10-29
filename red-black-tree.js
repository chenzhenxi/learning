function Node ({ key, val = null, isRed = false, left = null, right = null }) {
  this.key = key;
  this.val = val;
  this.isRed = isRed;
  this.left = left;
  this.right = right;
}
