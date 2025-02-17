import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableList from './TableList';
import { Button, Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

import BuktiTransfer from '../../images/donation/bukti-tf.jpg';

const Donatur: React.FC = () => {
  const tableTitle = [
    'No',
    'Bukti Transfer',
    'Donatur',
    'Email',
    'Telepon',
    'Total Donasi',
    'Nama Donasi',
    'Info',
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
      attachment: BuktiTransfer,
      donatur_name: 'Aldi Tegar Prakoso',
      email: 'devidjond45@gmail.com',
      phone: '+990 3343 7865',
      total_donation: 'Rp. 10.000.000',
      donation_title:
        'Sedekah Beras untuk seluruh para keluarga di afrika selatan',
      info: 'Donatur tidak ingin disebutkan namanya',
      status: 'Diterima',
    },
    {
      attachment: BuktiTransfer,
      donatur_name: 'Aldi Tegar Prakoso',
      email: 'devidjond45@gmail.com',
      phone: '+990 3343 7865',
      total_donation: 'Rp. 10.000.000',
      donation_title:
        'Sedekah Beras untuk seluruh para keluarga di afrika selatan',
      info: 'Donatur tidak ingin disebutkan namanya',
      status: 'Belum Diterima',
    },
    {
      attachment: BuktiTransfer,
      donatur_name: 'Aldi Tegar Prakoso',
      email: 'devidjond45@gmail.com',
      phone: '+990 3343 7865',
      total_donation: 'Rp. 10.000.000',
      donation_title:
        'Sedekah Beras untuk seluruh para keluarga di afrika selatan',
      info: 'Donatur tidak ingin disebutkan namanya',
      status: 'Gagal Diterima',
    },
  ];

  const editPath = '/dashboard/donation/list/edit';

  return (
    <>
      <Breadcrumb pageName="Daftar Donatur" direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/donation/list/add'}
        className="my-4"
        color="btnBlue"
      >
        Tambah Donatur
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

export default Donatur;
