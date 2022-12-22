import { useEffect, useContext, useState, createContext, useRef } from "react";
import { AadHttpClient } from "@microsoft/sp-http";
import { IContextualMenuItem } from "@fluentui/react/lib/ContextualMenu";
export interface IAppContext {
  client: AadHttpClient;
  webApiBaseUrl: string;
  webApiVersion: string;
  selectedMenuItem?: IContextualMenuItem;
}

export const AppContext = createContext(null);
