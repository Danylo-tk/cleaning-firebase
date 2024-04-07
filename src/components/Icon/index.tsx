import Image from "next/image";

import homeIcon from "./icons/home.svg";
import accountIcon from "./icons/account.svg";
import boltIcon from "./icons/bolt.svg";
import followingIcon from "./icons/following.svg";
import messagesIcon from "./icons/messages.svg";
import savedIcon from "./icons/saved.svg";
import settingsIcon from "./icons/settings.svg";
import flagIcon from "./icons/flag.svg";
import expandMoreSmallIcon from "./icons/expandMoreSmall.svg";
import languageIcon from "./icons/language.svg";
import moreVertIcon from "./icons/moreVert.svg";

type IconProps = {
  name:
    | "home"
    | "account"
    | "bolt"
    | "following"
    | "messages"
    | "saved"
    | "flag"
    | "expandMoreSmall"
    | "language"
    | "moreVert"
    | "settings";
  size?: number;
};

const Icon = ({ name }: IconProps) => {
  return (
    <div className={`flex h-7 w-7 items-center justify-center`}>
      {iconTag(name)}
    </div>
  );
};

const iconTag = (name: string) => {
  if (name === "home") {
    return <Image src={homeIcon} alt="icon" />;
  } else if (name === "account") {
    return <Image src={accountIcon} alt="icon" />;
  } else if (name === "bolt") {
    return <Image src={boltIcon} alt="icon" />;
  } else if (name === "following") {
    return <Image src={followingIcon} alt="icon" />;
  } else if (name === "messages") {
    return <Image src={messagesIcon} alt="icon" />;
  } else if (name === "settings") {
    return <Image src={settingsIcon} alt="icon" />;
  } else if (name === "saved") {
    return <Image src={savedIcon} alt="icon" />;
  } else if (name === "flag") {
    return <Image src={flagIcon} alt="icon" />;
  } else if (name === "expandMoreSmall") {
    return <Image src={expandMoreSmallIcon} alt="icon" />;
  } else if (name === "language") {
    return <Image src={languageIcon} alt="icon" />;
  } else if (name === "moreVert") {
    return <Image src={moreVertIcon} alt="icon" />;
  }
};

export default Icon;
