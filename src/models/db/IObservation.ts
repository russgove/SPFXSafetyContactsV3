import { IActions } from "./IActions";
import { ILocation } from "./ILocation";
import { IObservee } from "./IObservee";
import { IRule } from "./IRule";
import { IObservationAction } from "./IObservationAction";

export interface IObservation {
    observationId: number;
    observerEmail: string;
    observationDate: string;
    observeeId: number;
    ruleId: number;
    actionId: number;
    comments: string;
    locationId: number;
    observationDateFilter: number | undefined;
    secondObserverEmail: string;
    timestamp: string;
    supervisor1Email: string;
    supervisor2Email: string;
    supervisor3Email: string;
    recordedBy: string;
    action: IActions;
    location: ILocation;
    observee: IObservee;
    rule: IRule;
    observationAction: IObservationAction[];
}