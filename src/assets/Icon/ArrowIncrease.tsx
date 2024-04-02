export const ArrowIncrease = ({className,stroke}:{className:any,stroke}) => {
  return (
    <svg
      className={className}
      width="8"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 7L7 1M7 1H1.6M7 1V6.4"
        stroke={stroke}
        stroke-width="1.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
