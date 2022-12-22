import { IActions } from "./IActions";
import { IObservation } from "./IObservation";

export interface IObservationAction {
    observationActionId: number;
    observationId: number;
    actionId: number;
    action: IActions;
    observation: IObservation;
}