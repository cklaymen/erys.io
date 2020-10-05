const pathVariables = {
  slug: ":slug",
} as const;

export type PathVariables = typeof pathVariables;

export type PathVariable = PathVariables[keyof PathVariables];

export default pathVariables;
