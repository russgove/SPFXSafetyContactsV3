import { IMasterStandard } from "./IMasterStandard";
import { IRule } from "./IRule";

export interface IMasterRule {
    masterRuleId: number;
    description: string;
    masterStandardId: number;
    ruleNumber: string;
    masterStandard: IMasterStandard;
    rule: IRule[];
}