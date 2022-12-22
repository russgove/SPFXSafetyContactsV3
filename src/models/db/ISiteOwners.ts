import { ISite } from "./ISite";

export interface ISiteOwners {
    siteOwnerId: number;
    siteId: number;
    siteOwnerEmail: string;
    site: ISite;
}