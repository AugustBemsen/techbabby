import { SVGProps } from "react";

const Close = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5Z"
      stroke="#232323"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.4624 18.5375L18.5374 11.4625"
      stroke="#232323"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5374 18.5375L11.4624 11.4625"
      stroke="#232323"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default Close;
