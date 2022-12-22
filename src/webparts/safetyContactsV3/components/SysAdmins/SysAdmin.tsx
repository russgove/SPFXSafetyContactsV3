import * as React from 'react';
import { AppContext } from '../AppContext';
import { ISysAdminProps } from './ISysAdminProps';
import { useEffect } from 'react';
import { fetchSC, patchSC, postSC } from '../../../../utilities/ioMod';
import { DetailsList, IColumn } from '@fluentui/react/lib/DetailsList';
import { FontIcon } from '@fluentui/react/lib/Icon';
import { mergeStyles } from '@fluentui/react/lib/Styling';
import { CommandBar } from '@fluentui/react/lib/CommandBar';
import { IAdmins } from '../../../../models/db/IAdmins';
import { TextField } from '@fluentui/react/lib/TextField';
import { IContextualMenuItem } from '@fluentui/react';
import { PanelMode } from '../../../../models/PanelMode';
export function SysAdmin(props: ISysAdminProps): JSX.Element {
    debugger;
    const [tempItem, setTempItem] = React.useState<IAdmins>(null);
    useEffect(() => {
        debugger;
        if (props.panelMode === PanelMode.Add) {
            setTempItem({});
        }
        else {
            setTempItem(props.selectedItem);
        }
    }, [])
    const iconClass = mergeStyles({
        fontSize: 20,
        height: 20,
        width: 20,
        margin: '0 25px',
    });
    const [appContext, setAppContext] = React.useContext(AppContext);
   
    const menuItems: IContextualMenuItem[] = [];
    if (props.panelMode === PanelMode.Edit || props.panelMode === PanelMode.Add) {
        menuItems.push(
            {
                key: "Save",
                text: "Save",
                title: "Save",
                iconProps: { iconName: 'Save' },
                onClick: (ev, item) => {
                    debugger;
                    if (props.panelMode === PanelMode.Edit) {
                        patchSC(appContext, "admins", tempItem, tempItem.SysAdminId)
                            .then(() => {
                                props.setPanelMode(null);
                                props.setSelectedItem(null);
                                props.refreshData();
                            })
                            .catch((e) => {
                                debugger;
                            });
                    }
                    if (props.panelMode === PanelMode.Add) {
                        postSC(appContext, "admins", tempItem)
                            .then(() => {
                                props.setPanelMode(null);
                                props.setSelectedItem(null);
                                props.refreshData();
                            })
                            .catch((e) => {
                                debugger;
                            });
                    }

                    return;
                }
            })
    }
    menuItems.push(
        {
            key: "Cancel",
            text: "Cancel",
            title: "Cancel",
            iconProps: { iconName: 'Cancel' },
            onClick: () => { props.setPanelMode(null); props.setSelectedItem(null); }

        });
   
    if (!tempItem) {
        return (<></>);
    }
    console.log(tempItem);



    return (
        <div >
            <CommandBar items={menuItems} />
            {props.panelMode} Panel
            <TextField label='SysAdminId'
                readOnly={true}
                name='SysAdminId'
                value={tempItem?.SysAdminId?.toString()}

            />
            <TextField label='SysAdminEmail'
                readOnly={props.panelMode === PanelMode.Display}
                name='SysAdminEmail'
                value={tempItem?.SysAdminEmail}
                onChange={(e, newValue) => {
                
                    setTempItem({ ...tempItem, SysAdminEmail: newValue })
                }
                }
            />
        </div>

    );



}
