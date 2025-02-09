import React, { ReactNode } from 'react';

const ContainerHome: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-full lg:px-[120px]">{children}</div>;
};

export default ContainerHome;
