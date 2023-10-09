export interface IBloodSupply {
  id: number;
  family: Family;
  supply: number;
}

export enum Family {
  oPos = "O+",
  oNeg = "O-",
  aPos = "A+",
  aNeg = "A-",
  bPos = "B+",
  bNeg = "B-",
  abPos = "AB+",
  abNeg = "AB-",
}
