function Node ({ key, val = null, left = null, right = null }) {
  this.key = key;
  this.val = val;
  this.left = left;
  this.right = right;
}

function BST() {
  this.root = null;
}

BST.prototype.put = function(key, val) {
};

BST.prototype.get = function(key) {
  let next = root;
  while (next) {
    if (next.key === key) {
      return next.val;
    } else if (next.key > key) {
      next = next.left;
    } else {
      next = next.right;
    }
  }
  return null;
};

BST.prototype.delete = function(key) {
}
