import React from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import TableList from './TableList';
import { Button, Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

const CategoryKajian: React.FC = () => {
  const tableTitle = ['No', 'Kategori', 'Deskripsi', 'Icon', 'Aksi'];

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
  ];

  const data = [
    {
      name: 'Berlangsung',
      description: 'Kategori ini untuk kajian berlangsung',
      icon: 'LiveIcon',
    },
  ];

  const editPath = '/dashboard/kajian/category/edit';

  return (
    <>
      <Breadcrumb pageName="Daftar Kategori Kajian" direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/kajian/category/add'}
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

export default CategoryKajian;
