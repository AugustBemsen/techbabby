import { SVGProps } from "react";

const OpenLink = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13 11.5L21.2 3.29999"
      stroke="#9E09A2"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 7.3V2.5H17.2"
      stroke="#9E09A2"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11 2.5H9C4 2.5 2 4.5 2 9.5V15.5C2 20.5 4 22.5 9 22.5H15C20 22.5 22 20.5 22 15.5V13.5"
      stroke="#9E09A2"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default OpenLink;
