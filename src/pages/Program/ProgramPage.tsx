import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableList from './TableList';
import { Button, Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

import BuktiTransfer from '../../images/donation/bukti-tf.jpg';

const ProgramPage: React.FC = () => {
  const tableTitle = [
    'No',
    'Thumbnail',
    'Judul',
    'Sub Judul',
    'Deskripsi',
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
      thumbnail: BuktiTransfer,
      title: 'Indonesia Bisa Baca Quran',
      subtitle:
        'Sebuah Fakta mengejutkan menyatakan bahwa 53,57% kaum muslimin di Indonesia tidak bisa membaca Al-Quran.',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque eum recusandae tenetur harum atque velit accusantium dignissimos expedita nam nisi.',
      status: 'Aktif',
    },
  ];

  const editPath = '/dashboard/program/edit';

  return (
    <>
      <Breadcrumb pageName="Daftar Program" direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/program/add'}
        className="my-4"
        color="btnBlue"
      >
        Buat Program Baru
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

export default ProgramPage;
