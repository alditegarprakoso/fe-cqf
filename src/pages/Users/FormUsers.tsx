import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Button, Label, Select, FileInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const FormUsers: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const [photo, setPhoto] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhoto(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'Daftar Pengguna',
      path: '/dashboard/users',
    },
  ];

  const title = isEdit ? 'Edit Pengguna' : 'Tambah Pengguna';
  return (
    <>
      <Breadcrumb pageName={title} direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/users'}
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
              placeholder="Masukkan nama"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Nama */}

          {/* Email */}
          <div className="my-5">
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
          
          {/* Password */}
          <div className="my-5">
            <label className="mb-3 block text-black dark:text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Password */}

          {/* Konfirmasi Password */}
          <div className="my-5">
            <label className="mb-3 block text-black dark:text-white">
              Konfirmasi Password
            </label>
            <input
              type="password"
              placeholder="Masukkan konfirmasi password"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Konfirmasi Password */}

          {/* Posisi */}
          <div className="my-5">
            <label className="mb-3 block text-black dark:text-white">
              Posisi
            </label>
            <input
              type="text"
              placeholder="Masukkan posisi"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Posisi */}

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

          {/* Foto */}
          <div className="mb-5">
            <p className="mb-3 block text-black dark:text-white">Foto</p>
            <div>
              <Label htmlFor="default-file-upload" />
            </div>
            <FileInput
              id="default-file-upload"
              onChange={handleFileChange}
              accept="image/*"
              helperText="SVG, PNG, JPG or GIF"
            />

            {photo && (
              <div className="mt-4">
                <p className="mb-3 block text-black dark:text-white">
                  Preview Foto :
                </p>
                <img
                  src={photo}
                  alt="Preview"
                  className="mt-2 w-auto h-[300px] rounded-full shadow-md"
                />
              </div>
            )}
          </div>
          {/* Foto */}

          {/* Save */}
          <div className="mb-3">
            <Button color="btnBlue">
              {isEdit ? 'Edit Pengguna' : 'Buat Pengguna'}
            </Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormUsers;
