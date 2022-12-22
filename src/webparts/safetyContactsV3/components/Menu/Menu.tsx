
import { IMenuProps } from './IMenuProps';

import { CommandBar } from '@fluentui/react/lib/CommandBar';
import * as React from 'react';

import { getMainMenuItems } from '../../../../utilities/menuItems';
import { IContextualMenuItem } from '@fluentui/react';
export function Menu(props: IMenuProps): JSX.Element {
const handleInputChange = (mi:IContextualMenuItem):void   =>{
  props.onSelected(mi)
  window.location.hash=mi.key;
};
  return (
    <CommandBar items={getMainMenuItems(handleInputChange)} />
  );

}

