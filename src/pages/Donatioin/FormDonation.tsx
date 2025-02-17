import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Button, Label, Select, FileInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const FormDonation: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setThumbnail(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      name: 'Donasi',
      path: '/dashboard/donation',
    },
  ];

  const title = isEdit ? 'Edit Donasi' : 'Buat Donasi Baru';
  return (
    <>
      <Breadcrumb pageName={title} direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/donation'}
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

          {/* Deskripsi */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Deskripsi
            </label>
            <textarea
              rows={3}
              placeholder="Masukkan deskripsi"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>
          {/* Deskripsi */}

          {/* Target */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Target
            </label>
            <input
              type="number"
              min={0}
              placeholder="Masukkan target donasi"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Target */}

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

          {/* Thumbnail */}
          <div className="mb-5">
            <p className="mb-3 block text-black dark:text-white">Thumbnail</p>
            <div>
              <Label htmlFor="default-file-upload" />
            </div>
            <FileInput
              id="default-file-upload"
              onChange={handleFileChange}
              accept="image/*"
              helperText="SVG, PNG, JPG or GIF"
            />

            {thumbnail && (
              <div className="mt-4">
                <p className="mb-3 block text-black dark:text-white">
                  Preview Thumbnail :
                </p>
                <img
                  src={thumbnail}
                  alt="Preview"
                  className="mt-2 w-auto h-[300px] rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
          {/* Thumbnail */}

          {/* Save */}
          <div className="mb-3">
            <Button color="btnBlue">Buat Donasi</Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormDonation;
