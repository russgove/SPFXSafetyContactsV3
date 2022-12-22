import { IActions } from "./IActions";

export interface IMasterActions {
    masterActionId: number;
    masterActionDescription: string;
    actionCode: string;
    actions: IActions[];
}