import React, { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import { Button, Label, Select, FileInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

const FormProgam: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
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
      name: 'Daftar Program',
      path: '/dashboard/program',
    },
  ];

  const title = isEdit ? 'Edit Program' : 'Tambah Program';
  return (
    <>
      <Breadcrumb pageName={title} direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/program'}
        className="my-4"
        color="btnBlue"
      >
        Kembali
      </Button>

      <div className="mb-10 rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="px-7 py-4">
          {/* Judul */}
          <div className="my-5">
            <label className="mb-3 block text-black dark:text-white">
              Judul
            </label>
            <input
              type="text"
              placeholder="Masukkan judul program"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Judul */}

          {/* Sub Judul */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Sub Judul
            </label>
            <input
              type="text"
              placeholder="Masukkan sub judul"
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Sub Judul */}

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
            <Button color="btnBlue">{isEdit ? 'Edit Program' : 'Tambah Program'}</Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormProgam;
