class i64 {
  #value;

  constructor(value) {
    this.#value = Math.floor(value);
  }

  add(b) {
    return new i64(b + this.#value);
  }
  sub(b) {
    return new i64(b - this.#value);
  }
  mul(b) {
    return new i64(b * this.#value);
  }
  div(b) {
    return new i64(b / this.#value);
  }
  mod(b) {
    return new i64(b % this.#value);
  }
}

// Types
const __jakt_internal_i64 = (v) => new i64(v);

const __jakt_internal_checked_add = (a, b) => a.add(b);
const __jakt_internal_checked_sub = (a, b) => a.sub(b);
const __jakt_internal_checked_mul = (a, b) => a.mul(b);
const __jakt_internal_checked_div = (a, b) => a.div(b);
const __jakt_internal_checked_mod = (a, b) => a.mod(b);

const TRY = (fn) => {
  return () => {
    try {
      return fn();
    } catch (error) {
      console.error("TRY failed");
      console.error(error);
      throw new Error(error);
    }
  };
};

const __jakt_internal_format = (input, ...args) => {
  let output = input;
  args.forEach((arg) => {
    output = output.replace("{}", arg);
  });
  return output;
};
