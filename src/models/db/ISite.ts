import { IRegion } from "./IRegion";
import { IActions } from "./IActions";
import { IAdofficeLocations } from "./IAdofficeLocations";
import { ICompany } from "./ICompany";
import { ILocation } from "./ILocation";
import { ISiteOwners } from "./ISiteOwners";
import { IStandard } from "./IStandard";

export interface ISite {
    siteId: number;
    regionId: number;
    name: string;
    latitude: number | undefined;
    longitude: number | undefined;
    region: IRegion;
    actions: IActions[];
    adofficeLocations: IAdofficeLocations[];
    company: ICompany[];
    location: Location[];
    siteOwners: ISiteOwners[];
    standard: IStandard[];
}