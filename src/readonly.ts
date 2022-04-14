export {}; 

class VisaCard{
  constructor(readonly owner:string){}
}

let MyVisaCard = new VisaCard('はむさん');
console.log(MyVisaCard.owner);
//MyVisaCard.owner = 'ベーコン';