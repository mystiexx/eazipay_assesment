import SettingIcon from "../assets/icons/settingsIcon";
import SupportIcon from "../assets/icons/supportIcon";
import BookIcon from "../assets/icons/bookIcon";
import QuickLoanIcon from "../assets/icons/quickLoanIcon";
import ComplianceIcon from "../assets/icons/complianceIcon";
import AddEmployeeIcon from "../assets/icons/addEmployeeIcon";
import PayrollIcon from "../assets/icons/payrollIcon";
import WalletIcon from "../assets/icons/walletIcon";
import DashboardIcon from "../assets/icons/dashboardIcon";
import { Act } from "./types";

export const activities: Act[] = [
  {
    date: "Wednesday, November 09, 2022",
    activity: [
      {
        title: "payroll",
        name: "Badmus Kemis",
        first_name: "Badmus",
        last_name: "Kemis",
        activity: "Paid November 2022 salary",
        employee: 52,
        time: "16:15",
      },
      {
        title: "employee management",
        name: "Kalu Abasiama",
        first_name: "Kalu",
        last_name: "Abasiama",
        activity: "Added new employee",
        employee: "04",
      },
    ],
  },
  {
    date: "Friday, November 04, 2022",
    activity: [
      {
        title: "bonus",
        name: "Badmus Kemis",
        first_name: "Badmus",
        last_name: "Kemis",
        activity: "Added new bonus",
        bonus: "XMAS Bonus",
      },
      {
        title: "wallet",
        name: "Badmus Kemis",
        first_name: "Badmus",
        last_name: "Kemis",
        activity: "Paid November 2022, salary",
        amount: "N11,1678,900.00",
        time: "15:31",
      },
    ],
  },
];

export const navs = [
  {
    name: "dashboard",
    to: "/dashboard",
    icon: <DashboardIcon color="#515251" />,
    iconActive: <DashboardIcon color="#11453b" />,
  },
  {
    name: "wallet",
    to: "/wallet",
    icon: <WalletIcon color="#515251" />,
    iconActive: <WalletIcon color="#11453b" />,
  },
  {
    name: "employee management",
    others: [
      {
        name: "other",
        to: "/employee",
      },
    ],
    icon: <AddEmployeeIcon color="#515251" />,
    iconActive: <AddEmployeeIcon color="#11453b" />,
  },
  {
    name: "payroll",
    others: [
      {
        name: "other",
        to: "/payroll",
      },
    ],
    icon: <PayrollIcon />,
    iconActive: <PayrollIcon color="#11453b" />,
  },
  {
    name: "compliance",
    others: [
      {
        name: "other",
        to: "/compliance",
      },
    ],
    icon: <ComplianceIcon />,
    iconActive: <ComplianceIcon color="#11453b" />,
  },
  {
    name: "quick loan",
    others: [
      {
        name: "other",
        to: "/loan",
      },
    ],
    icon: <QuickLoanIcon />,
    iconActive: <QuickLoanIcon color="#11453b" />,
  },
  {
    name: "book keeping",
    others: [
      {
        name: "other",
        to: "/book",
      },
    ],
    icon: <BookIcon />,
    iconActive: <BookIcon color="#11453b" />,
  },
];

export const other_navs = [
  {
    id: 200,
    name: "support",
    to: "/support",
    icon: <SupportIcon />,
    iconActive: <SupportIcon color="#11453b" />,
  },
  {
    id: 230,
    name: "settings",
    others: [
      {
        name: "others",
        to: "/settings",
      },
    ],
    icon: <SettingIcon />,
    iconActive: <SettingIcon color="#11453b" />,
  },
];
