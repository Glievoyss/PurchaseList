export type TProduct =  { name: string, checked: boolean, reserv: boolean, comment: string };
export type TProducts =  TProduct[];
export type TCard =  {products: TProducts, comment: string, isClosedCard: boolean}