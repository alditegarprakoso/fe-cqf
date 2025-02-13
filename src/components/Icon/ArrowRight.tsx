const ArrowRight = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill={props.color ? props.color : '#389ED9'}
      d="m7.354 2.817 2.828 2.828a.5.5 0 0 1 0 .707L7.353 9.181a.5.5 0 0 1-.707-.707l1.975-1.975H2a.5.5 0 1 1 0-1h6.621L6.646 3.524a.5.5 0 1 1 .708-.707Z"
    />
  </svg>
);
export default ArrowRight;
