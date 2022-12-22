import { IRegionOwners } from "./IRegionOwners";
import { ISite } from "./ISite";

export interface IRegion {
    regionId: number;
    name: string;
    regionOwners: IRegionOwners[];
    site: ISite[];
}