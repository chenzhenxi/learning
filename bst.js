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
  this.root = this.__put(this.root, key, val);
};

BST.prototype.__put = function(node, key, val) {
  if (node === null) {
    return new Node({key, val});
  }
  if (node.key === key) {
    node.val = val;
  } else if (node.key > key) {
    node.left = this.__put(node.left, key, val);
  } else {
    node.right = this.__put(node.right, key, val);
  }
  return node;
};

BST.prototype.get = function(key) {
  let next = this.root;
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
