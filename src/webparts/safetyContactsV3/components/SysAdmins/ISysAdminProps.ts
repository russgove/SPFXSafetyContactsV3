import { IContextualMenuItem } from "@fluentui/react/lib/ContextualMenu";
import { IAdmins } from "../../../../models/db/IAdmins";
import { IContext } from "../../../../models/IContext";
import { PanelMode } from "../../../../models/PanelMode";
export interface ISysAdminProps {
  selectedItem: IAdmins;
  panelMode: PanelMode;
  setSelectedItem: (x: IAdmins) => void;
  setPanelMode: (x: PanelMode) => void;
  refreshData: () => void;
}
