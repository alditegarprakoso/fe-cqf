const DateIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill={props.color ? props.color : props.active ? '#389ED9' : '#636363'}
      d="M15.5 2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4V0h2v2h6V0h2v2Zm3 8h-16v8h16v-8Zm-5-6h-6v2h-2V4h-3v4h16V4h-3v2h-2V4Zm-9 8h2v2h-2v-2Zm5 0h2v2h-2v-2Zm5 0h2v2h-2v-2Z"
    />
  </svg>
);
export default DateIcon;
