import { SVGProps } from "react";

const Toggle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M3.75 8.75H26.25H3.75Z" fill="#9E09A2" />
    <path
      d="M3.75 8.75H26.25"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path d="M3.75 15H26.25H3.75Z" fill="#9E09A2" />
    <path
      d="M3.75 15H26.25"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path d="M3.75 21.25H26.25H3.75Z" fill="#9E09A2" />
    <path
      d="M3.75 21.25H26.25"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);
export default Toggle;
