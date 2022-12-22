import { IActions } from "./IActions";
import { IRule } from "./IRule";
import { IStandard } from "./IStandard";

export interface ILanguages {
    language: string;
    sequence: number;
    languageName: string;
    actions: IActions[];
    rule: IRule[];
    standard: IStandard[];
}