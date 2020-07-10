import Application from "src/assets/images/illustrations/Applications.svg";
import Programming from "src/assets/images/illustrations/Programming.svg";
import Server from "src/assets/images/illustrations/Server.svg";

export const illustrations = { Application, Programming, Server } as const;

export type IllustrationType = keyof typeof illustrations;
