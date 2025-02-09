import React, { ReactNode } from 'react';

const ContainerHome: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-full sm:px-4 md:px-4 lg:px-[120px]">{children}</div>;
};

export default ContainerHome;
