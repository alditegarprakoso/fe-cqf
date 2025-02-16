import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableList from '../../components/Tables/TableList';
import { Button, Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

const Donation: React.FC = () => {
  const tableTitle = [
    'No',
    'Donasi',
    'Kategori',
    'Donasi Terkumpul',
    'Status',
    'Aksi',
  ];
  return (
    <>
      <Breadcrumb pageName="Daftar Donasi" />
      <Button
        as={Link}
        to={'/dashboard/donation/new'}
        className="my-4"
        color="btnBlue"
      >
        Buat Donasi Baru
      </Button>
      <TableList tableTitle={tableTitle} />
      <Pagination
        currentPage={1}
        totalPages={10}
        onChange={() => {}}
        onPageChange={() => {}}
      />
    </>
  );
};

export default Donation;
