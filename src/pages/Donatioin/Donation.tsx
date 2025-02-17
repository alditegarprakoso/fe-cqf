import React from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableList from './TableList';
import { Button, Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

import DonationBeras from '../../images/homepage/donation/donation-beras.png';
import DonationGempa from '../../images/homepage/donation/donation-gempa.png';
import DonationYatim from '../../images/homepage/donation/donation-yatim.png';

const Donation: React.FC = () => {
  const tableTitle = [
    'No',
    'Donasi',
    'Kategori',
    'Donasi Terkumpul',
    'Status',
    'Aksi',
  ];

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
  ];

  const dataDonation = [
    {
      image: DonationBeras,
      donationTitle:
        'Sedekah Beras untuk seluruh para keluarga di afrika selatan',
      donationTotal: '0',
      donationCategory: 'Test Category',
      donationStatus: 'Aktif',
      remaining: '30 Hari Lagi',
    },
    {
      image: DonationGempa,
      donationTitle: 'Bantu Bencana Gempa dengan Kebutuhan Pokok',
      donationTotal: '500.000.124',
      donationCategory: 'Test Category',
      donationStatus: 'Aktif',
      remaining: '2 hari lagi',
    },
    {
      image: DonationYatim,
      donationTitle: 'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa',
      donationTotal: '235.366.942',
      donationCategory: 'Test Category',
      donationStatus: 'Aktif',
      remaining: '11 Hari Lagi',
    },
  ];

  const editPath = "/dashboard/donation/edit";

  return (
    <>
      <Breadcrumb pageName="Daftar Donasi" direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/donation/add'}
        className="my-4"
        color="btnBlue"
      >
        Buat Donasi Baru
      </Button>
      <TableList tableTitle={tableTitle} dataDonation={dataDonation} editPath={editPath} />
      <Pagination
        currentPage={1}
        totalPages={10}
        onChange={() => {}}
        onPageChange={() => {}}
        className='mt-4'
      />
    </>
  );
};

export default Donation;
