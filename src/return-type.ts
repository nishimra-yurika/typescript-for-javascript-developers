export{}; 

function add(a: number, b: number){
  return a+b;
}

console.log(add(1,2));

type RturnTypeFromAdd = ReturnType<typeof add>;