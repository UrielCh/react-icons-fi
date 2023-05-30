import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function FiFrown(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{"cx":"12","cy":"12","r":"10"}},{tag:"path",attr:{d:"M16 16s-1.5-2-4-2-4 2-4 2"}},{tag:"line",attr:{"x1":"9","y1":"9","x2":"9.01","y2":"9"}},{tag:"line",attr:{"x1":"15","y1":"9","x2":"15.01","y2":"9"}}]})(props);
}
