import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableList from './TableList';
import { Button, Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

import User1 from '../../images/user/user-01.png';

const UsersPage: React.FC = () => {
  const tableTitle = ['No', 'Foto', 'Nama', 'Email', 'Posisi', 'Status', 'Aksi'];

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
  ];

  const data = [
    {
      image: User1,
      name: 'Aldi Tegar Prakoso',
      email: 'alditegarprakoso@gmail.com',
      position: 'Fullstack Developer',
      status: 'Aktif',
    },
  ];

  const editPath = '/dashboard/users/edit';

  return (
    <>
      <Breadcrumb pageName="Daftar Pengguna" direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/users/add'}
        className="my-4"
        color="btnBlue"
      >
        Tambah Pengguna
      </Button>
      <TableList tableTitle={tableTitle} data={data} editPath={editPath} />
      <Pagination
        currentPage={1}
        totalPages={10}
        onChange={() => {}}
        onPageChange={() => {}}
        className="mt-4"
      />
    </>
  );
};

export default UsersPage;
