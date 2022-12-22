import { AadHttpClient } from "@microsoft/sp-http";
import { IContextualMenuItem } from "@fluentui/react/lib/ContextualMenu";
export interface IContext{
    client: AadHttpClient;
  webApiBaseUrl:string;
  webApiVersion:string;
  selectedMenuItem?:IContextualMenuItem;
}
