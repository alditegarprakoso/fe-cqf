import React, { useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import IconPicker from '../../../components/IconPicker';

const FormCategoryDonation: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const [selectedIcon, setSelectedIcon] = useState<string>('');

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'Daftar Kategori Donasi',
      path: '/dashboard/donation/category',
    },
  ];

  const title = isEdit ? 'Edit Kategori Donasi' : 'Buat Kategori Donasi';
  return (
    <>
      <Breadcrumb pageName={title} direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/donation/category'}
        className="my-4"
        color="btnBlue"
      >
        Kembali
      </Button>

      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-7 py-4">
          {/* Nama */}
          <div className="my-5">
            <label className="mb-3 block text-black dark:text-white">
              Nama
            </label>
            <input
              type="text"
              placeholder="Masukkan nama donasi"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Nama */}

          {/* Deskripisi */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Deskripisi
            </label>
            <input
              type="text"
              placeholder="Masukkan deskripisi donasi"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Deskripisi */}

          {/* Icon */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Pilih Icon :
            </label>
            <IconPicker value={selectedIcon} onChange={setSelectedIcon} />
          </div>
          {/* Icon */}

          {/* Save */}
          <div className="mb-3">
            <Button color="btnBlue">{isEdit ? 'Edit' : 'Buat'} Kategori</Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormCategoryDonation;
