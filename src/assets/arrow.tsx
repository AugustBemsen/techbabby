import { SVGProps } from "react";

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={31}
    viewBox="0 0 30 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.0375 7.91251L25.625 15.5L18.0375 23.0875"
      stroke="#232323"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.375 15.5H25.4125"
      stroke="#232323"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ArrowLeft;
