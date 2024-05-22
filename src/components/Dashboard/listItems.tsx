import Link from "next/link";
import Icon from "../Icon";

type MenuItemType = {
  name: string;
  icon?: JSX.Element;
  path: string;
  disabled?: boolean;
};

type MenuItemProps = {
  item: MenuItemType;
};

const MenuItem = ({ item }: MenuItemProps) => {
  if (item.disabled) {
    return (
      <div className="relative flex">
        <div className="absolute left-0 top-0 h-full w-full bg-white/80"></div>
        <div className="flex h-14 items-center gap-3 px-4 py-3 transition-all duration-200 group-hover:rounded-full group-hover:bg-slate-200">
          <span className="text-2xl">{item?.icon}</span>
          <span className="text-xl">{item.name}</span>
        </div>
      </div>
    );
  }

  return (
    <Link href={item.path} className="group flex cursor-pointer">
      <div className="flex h-14 items-center gap-3 px-4 py-3 transition-all duration-200 group-hover:rounded-full group-hover:bg-slate-200">
        <span className="text-2xl">{item?.icon}</span>
        <span className="text-xl">{item.name}</span>
      </div>
    </Link>
  );
};

const MainListItems = () => {
  const menu: MenuItemType[] = [
    {
      name: "Dashboard",
      path: "dashboard",
      icon: <Icon name="home" />,
    },
    {
      name: "Orders",
      path: "",
      icon: <Icon name="bolt" />,
    },
    {
      name: "Messages",
      path: "",
      icon: <Icon name="messages" />,
      disabled: true,
    },
    {
      name: "My Profile",
      path: "profile",
      icon: <Icon name="account" />,
    },
    {
      name: "Settings",
      path: "",
      icon: <Icon name="settings" />,
      disabled: true,
    },
  ];
  return (
    <div>
      {menu.map((item: MenuItemType, index) => (
        <MenuItem item={item} key={index} />
      ))}
    </div>
  );
};

export default MainListItems;
