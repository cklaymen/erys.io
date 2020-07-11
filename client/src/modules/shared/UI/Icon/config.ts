import Docker from "src/assets/images/icons/Docker.svg";
import GraphQL from "src/assets/images/icons/GraphQL.svg";
import Node from "src/assets/images/icons/Node.svg";
import React from "src/assets/images/icons/React.svg";

export const icons = { Docker, GraphQL, Node, React } as const;

export type IconType = keyof typeof icons;
