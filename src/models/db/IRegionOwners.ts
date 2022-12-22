import { IRegion } from "./IRegion";

export interface IRegionOwners {
    regionOwnerId: number;
    regionId: number;
    regionOwnerEmail: string;
    region: IRegion;
}