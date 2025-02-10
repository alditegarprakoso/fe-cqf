const WakafIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={18}
    fill="none"
    {...props}
  >
    <path
      fill={props.active ? '#389ED9' : '#636363'}
      d="M4.9 0a7.002 7.002 0 0 1 6.913 5.895A6.48 6.48 0 0 1 16.4 4h4.5v2.5a6.5 6.5 0 0 1-6.5 6.5h-2.5v5h-2v-8h-2a7 7 0 0 1-7-7V0h4Zm14 6h-2.5a4.5 4.5 0 0 0-4.5 4.5v.5h2.5a4.5 4.5 0 0 0 4.5-4.5V6Zm-14-4h-2v1a5 5 0 0 0 5 5h2V7a5 5 0 0 0-5-5Z"
    />
  </svg>
);
export default WakafIcon;
