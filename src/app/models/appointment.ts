export enum Status {
  pending = "pending",
  accepted = "accepted",
  declined = "declined",
}
export interface IAppointment {
  id: number;
  firstName: string;
  lastName: string;
  date: string;
  center: string;
  status: Status;
}
