import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import {
  Button,
  Label,
  Select,
  FileInput,
  Alert,
  Spinner,
} from 'flowbite-react';
import { Link, useParams } from 'react-router-dom';
import {
  getProgramById,
  insertProgram,
  updateProgram,
} from '../../services/ProgramServices';

const FormProgam: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const { programId } = useParams();
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>('Aktif');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
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

  const titleBreadcrumb = isEdit ? 'Edit Program' : 'Tambah Program';

  const clearForm = () => {
    setTitle('');
    setSubtitle('');
    setDescription('');
    setStatus('Aktif');
    setThumbnail(null);
    setPreview(null);
  };

  const getProgramData = async (id: number | string) => {
    try {
      const response = await getProgramById(id);
      const { data } = response.data;
      setTitle(data.title);
      setSubtitle(data.subtitle);
      setDescription(data.description);
      setThumbnail(null);
      setStatus(data.status);
      setPreview(data.thumbnail);
    } catch (error) {
      console.error('Error fetching program data:', error);
    }
  };

  const insertProgramFunc = async () => {
    if (!title || !status || !thumbnail) {
      setMessage('Harap isi form dengan benar!');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    const payload = {
      title,
      subtitle,
      description,
      status,
      thumbnail,
    };

    setLoading(true);
    try {
      await insertProgram(payload);

      setAlertType('success');
      setMessage('Data Berhasil Ditambahkan!');
      setShowAlert(true);
      clearForm();
    } catch (error: any) {
      console.log(error);
      setAlertType('failure');
      setMessage(
        error.response?.data?.errors ||
          error.response?.data?.message ||
          'Terjadi kesalahan',
      );
      setShowAlert(true);
    } finally {
      setLoading(false);
      const scrollToMe = document.getElementById('scrollToMe');
      if (scrollToMe) {
        scrollToMe.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      }
    }
  };

  const updateProgramFunc = async () => {
    if (!title || !status) {
      setMessage('Harap isi form dengan benar!');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    const payload = {
      title,
      subtitle,
      description,
      status,
      thumbnail,
    };

    setLoading(true);
    try {
      await updateProgram(Number(programId), payload);
      setAlertType('success');
      setMessage('Data Berhasil Diubah!');
      setShowAlert(true);
    } catch (error: any) {
      console.log(error);
      setShowAlert(true);
      setAlertType('failure');
      setMessage(
        error.response?.data?.errors ||
          error.response?.data?.message ||
          'Terjadi kesalahan',
      );
    } finally {
      setLoading(false);
      const scrollToMe = document.getElementById('scrollToMe');
      if (scrollToMe) {
        scrollToMe.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest',
        });
      }
    }
  };

  useEffect(() => {
    if (isEdit) {
      if (programId) {
        getProgramData(programId);
      }
    }
  }, [isEdit]);

  return (
    <>
      <Breadcrumb pageName={titleBreadcrumb} direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/program'}
        className="my-4"
        color="btnBlue"
      >
        Kembali
      </Button>

      <div id="scrollToMe" className="opacity-0"></div>

      {showAlert && (
        <Alert
          color={alertType}
          onDismiss={() => {
            setShowAlert(false);
            setMessage('');
            setAlertType('');
          }}
        >
          <span className="font-medium">{message}</span>
        </Alert>
      )}

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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            ></textarea>
          </div>
          {/* Deskripsi */}

          {/* Status */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Status
            </label>
            <Select
              id="status"
              required
              color="white"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option value="Aktif">Aktif</option>
              <option value="Tidak Aktif">Tidak Aktif</option>
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

            {preview && (
              <div className="mt-4">
                <p className="mb-3 block text-black dark:text-white">
                  Preview Thumbnail :
                </p>
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-2 w-auto h-[300px] rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
          {/* Thumbnail */}

          {/* Save */}
          <div className="mb-3">
            <Button
              color="btnBlue"
              onClick={isEdit ? updateProgramFunc : insertProgramFunc}
            >
              {loading ? (
                <div>
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </div>
              ) : (
                <p>{isEdit ? 'Edit Program' : 'Tambah Program'}</p>
              )}
            </Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormProgam;
