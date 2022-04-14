export{}; 

type DetailedProile = {
  name:string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProile, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProile,'height'>;