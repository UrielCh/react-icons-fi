import { GenIcon, type IconBaseProps } from "https://deno.land/x/react_icons@1.0.0/mod.ts";

export function FiArrowDown(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{"x1":"12","y1":"5","x2":"12","y2":"19"}},{tag:"polyline",attr:{"points":"19 12 12 19 5 12"}}]})(props);
}
