import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  Button,
  Label,
  Select,
  FileInput,
  Spinner,
  Alert,
} from 'flowbite-react';

import {
  insertUser,
  getUserById,
  updateUser,
} from '../../services/UserServices';

import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

const FormUsers: React.FC<{ isEdit?: boolean }> = ({ isEdit = false }) => {
  const { userId } = useParams();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [position, setPosition] = useState<string>('');
  const [status, setStatus] = useState<string>('Aktif');
  const [photo, setPhoto] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [alertType, setAlertType] = useState<string>('');

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPhoto(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setPosition('');
    setStatus('');
    setPhoto(null);
    setPreview(null);
  };

  const insertUserFunc = async () => {
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !status ||
      password !== confirmPassword
    ) {
      alert('Password dan Konfirmasi Password tidak cocok!');
      return;
    }

    const payload = {
      name,
      email,
      password,
      position,
      status,
      photo,
    };

    setLoading(true);
    try {
      await insertUser(payload);

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

  const getUserData = async (id: number | string) => {
    try {
      const response = await getUserById(id);
      const { data } = response.data;
      setName(data.name);
      setEmail(data.email);
      setPosition(data.position);
      setStatus(data.status);
      setPreview(data.photo);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const updateUserFunc = async () => {
    const payload = {
      name,
      email,
      position,
      status,
      photo,
    };

    setLoading(true);
    try {
      await updateUser(Number(userId), payload);
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
      if (userId) {
        getUserData(userId);
      }
    }
  }, [isEdit]);
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
              placeholder="Masukkan nama"
              onChange={(e) => setName(e.target.value)}
              value={name}
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
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Email */}

          {/* Password */}
          <div className={`my-5 ${isEdit ? 'hidden' : 'block'}`}>
            <label className="mb-3 block text-black dark:text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Masukkan password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Password */}

          {/* Konfirmasi Password */}
          <div className={`my-5 ${isEdit ? 'hidden' : 'block'}`}>
            <label className="mb-3 block text-black dark:text-white">
              Konfirmasi Password
            </label>
            <input
              type="password"
              placeholder="Masukkan konfirmasi password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
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
              onChange={(e) => setPosition(e.target.value)}
              value={position}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Posisi */}

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

            {preview && (
              <div className="mt-4">
                <p className="mb-3 block text-black dark:text-white">
                  Preview Foto :
                </p>
                <img
                  src={preview}
                  alt="Preview"
                  className="mt-2 w-auto h-[300px] rounded-full shadow-md"
                />
              </div>
            )}
          </div>
          {/* Foto */}

          {/* Save */}
          <div className="mb-3">
            <Button
              color="btnBlue"
              onClick={isEdit ? updateUserFunc : insertUserFunc}
            >
              {loading ? (
                <div>
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </div>
              ) : (
                <p>{isEdit ? 'Edit Pengguna' : 'Buat Pengguna'}</p>
              )}
            </Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormUsers;
