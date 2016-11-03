function Node ({ key, val = null, left = null, right = null }) {
  this.key = key;
  this.val = val;
  this.left = left;
  this.right = right;
  this.count = 1;
}

Node.count = node => node ? node.count : 0;

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
  node.count = Node.count(node.left) + Node.count(node.right.count);
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

BST.prototype.max = function () {
  let next = this.root;
  while (next && next.right) {
    next = next.right;
  }
  return next;
}

BST.prototype.min = function () {
  let next = this.root;
  while (next && next.left) {
    next = next.left;
  }
  return next && next.key;
}

BST.prototype.floor = function (key) {
  let next = this.root;
  let r = null;
  while (next) {
    if (next.key === key) {
      return next.key;
    } else (next.key > key) {
      next = next.left;
    } else {
      r = next;
      next = next.right;
    }
  }
  return r && r.key;
}

BST.prototype.ceiling = function (key) {
  let next = this.root;
  let r = null;
  while (next) {
    if (next.key === key) {
      return next.key;
    } else (next.key < key) {
      next = next.right;
    } else {
      r = next;
      next = next.left;
    }
  }
  return r && r.key;
}


BST.prototype.rank = function(key) {
  return this.__rank(this.root, key);
}


BST.prototype.__rank = function(node, key) {
  if (node === null) return null;
  if      (node.key > key)    return this.__rank(node.left, key);
  else if (node.key < key)    return 1 + Node.count(node.left) + this.__rank(node.right, key);
  else                        return Node.count(node.left);
}

BST.prototype.delete = function(key) {
}

