import { ISite } from "./ISite";
import { INonEmployee } from "./INonEmployee";

export interface ICompany {
    companyId: number;
    name: string;
    siteId: number;
    site: ISite;
    nonEmployee: INonEmployee[];
}