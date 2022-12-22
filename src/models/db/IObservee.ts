import { INonEmployee } from "./INonEmployee";
import { IObservation } from "./IObservation";

export interface IObservee {
    observeeId: number;
    isEmployee: boolean;
    nonEmployeeId: number | null;
    employeeEmail: string;
    nonEmployee: INonEmployee;
    observation: IObservation[];
}