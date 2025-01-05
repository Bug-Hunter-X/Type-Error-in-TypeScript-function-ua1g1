function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

let result = add(10, 20); // No error

let result2 = add(10, "hello"); //Type Error

let result3: number;

if(isNumber(10) && isNumber(20)){
    result3 = add(10,20);
}

//Type Assertion
let result4 = add(10 as number, 20 as number); //No error