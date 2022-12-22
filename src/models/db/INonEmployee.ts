import { ICompany } from "./ICompany";
import { IObservee } from "./IObservee";

export interface INonEmployee {
    nonEmployeeId: number;
    companyId: number;
    name: string;
    company: ICompany;
    observee: IObservee[];
}