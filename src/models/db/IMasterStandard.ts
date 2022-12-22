import { IMasterRule } from "./IMasterRule";
import { IStandard } from "./IStandard";

export interface IMasterStandard {
    masterStandardId: number;
    description: string;
    allowMultilpe: boolean | undefined;
    masterRule: IMasterRule[];
    standard: IStandard[];
}