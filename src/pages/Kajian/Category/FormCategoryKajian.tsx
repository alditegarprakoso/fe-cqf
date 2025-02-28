import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../../components/Breadcrumbs/Breadcrumb';
import { Alert, Button, Select, Spinner } from 'flowbite-react';
import { Link, useParams } from 'react-router-dom';
import IconPicker from '../../../components/IconPicker';
import {
  getCategoryById,
  insertCategory,
  updateCategory,
} from '../../../services/KajianCategoryServices';

const FormCategoryKajian: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const { categoryId } = useParams();
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedIcon, setSelectedIcon] = useState<string>('');
  const [status, setStatus] = useState<string>('Aktif');
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
      name: 'Daftar Kategori Kajian',
      path: '/dashboard/kajain/category',
    },
  ];

  const title = isEdit ? 'Edit Kategori Kajian' : 'Buat Kategori Kajian';

  const clearForm = () => {
    setName('');
    setDescription('');
    setSelectedIcon('');
    setStatus('');
  };

  const getCategoryData = async (id: number | string) => {
    try {
      const response = await getCategoryById(id);
      const { data } = response.data;
      setName(data.name);
      setDescription(data.description);
      setSelectedIcon(data.icon);
      setStatus(data.status);
    } catch (error) {
      console.error('Error fetching donation category data:', error);
    }
  };

  const insertCategoryFunc = async () => {
    if (!name || !selectedIcon || !status) {
      setMessage('Semua field harus diisi');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    const payload = { name, description, icon: selectedIcon, status };

    setLoading(true);
    try {
      await insertCategory(payload);

      setAlertType('success');
      setMessage('Berhasil menambahkan kategori kajian');
      setShowAlert(true);
      clearForm();
    } catch (error: any) {
      console.log(error);
      setAlertType('failure');
      setMessage(
        error.response?.data?.errors ||
          error.response?.data?.message ||
          'Gagal menambahkan kategori kajian',
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

  const updateCategoryFunc = async () => {
    const payload = {
      name,
      description,
      icon: selectedIcon,
      status,
    };

    setLoading(true);
    try {
      await updateCategory(Number(categoryId), payload);
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
      if (categoryId) {
        getCategoryData(categoryId);
      }
    }
  }, [isEdit]);
  return (
    <>
      <Breadcrumb pageName={title} direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/kajian/category'}
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
              placeholder="Masukkan nama kategori"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              placeholder="Masukkan deskripisi kategori"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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

          {/* Save */}
          <div className="mb-3">
            <Button
              color="btnBlue"
              onClick={isEdit ? updateCategoryFunc : insertCategoryFunc}
            >
              {loading ? (
                <div>
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </div>
              ) : (
                <p>{isEdit ? 'Edit' : 'Buat'} Kajian</p>
              )}
            </Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormCategoryKajian;
