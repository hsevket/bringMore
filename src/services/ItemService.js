function generateId(size = 10) {
    let ret = '';
    while (size --) {
        ret += String.fromCharCode(Math.round(Math.random() * 25 + 97));
    }
    return ret;
}

export class ListItemType {
    name = '';
    qty = 1;
    completed = false;
    id = '';
  constructor(name, qty = 1, completed = false, id = null) {
        this.name = name;
        this.qty = qty;
        this.completed = completed;
        if (id) {
            this.id = id;
        } else {
            this.id = generateId();
        }
  }
}