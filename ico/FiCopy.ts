import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Copy icon from Feather
 * @module
 */
export function FiCopy(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"9",y:"9","width":"13","height":"13","rx":"2","ry":"2"}},{tag:"path",attr:{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"},child:[]}]})(props);
}
export default FiCopy;
