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
  getGroupById,
  insertGroup,
  updateGroup,
} from '../../services/GroupServices';

const FormGroup: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const { groupId } = useParams();
  const [name, setName] = useState<string>('');
  const [logo, setLogo] = useState<File | null>(null);
  const [status, setStatus] = useState<string>('Aktif');
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLogo(file);
      setPreview(URL.createObjectURL(file));
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

  const clearForm = () => {
    setName('');
    setLogo(null);
    setPreview(null);
    setStatus('Aktif');
  };

  const getGroupData = async (id: number | string) => {
    try {
      const response = await getGroupById(id);
      const { data } = response.data;
      setName(data.name);
      setLogo(null);
      setPreview(data.logo);
      setStatus(data.status);
    } catch (error) {
      console.error('Error fetching group data:', error);
    }
  };

  const insertGroupFunc = async () => {
    if (!name || !logo || !status) {
      setMessage('Harap isi form dengan benar!');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    const payload = {
      name,
      logo,
      status,
    };

    setLoading(true);
    try {
      await insertGroup(payload);

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

  const updateGroupFunc = async () => {
    if (!name || !status) {
      setMessage('Harap isi form dengan benar!');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    const payload = {
      name,
      logo,
      status,
    };

    setLoading(true);
    try {
      await updateGroup(Number(groupId), payload);
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
      if (groupId) {
        getGroupData(groupId);
      }
    }
  }, [isEdit]);

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
          {/* Nama */}
          <div className="my-5">
            <label className="mb-3 block text-black dark:text-white">
              Nama
            </label>
            <input
              type="text"
              placeholder="Masukkan nama group"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Nama */}

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

            {preview && (
              <div className="mt-4">
                <p className="mb-3 block text-black dark:text-white">
                  Preview Logo :
                </p>
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-2 w-auto h-[300px] rounded-lg shadow-md"
                />
              </div>
            )}
          </div>
          {/* Logo */}

          {/* Save */}
          <div className="mb-3">
            <Button
              color="btnBlue"
              onClick={isEdit ? updateGroupFunc : insertGroupFunc}
            >
              {loading ? (
                <div>
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </div>
              ) : (
                <p>{isEdit ? 'Edit Group' : 'Buat Group'}</p>
              )}
            </Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormGroup;
