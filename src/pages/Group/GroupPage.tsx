import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableList from './TableList';
import { Button, Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

import LogoCQF from '../../images/logo/logo.png';

const GroupPage: React.FC = () => {
  const tableTitle = [
    'No',
    'Logo',
    'Nama',
    'Status',
    'Aksi',
  ];

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
  ];

  const data = [
    {
      image: LogoCQF,
      name: 'Cinta Quran Foundation',
      status: 'Aktif',
    },
  ];

  const editPath = '/dashboard/group/edit';

  return (
    <>
      <Breadcrumb pageName="Daftar Group" direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/group/add'}
        className="my-4"
        color="btnBlue"
      >
        Tambah Group
      </Button>
      <TableList
        tableTitle={tableTitle}
        data={data}
        editPath={editPath}
      />
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

export default GroupPage;
