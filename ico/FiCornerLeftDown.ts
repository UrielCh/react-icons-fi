import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CornerLeftDown icon from Feather
 * @module
 */
export function FiCornerLeftDown(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"14 15 9 20 4 15"}},{tag:"path",attr:{d:"M20 4h-7a4 4 0 0 0-4 4v12"},child:[]}]})(props);
}
export default FiCornerLeftDown;
