import React from "react";
interface IFooterProps {
  copyright: string;
}
export default function footer(props: IFooterProps) {
  return (
    <div>
      footer
      <div>{props.copyright}</div>
    </div>
  );
}
