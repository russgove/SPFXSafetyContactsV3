import * as React from 'react';
import { AppContext } from '../AppContext';
import { ISysAdminsProps } from './ISysAdminsProps';
import { useEffect } from 'react';
import { deleteSC, fetchSC, fetchSCNextPage } from '../../../../utilities/ioMod';
import { DetailsList, IColumn, IDetailsRowProps } from '@fluentui/react/lib/DetailsList';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { CommandBar } from '@fluentui/react/lib/CommandBar';
import { SysAdmin } from './SysAdmin';
import { Panel, PanelType } from '@fluentui/react/lib/Panel';
import { IAdmins } from '../../../../models/db/IAdmins';
import { PanelMode } from '../../../../models/PanelMode';
import { IContextualMenuItem } from '@fluentui/react';
export function SysAdmins(props: ISysAdminsProps): JSX.Element {
  const initialApiPath="admins";
const [apiPath,setApiPath]=React.useState<string>(initialApiPath);
  const [sortBy, setSortBy] = React.useState<string>(null);
  const [sortDescending, setSortDescending] = React.useState<boolean>(false);
  const [nextLink, setNextLink] = React.useState<string>(null);
  const [selectedItem, setSelectedItem] = React.useState<IAdmins>(null);
  const [panelMode, setPanelMode] = React.useState<PanelMode>(null);
  const iconClass = mergeStyles({
    fontSize: 20,
    height: 20,
    width: 20,
    margin: '0 25px',
  });
  const [appContext, setAppContext] = React.useContext(AppContext);
  const [refreshDataFlag, setRefreshDataFlag] = React.useState<boolean>(false);
  const refreshData = (): void => {
    setRefreshDataFlag(!refreshDataFlag);
  }

  const [sysadmins, setSysadmins] = React.useState<Array<IAdmins>>([]);
  useEffect(() => {
    const loadData = async (): Promise<void> => {
      const res = await fetchSC(appContext,apiPath);

      setSysadmins(res.value);
      if (res.nextLink) {
        setNextLink(res.nextLink);
        res.value.push(null);//force missing item?
      } else {
        setNextLink(null)
      }

      console.log(res);


    };
    loadData();
  }, [refreshDataFlag]);
  const columnHeaderClicked = (ev: React.MouseEvent<HTMLElement>, column: IColumn): void => {
    debugger;
    if (sortBy === column.fieldName) {
      setSortDescending(!sortDescending);
    }
    else {
      setSortBy(column.fieldName);
    }
    if(!sortDescending){
      setApiPath(`${initialApiPath}?$orderBy=${column.fieldName}`)
    }else{
    setApiPath(`${initialApiPath}?$orderBy=${column.fieldName} desc`)
    }

    refreshData();

  }
  const cols: IColumn[] = [
    {
      key: "SysAdminEmail", minWidth: 20, name: "SysAdminEmail", fieldName: "SysAdminEmail", isResizable: true,
      isSorted: sortBy === "SysAdminEmail",
      isSortedDescending: sortDescending,
      sortAscendingAriaLabel: 'Sorted A to Z',
      sortDescendingAriaLabel: 'Sorted Z to A',
      onColumnClick: columnHeaderClicked
    }, {
      key: "SysAdminId", minWidth: 100, name: "SysAdminId", fieldName: "SysAdminId", isResizable: true,
      isSorted: sortBy === "SysAdminId",
      isSortedDescending: sortDescending,
      sortAscendingAriaLabel: 'Sorted low to high',
      sortDescendingAriaLabel: 'Sorted hi to low',
      onColumnClick: columnHeaderClicked
    }
    , {
      key: "Commands", minWidth: 420, name: "Commands", fieldName: "Commands", isResizable: true,
      onRender(item: IAdmins, index, column) {
        return (
          <>
            <FontIcon aria-label="Edit" iconName="Edit" className={iconClass}
              onClick={(a) => { setSelectedItem(item); setPanelMode(PanelMode.Edit) }}
            />

            <FontIcon aria-label="View" iconName="View" className={iconClass}
              onClick={(a) => { deleteSC(appContext, "admins", item.SysAdminId) }}
            />
            <FontIcon aria-label="Delete" iconName="Delete" className={iconClass}
              onClick={(a) => {

                deleteSC(appContext, "admins", item.SysAdminId);
                refreshData();
              }} />
          </>
        )
      },
    }
  ]
  const menuItems: IContextualMenuItem[] = [
    {
      key: "Add",
      text: "Add",
      title: "Add",
      iconProps: { iconName: 'Add' },
      onClick: (a) => { setSelectedItem(null); setPanelMode(PanelMode.Add) }
    },
    {
      key: "Refresh",
      text: "Refresh",
      title: "Refresh",
      iconProps: { iconName: 'Refresh' },
      onClick: (a) => { refreshData(); }

    }];

  return (
    <div >
      <CommandBar items={menuItems} />
      <Panel type={PanelType.medium} isOpen={panelMode !== null}
        onDismiss={() => { setSelectedItem(null); setPanelMode(null); }}
      >
        <SysAdmin selectedItem={selectedItem} setSelectedItem={setSelectedItem} panelMode={panelMode} setPanelMode={setPanelMode} refreshData={refreshData} />
      </Panel>
      <DetailsList columns={cols} items={sysadmins} onRenderMissingItem={(index?: number, rowProps?: IDetailsRowProps): React.ReactNode => {
        fetchSCNextPage(appContext, nextLink, setNextLink, sysadmins, setSysadmins)
        return (
          <div>Loading...</div>
        )
      }} />

      {nextLink}
    </div>

  );

}



