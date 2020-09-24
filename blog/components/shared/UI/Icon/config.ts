import { ReactComponent as Fb } from "assets/images/icons/Fb.svg";
import { ReactComponent as Instagram } from "assets/images/icons/Instagram.svg";
import { ReactComponent as LinkedIn } from "assets/images/icons/Linkedin.svg";
import { ReactComponent as Mail } from "assets/images/icons/Mail.svg";
import { ReactComponent as Phone } from "assets/images/icons/Phone.svg";
import { ReactComponent as Menu } from "assets/images/icons/Menu.svg";
import { ReactComponent as About } from "assets/images/icons/About.svg";
import { ReactComponent as Services } from "assets/images/icons/Services.svg";
import { ReactComponent as Works } from "assets/images/icons/Works.svg";
import { ReactComponent as Close } from "assets/images/icons/Close.svg";

export const icons = {
  Fb,
  Instagram,
  LinkedIn,
  Mail,
  Phone,
  Menu,
  About,
  Services,
  Works,
  Close,
} as const;

export type IconType = keyof typeof icons;
