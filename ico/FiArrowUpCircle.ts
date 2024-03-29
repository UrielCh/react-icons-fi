import { GenIcon, type IconBaseProps } from "../deps.ts";

export function FiArrowUpCircle(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"polyline",attr:{"points":"16 12 12 8 8 12"}},{tag:"line",attr:{"x1":"12","y1":"16","x2":"12","y2":"8"}}]})(props);
}
export default FiArrowUpCircle;
