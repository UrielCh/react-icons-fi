import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CornerLeftUp icon from Feather
 * @module
 */
export function FiCornerLeftUp(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{"points":"14 9 9 4 4 9"}},{tag:"path",attr:{d:"M20 20h-7a4 4 0 0 1-4-4V4"},child:[]}]})(props);
}
export default FiCornerLeftUp;
