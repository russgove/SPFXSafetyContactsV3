import { ILanguages } from "./ILanguages";
import { IMasterStandard } from "./IMasterStandard";
import { ISite } from "./ISite";
import { IRule } from "./IRule";

export interface IStandard {
    standardId: number;
    siteId: number;
    sequence: number;
    description: string;
    masterStandardId: number;
    language: string;
    languageNavigation: ILanguages;
    masterStandard: IMasterStandard;
    site: ISite;
    rule: IRule[];
}