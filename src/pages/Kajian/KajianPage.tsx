import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableList from './TableList';
import { Button, Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

import BuktiTransfer from '../../images/donation/bukti-tf.jpg';

const KajianPage: React.FC = () => {
  const tableTitle = [
    'No',
    'Thumbnail',
    'Judul',
    'Sub Judul',
    'Deskripsi',
    'Kategori',
    'Tanggal',
    'Live',
    'URL Live',
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
      title: 'Menyempurnakan Taqwa',
      sub_title: 'Cinta Quran Creative Studio',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum voluptatibus asperiores nisi consequatur nobis alias?',
      category: 'Berlangsung',
      date: 'Kamis, 27 Maret 2025',
      live: 'Sedang Live',
      url: 'youtube.com',
      status: 'Aktif',
    },
  ];

  const editPath = '/dashboard/kajian/edit';

  return (
    <>
      <Breadcrumb pageName="Daftar Kajian" direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/kajian/add'}
        className="my-4"
        color="btnBlue"
      >
        Tambah Kajian
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

export default KajianPage;
