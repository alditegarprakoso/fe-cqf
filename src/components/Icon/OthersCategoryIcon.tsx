const OthersCategoryIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={6}
    fill="none"
    {...props}
  >
    <path
      fill={props.active ? '#389ED9' : '#636363'}
      d="M12.8 5.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm-9.75 0a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Zm19.5 0a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
    />
  </svg>
);
export default OthersCategoryIcon;
