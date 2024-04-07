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
    <div className="group flex">
      <div className="flex h-14 items-center gap-3 px-4 py-3 transition-all duration-200 group-hover:rounded-full group-hover:bg-slate-200">
        <span className="text-2xl">{item?.icon}</span>
        <span className="text-xl">{item.name}</span>
      </div>
    </div>
  );
};

const MainListItems = () => {
  const menu: MenuItemType[] = [
    {
      name: "Feed",
      path: "",
      icon: <Icon name="home" />,
    },
    {
      name: "My Profile",
      path: "",
      icon: <Icon name="account" />,
      disabled: true,
    },
    {
      name: "Messages",
      path: "",
      icon: <Icon name="messages" />,
      disabled: true,
    },
    {
      name: "Quotes",
      path: "",
      icon: <Icon name="bolt" />,
      disabled: true,
    },
    {
      name: "Following",
      path: "",
      icon: <Icon name="following" />,
      disabled: true,
    },
    {
      name: "Saved",
      path: "",
      icon: <Icon name="saved" />,
      disabled: true,
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
