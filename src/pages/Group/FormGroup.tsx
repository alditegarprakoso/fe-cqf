import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Button, Label, Select, FileInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const FormGroup: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const [logo, setLogo] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setLogo(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'Daftar Group',
      path: '/dashboard/group',
    },
  ];

  const title = isEdit ? 'Edit Group' : 'Tambah Group';
  return (
    <>
      <Breadcrumb pageName={title} direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/group'}
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

          {/* Logo */}
          <div className="mb-5">
            <p className="mb-3 block text-black dark:text-white">Logo</p>
            <div>
              <Label htmlFor="default-file-upload" />
            </div>
            <FileInput
              id="default-file-upload"
              onChange={handleFileChange}
              accept="image/*"
              helperText="SVG, PNG, JPG or GIF"
            />

            {logo && (
              <div className="mt-4">
                <p className="mb-3 block text-black dark:text-white">
                  Preview Logo :
                </p>
                <img
                  src={logo}
                  alt="Preview"
                  className="mt-2 w-auto h-[300px] rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
          {/* Logo */}

          {/* Save */}
          <div className="mb-3">
            <Button color="btnBlue">
              {isEdit ? 'Edit Group' : 'Buat Group'}
            </Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormGroup;
