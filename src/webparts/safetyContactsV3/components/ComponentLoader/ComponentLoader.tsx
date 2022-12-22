

import * as React from 'react';
import styles from '../SafetyContactsV3.module.scss';

import {IComponentLoaderProps} from './IComponentLoaderProps';

import {SysAdmins} from '../SysAdmins/SysAdmins';
import { AppContext } from '../AppContext';
export function ComponentLoader(props: IComponentLoaderProps): JSX.Element {

  const [appContext,setAppContext]=React.useContext(AppContext);
  if (!props.selectedMenuItem) return (
    <div>No menu item selected</div> 
  );

  switch (props.selectedMenuItem.key) {
    case "System Admins":
      return <SysAdmins />;
      break;
      case "System Settings":
      return <div>Settings</div>;
      break;
    case "Regions":
      return <div>Regions</div>;
      break;
    default:
      return <div> invalid</div>;

  }


}

