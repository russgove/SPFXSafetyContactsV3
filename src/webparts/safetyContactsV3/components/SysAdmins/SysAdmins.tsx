import * as React from 'react';
import { AppContext } from '../AppContext';
import { ISysAdminsProps } from './ISysAdminsProps';
import { useEffect } from 'react';
import { deleteSC, fetchSC } from '../../../../utilities/ioMod';
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
      const res = await fetchSC(appContext, "admins");

      setSysadmins(res.value);
      if (res.nextLink) {
        setNextLink(res.nextLink);
        res.value.push(null);//force missing item?
      } else{
        setNextLink(null)
     }

      console.log(res);


    };
    loadData();
  }, [refreshDataFlag]);
  const cols: IColumn[] = [
    {
      key: "SysAdminEmail", minWidth: 20, name: "SysAdminEmail", fieldName: "SysAdminEmail", isResizable: true,
    }, {
      key: "SysAdminId", minWidth: 100, name: "SysAdminId", fieldName: "SysAdminId", isResizable: true
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
        debugger;
console.log('loading nor')
        //Set the skip token based on the nextlink
        const linkparts=nextLink.split('?');
        const next=`admins?${linkparts[1]}`
        fetchSC(appContext, next).then(res => {
          debugger;
          const x = sysadmins;
          x.pop();
          for (const item of res.value) {
            x.push(item);
          }
          setSysadmins(x);
          if (res.nextLink) {
            setNextLink(res.nextLink);
            x.push(null);//force missing item?
          }
          else{
             setNextLink(null)
          }
          setSysadmins(x);
        });
        return (
          <div>Loading...</div>
        )
        // (index?: number, rowProps?: IDetailsRowProps) => React.ReactNode
      }} />

      {nextLink}
    </div>

  );

}



