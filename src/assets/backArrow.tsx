import { SVGProps } from "react";

const BackArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M18.7498 24.9L10.5998 16.75C9.6373 15.7875 9.6373 14.2125 10.5998 13.25L18.7498 5.09998"
      stroke="#292D32"
      strokeWidth={1.5}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default BackArrow;
