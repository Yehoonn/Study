class NewConstructor {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === "number") {
      console.log("숫자 말고 문자열 쓰셈");
      return;
    }
    this._name = value;
  }
  
}

const a = new NewConstructor(1, "강예훈", "물");

console.log(a);
