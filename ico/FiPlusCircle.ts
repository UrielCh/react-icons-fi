import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function FiPlusCircle(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"line",attr:{"x1":"12","y1":"8","x2":"12","y2":"16"}},{tag:"line",attr:{"x1":"8","y1":"12","x2":"16","y2":"12"}}]})(props);
}