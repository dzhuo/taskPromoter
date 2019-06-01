class Task {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    get() {
      return '(' + this.x + ',' + this.y + ')';
    }
}