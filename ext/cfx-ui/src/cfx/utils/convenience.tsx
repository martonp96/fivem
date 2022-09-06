import React from "react";

export function renderedIf<Props = {}>(precondition: () => boolean, Component: React.FC<Props>) {
  return (props: Props) => {
    if (!precondition()) {
      return null;
    }

    return (
      <Component {...props} />
    );
  };
}
