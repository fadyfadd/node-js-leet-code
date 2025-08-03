class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    _moveToHead(node) {
        if (node === this.head) return;

        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;

        if (node === this.tail) this.tail = node.prev;

        node.prev = null;
        node.next = this.head;
        if (this.head) this.head.prev = node;
        this.head = node;

        if (!this.tail) this.tail = node;
    }



    _removeTail() {
        if (!this.tail) return;

        const node = this.tail;

        if (node.prev) {
            node.prev.next = null;
            this.tail = node.prev;
        } else {
          
            this.head = null;
            this.tail = null;
        }

       
        node.prev = null;
        node.next = null;

        this.cache.delete(node.key);
        this.size--;
    }


    addElement(key, value) {
        if (this.cache.has(key)) {
            const node = this.cache.get(key);
            node.value = value;
            this._moveToHead(node);
        } else {
            const newNode = new Node(key, value);
            this._addToHead(newNode);
            this.cache.set(key, newNode);
            this.size++;

            if (this.size > this.capacity) {
                this._removeTail();
            }
        }
    }


    getElement(key) {
        const node = this.cache.get(key);
        if (!node) return null;

        this._moveToHead(node);
        return node;
    }
}
