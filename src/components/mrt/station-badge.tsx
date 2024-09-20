import { DetailedHTMLProps, FC } from "react";

type StationBadgeProps = {
  code: string;
} & DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const bgColor = {
  EW: "#009646",
  CG: "#009646",
  NS: "#df2827",
  NE: "#9a00ab",
  CC: "#fa9e0d",
  CE: "#fa9e0d",
  DT: "#0056b8",
  TE: "#9d5818",
  BP: "#708270",
  PTC: "#708270",
  PE: "#708270",
  PW: "#708270",
  STC: "#708270",
  SE: "#708270",
  SW: "#708270",
};

const textColor = {
  EW: "#ffffff",
  CG: "#ffffff",
  NS: "#ffffff",
  NE: "#ffffff",
  CC: "#000000",
  CE: "#000000",
  DT: "#ffffff",
  TE: "#ffffff",
  BP: "#ffffff",
  PTC: "#ffffff",
  PE: "#ffffff",
  PW: "#ffffff",
  STC: "#ffffff",
  SE: "#ffffff",
  SW: "#ffffff",
};

export const StationBadge: FC<StationBadgeProps> = ({ code, className, style, ...props }) => {
  const lineCode = code.match(/^[A-Z]+/)?.[0];
  if (!lineCode) return null;
  return <span
    {...props}
    className={`rounded-lg font-semibold text-xs px-2 py-1 ${className ?? ""}`}
    style={{
      backgroundColor: bgColor[lineCode as keyof typeof bgColor],
      color: textColor[lineCode as keyof typeof textColor],
      ...style
    }}
  >
    {code}
  </span>;
};