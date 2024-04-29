import { ReactNode } from "react";

export default function Layout({children} : Props) {
  return (
    <div>
      {children}
    </div>
  );
}

export interface Props {
  readonly children: ReactNode;
}