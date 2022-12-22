import { ILanguages } from "./ILanguages";
import { IMasterRule } from "./IMasterRule";
import { IStandard } from "./IStandard";
import { IObservation } from "./IObservation";

export interface IRule {
    ruleId: number;
    description: string;
    masterRuleId: number;
    standardId: number;
    sequence: number;
    language: string;
    languageNavigation: ILanguages;
    masterRule: IMasterRule;
    standard: IStandard;
    observation: IObservation[];
}