import React from "react"
import {
    Dashboard as DashboardIcon,
    Apps as SystemIcon,
    Timer as RentalIcon,
    GroupAdd as ApprovalIcon,
    People as PeopleIcon,
    DirectionsBike as AssetIcon,
    Alarm as AlarmIcon,
    Dns as GuideIcon,
    Archive as ArchiveIcon,
    AttachMoney as PayoutIcon,
    Help as HelpIcon
} from "@material-ui/icons/"

export default function SideBarItems() {
  const sideBarItems = [
    {
      id: 1,
      name: "Dashboard",
      icon: <DashboardIcon/>,
      more: false,
    },
    {
      id: 2,
      name: "System",
      icon: <SystemIcon/>,
      more: true,
    },
    {
      id: 3,
      name: "Rentals",
      icon: <RentalIcon/>,
      more: false,
    },
    {
      id: 4,
      name: "Approval List",
      icon: <ApprovalIcon/>,
      more: true,
    },
    {
      id: 5,
      name: "User Management",
      icon: <PeopleIcon/>,
      more: true,
    },
    {
      id: 6,
      name: "Asset Management",
      icon: <AssetIcon/>,
      more: true,
    },
    {
      id: 7,
      name: "Alarms",
      icon: <AlarmIcon/>,
      more: true,
    },
    {
      id: 8,
      name: "Guide Screens",
      icon: <GuideIcon/>,
      more: true,
    },
    {
      id: 9,
      name: "Archived Data",
      icon: <ArchiveIcon/>,
      more: true,
    },
    {
      id: 10,
      name: "Payouts",
      icon: <PayoutIcon/>,
      more: false,
    },
    {
      id: 11,
      name: "Need Help?",
      icon: <HelpIcon/>,
      more: false,
    },
  ];
  return sideBarItems;
}
