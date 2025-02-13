const AllCategoryIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill={props.color ? props.color : props.active ? '#389ED9' : '#636363'}
      d="M5.2 9.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm.5 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Zm10-10a4.5 4.5 0 1 1 0-9.001 4.5 4.5 0 0 1 0 9.001Zm0 10a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9ZM5.2 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm10-10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </svg>
);
export default AllCategoryIcon;
