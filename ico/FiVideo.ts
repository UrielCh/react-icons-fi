import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

export function FiVideo(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{"points":"23 7 16 12 23 17 23 7"}},{tag:"rect",attr:{x:"1",y:"5","width":"15","height":"14","rx":"2","ry":"2"},child:[]}]})(props);
}
export default FiVideo;
