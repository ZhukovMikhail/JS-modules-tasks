var length = 10;
function fn() {
  console.log(this.length);
}
var obj = {
  length: 5,
  method: function (fn) {
    fn();
    arguments[0]();
  },
};
obj.method(fn, true);

//=========================================================

this.value = 'D';

const object = {
  value: 'A',
  methodA: () => {
    console.log(this.value);
  },
  methodB: function () {
    console.log(this.value);
  },
};

const context = {
  value: 'B',
};

object.methodA();
object.methodB();
object.methodA.call(context);
object.methodB.call(context);
object.methodA.bind({ value: 'C' }).call(context);
object.methodB.bind({ value: 'E' }).call(context);

const bam = null;
console.log(typeof bam); // "object"
