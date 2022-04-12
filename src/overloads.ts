export {}; 

function double(value:number):number;
function double(value:string):string;

function double(value: any):any{
  console.log(typeof value);
  if(typeof value ==='number'){
  return value * 2;
  }else if(typeof value === 'string'){
    return value+value;
  }else{
    throw 'numberでもstringでも無いので、引数の型を確認してください。';
  }
}


console.log(double(100));
console.log(double('Go'));
//console.log(double(true));