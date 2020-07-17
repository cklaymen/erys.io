import Application from "src/assets/images/illustrations/Applications.svg";
import Programming from "src/assets/images/illustrations/Programming.svg";
import Server from "src/assets/images/illustrations/Server.svg";
import Checklist from "src/assets/images/illustrations/Checklist.svg";
import Developer from "src/assets/images/illustrations/Developer.svg";
import DoneApp from "src/assets/images/illustrations/DoneApp.svg";
import Project from "src/assets/images/illustrations/Project.svg";

export const illustrations = {
  Application,
  Programming,
  Server,
  Checklist,
  Developer,
  DoneApp,
  Project,
} as const;

export type IllustrationType = keyof typeof illustrations;
