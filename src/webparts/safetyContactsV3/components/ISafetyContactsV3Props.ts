import { AadHttpClient } from '@microsoft/sp-http';
export interface ISafetyContactsV3Props {

  isDarkTheme: boolean;
  environmentMessage: string;
  hasTeamsContext: boolean;
  userDisplayName: string;
  description: string;
  client: AadHttpClient;
  webApiBaseUrl:string;
  webApiVersion:string;
}
