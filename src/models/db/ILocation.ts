import { ISite } from "./ISite";
import { IObservation } from "./IObservation";

export interface ILocation {
    locationId: number;
    siteId: number;
    name: string;
    sequence: number;
    latitude: number | undefined;
    longitude: number | undefined;
    altitude: number | undefined;
    site: ISite;
    observation: IObservation[];
}