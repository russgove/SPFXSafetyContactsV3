import * as React from 'react';
import styles from './SafetyContactsV3.module.scss';
import { ISafetyContactsV3Props } from './ISafetyContactsV3Props';
import { escape } from '@microsoft/sp-lodash-subset';

import { useEffect, useContext, useState, createContext, useRef } from 'react';
import { IContext } from '../../../models/IContext';



import { Menu } from './Menu/Menu';
import { ComponentLoader } from './ComponentLoader/ComponentLoader';
import { fetchSC } from '../../../utilities/ioMod';
import { ContextualMenu } from 'office-ui-fabric-react/lib/ContextualMenu';
import { IContextualMenuItem } from "@fluentui/react/lib/ContextualMenu";
import { ITheme, mergeStyleSets, getTheme, getFocusStyle, List, ImageFit, Image } from '@fluentui/react';
import { AppContext, IAppContext } from './AppContext';
import { Test } from './Test/Test';

export default function SafetyContactsV3(props: ISafetyContactsV3Props):JSX.Element {
  const [selectedMenuItem, setSelectedMenuItem] = useState<IContextualMenuItem>(null);
  const [context, setContext] = useState<IContext>({ client: props.client, webApiBaseUrl: props.webApiBaseUrl, webApiVersion: props.webApiVersion });

  // useEffect(() => {  }, [selectedMenuItem]);
  return (
    <div className={styles.safetyContactsV3}>
      <AppContext.Provider value={[context, setContext]}>
        <Menu onSelected={setSelectedMenuItem} />
        <ComponentLoader selectedMenuItem={selectedMenuItem} />

      </AppContext.Provider>
      Selected menu itenm is {selectedMenuItem ? selectedMenuItem.key : "nada"}
    </div>
  );
}

