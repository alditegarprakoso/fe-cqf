import React from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import TableList from './TableList';
import { Button, Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

const CategoryDonation: React.FC = () => {
  const tableTitle = ['No', 'Kategori', 'Deskripsi', 'Icon', 'Aksi'];

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
  ];

  const data = [
    {
      name: 'Kemanusiaan',
      description: 'Kategori ini untuk donasi panti',
      icon: 'HumanCategoryIcon',
    },
  ];

  const editPath = '/dashboard/donation/category/edit';

  return (
    <>
      <Breadcrumb pageName="Daftar Kategori Donasi" direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/donation/category/add'}
        className="my-4"
        color="btnBlue"
      >
        Buat Kategori Baru
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

export default CategoryDonation;
