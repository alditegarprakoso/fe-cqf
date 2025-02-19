import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Button, Label, Select, FileInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const FormDonatur: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const [attachment, setAttachment] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setAttachment(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'Daftar Donatur',
      path: '/dashboard/donation/list',
    },
  ];

  const title = isEdit ? 'Edit Donatur' : 'Tambah Donatur';
  return (
    <>
      <Breadcrumb pageName={title} direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/donation/list'}
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
              placeholder="Masukkan nama donatur"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Nama */}

          {/* Email */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Masukkan email"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Email */}

          {/* Telepon */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Telepon
            </label>
            <input
              type="text"
              placeholder="Masukkan nomor telepon"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Telepon */}

          {/* Total Donation */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Total Donation
            </label>
            <input
              type="number"
              min={0}
              placeholder="Masukkan total donasi"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Total Donation */}

          {/* Pick Donasi */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Donasi
            </label>
            <Select id="status" required color="white">
              <option disabled selected>
                Pilih Donasi
              </option>
              <option>Donasi 1</option>
              <option>Donasi 2</option>
            </Select>
          </div>
          {/* Pick Donasi */}

          {/* Info */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Info
            </label>
            <input
              type="text"
              placeholder="Masukkan info atau note"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Info */}

          {/* Status */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Status
            </label>
            <Select id="status" required color="white">
              <option disabled selected>
                Pilih Status
              </option>
              <option>Aktif</option>
              <option>Tidak Aktif</option>
            </Select>
          </div>
          {/* Status */}

          {/* Attachment */}
          <div className="mb-5">
            <p className="mb-3 block text-black dark:text-white">
              Bukti Transfer
            </p>
            <div>
              <Label htmlFor="default-file-upload" />
            </div>
            <FileInput
              id="default-file-upload"
              onChange={handleFileChange}
              accept="image/*"
              helperText="SVG, PNG, JPG or GIF"
            />

            {attachment && (
              <div className="mt-4">
                <p className="mb-3 block text-black dark:text-white">
                  Preview bukti transfer :
                </p>
                <img
                  src={attachment}
                  alt="Preview"
                  className="mt-2 w-auto h-[300px] rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
          {/* Thumbnail */}

          {/* Save */}
          <div className="mb-3">
            <Button color="btnBlue">{isEdit ? 'Edit Donatur' : 'Tambah Donatur'}</Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormDonatur;
