import { IContextualMenuItem } from "@fluentui/react/lib/ContextualMenu";
export function getMainMenuItems(
  setMenuItem: (menuitem: IContextualMenuItem) => void
): Array<IContextualMenuItem> {
  const setSelectedMenuItem = (event:any, menuitem:IContextualMenuItem):void => {
     setMenuItem(menuitem);
  };
  return [
    {
      key: "SysAdmin",
      text: "System Admin",
      title: "Global Admin Functions",
      subMenuProps: {
        items: [
          {
            key: "System Admins",
            text: "System Admins",
            title: "System Admins",
            onClick: setSelectedMenuItem,
           
          },
          {
            key: "System Settings",
            text: "System Settings",
            title: "System Settings",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Languages",
            text: "Languages",
            title: "Languages",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Labels",
            text: "Labels",
            title: "Labels",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Regions",
            text: "Regions",
            title: "Regions",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Region Admins",
            text: "Region Admins",
            title: "Region Admins",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Hierarchy",
            text: "Hierarchy",
            title: "Hierarchy",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Master Standards",
            text: "Master Standards",
            title: "Master Standards",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Master Rules",
            text: "Master Rules",
            title: "Master Rules",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Master Actions",
            text: "Master Actions",
            title: "Master Actions",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Azure Offices",
            text: "Azure Offices",
            title: "Azure Offices",
            onClick: setSelectedMenuItem,
          },
        ],
      },
    },
    {
      key: "Region Admin",
      text: "Regiona Admin",
      title: "Regional Admin Functions",
      subMenuProps: {
        items: [
          {
            key: "Sites",
            text: "Sites",
            title: "Sites",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Site Admins",
            text: "Site Admins",
            title: "Site Admins",
            onClick: setSelectedMenuItem,
          },
        ],
      },
    },
    {
      key: "Site Admin",
      text: "Site Admin",
      title: "Site Admin Funtions",
      subMenuProps: {
        items: [
          {
            key: "Companies",
            text: "Companies",
            title: "Companies",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Non Employees",
            text: "Non Employees",
            title: "Non Employees",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Site Locations",
            text: "Site Locations",
            title: "Site Locations",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Activity/Life Rules",
            text: "Activity/Life Rules",
            title: "Activity/Life Rules",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Sub-Activities",
            text: "Sub-Activities",
            title: "Sub-Activities",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Actions",
            text: "Actions",
            title: "Actions",
            onClick: setSelectedMenuItem,
          },
          {
            key: "Observations",
            text: "Observations",
            title: "Observations",
            onClick: setSelectedMenuItem,
          },
        ],
      },
    },
  ];
}
//  [
//   {
//     key: "SysAdmin",
//     text: "System Admin",
//     title: "Global Admin Functions",
//     subMenuProps: {
//       items: [
//         {
//           key: "System Admins",
//           text: "System Admins",
//           title: "System Admins",
//           onClick: x
//         },
//         {
//           key: "System Settings",
//           text: "System Settings",
//           title: "System Settings",
//         },
//         {
//           key: "Languages",
//           text: "Languages",
//           title: "Languages",
//         },
//         {
//           key: "Labels",
//           text: "Labels",
//           title: "Labels",
//         },
//         {
//           key: "Regions",
//           text: "Regions",
//           title: "Regions",
//         },
//         {
//           key: "Region Admins",
//           text: "Region Admins",
//           title: "Region Admins",
//         },
//         {
//           key: "Hierarchy",
//           text: "Hierarchy",
//           title: "Hierarchy",
//         },
//         {
//           key: "Master Standards",
//           text: "Master Standards",
//           title: "Master Standards",
//         },
//         {
//           key: "Master Rules",
//           text: "Master Rules",
//           title: "Master Rules",
//         },
//         {
//           key: "Master Actions",
//           text: "Master Actions",
//           title: "Master Actions",
//         },
//         {
//           key: "Azure Offices",
//           text: "Azure Offices",
//           title: "Azure Offices",
//         },
//       ],
//     },
//   },
//    {
//     key: "Region Admin",
//     text: "Regiona Admin",
//     title: "Regional Admin Functions",
//     subMenuProps: {
//       items: [
//         {
//           key: "Sites",
//           text: "Sites",
//           title: "Sites",
//         },
//         {
//           key: "Site Admins",
//           text: "Site Admins",
//           title: "Site Admins",
//         },
//       ],
//     },
//   },
//   {
//     key: "Site Admin",
//     text: "Site Admin",
//     title: "Site Admin Funtions",
//     subMenuProps: {
//       items: [
//         {
//           key: "Companies",
//           text: "Companies",
//           title: "Companies",
//         },
//         {
//           key: "Non Employees",
//           text: "Non Employees",
//           title: "Non Employees",
//         },
//         {
//           key: "Site Locations",
//           text: "Site Locations",
//           title: "Site Locations",
//         },
//         {
//           key: "Activity/Life Rules",
//           text: "Activity/Life Rules",
//           title: "Activity/Life Rules",
//         },
//         {
//           key: "Sub-Activities",
//           text:"Sub-Activities",
//           title: "Sub-Activities",
//         },
//         {
//           key: "Actions",
//           text:"Actions",
//           title: "Actions",
//         },
//         {
//           key: "Observations",
//           text:  "Observations",
//           title: "Observations",
//         },
//       ],
//     },
//   },
// ];
