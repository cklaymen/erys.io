import { ReactComponent as Docker } from "src/assets/images/icons/Docker.svg";
import { ReactComponent as GraphQL } from "src/assets/images/icons/GraphQL.svg";
import { ReactComponent as Node } from "src/assets/images/icons/Node.svg";
import { ReactComponent as React } from "src/assets/images/icons/React.svg";
import { ReactComponent as Fb } from "src/assets/images/icons/Fb.svg";
import { ReactComponent as Instagram } from "src/assets/images/icons/Instagram.svg";
import { ReactComponent as LinkedIn } from "src/assets/images/icons/Linkedin.svg";
import { ReactComponent as Mail } from "src/assets/images/icons/Mail.svg";
import { ReactComponent as Phone } from "src/assets/images/icons/Phone.svg";
import { ReactComponent as Menu } from "src/assets/images/icons/Menu.svg";
import { ReactComponent as About } from "src/assets/images/icons/About.svg";
import { ReactComponent as Services } from "src/assets/images/icons/Services.svg";
import { ReactComponent as Works } from "src/assets/images/icons/Works.svg";
import { ReactComponent as Close } from "src/assets/images/icons/Close.svg";

export const icons = {
  Docker,
  GraphQL,
  Node,
  React,
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
