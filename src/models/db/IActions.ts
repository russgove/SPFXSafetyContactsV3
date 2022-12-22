import { ILanguages } from "./ILanguages";
import { IMasterActions } from "./IMasterActions";
import { ISite } from "./ISite";
import { IObservation } from "./IObservation";
import { IObservationAction } from "./IObservationAction";

export interface IActions {
    actionId: number;
    description: string;
    siteId: number;
    masterActionId: number;
    sequence: number;
    language: string;
    languageNavigation: ILanguages;
    masterAction: IMasterActions;
    site: ISite;
    observation: IObservation[];
    observationAction: IObservationAction[];
}