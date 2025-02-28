import React, { useEffect, useState } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import {
  Button,
  Label,
  Select as SelectInput,
  FileInput,
  Alert,
  Spinner,
} from 'flowbite-react';
import { Link, useParams } from 'react-router-dom';
import Select from 'react-select';

import {
  getDonationById,
  insertDonation,
  updateDonation,
} from '../../services/DonationServices';
import { getCategory } from '../../services/DonationCategoryServices';
interface Category {
  id: string;
  name: string;
}

const FormDonation: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const { donationId } = useParams();
  const [dataCetgory, setDataCategory] = useState<Category[]>([]);
  const [categoryId, setCategoryId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [targetAmount, setTargetAmount] = useState<string>('0');
  const [bankAccount, setBankAccount] = useState<string>('');
  const [dueDate, setDueDate] = useState<string>('');
  const [status, setStatus] = useState<string>('Aktif');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
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
      name: 'Donasi',
      path: '/dashboard/donation',
    },
  ];

  const titleBreadcrumb = isEdit ? 'Edit Donasi' : 'Buat Donasi Baru';

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setThumbnail(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const clearForm = () => {
    setCategoryId('');
    setTitle('');
    setDescription('');
    setTargetAmount('0');
    setBankAccount('');
    setDueDate('');
    setStatus('Aktif');
    setThumbnail(null);
    setPreview(null);
  };

  const getCategoryDonation = async () => {
    try {
      const response = await getCategory();
      const { data } = response.data.data;
      setDataCategory(data);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  useEffect(() => {
    getCategoryDonation();
  }, []);

  const getDonationData = async (id: number | string) => {
    try {
      const response = await getDonationById(id);
      const { data } = response.data;
      setCategoryId(data.category_id);
      setTitle(data.title);
      setDescription(data.description);
      setTargetAmount(data.target_amount);
      setBankAccount(data.bank_account);
      setDueDate(data.due_date);
      setStatus(data.status);
      setThumbnail(null);
      setPreview(data.thumbnail);
    } catch (error) {
      console.error('Error fetching donation data:', error);
    }
  };

  const insertDonationFunc = async () => {
    if (
      !categoryId ||
      !title ||
      Number(targetAmount) <= 0 ||
      !bankAccount ||
      !dueDate ||
      !status ||
      !thumbnail
    ) {
      setMessage('Harap isi form dengan benar');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    const payload = {
      category_id: categoryId,
      title,
      description,
      target_amount: targetAmount,
      bank_account: bankAccount,
      due_date: dueDate,
      status,
      thumbnail,
    };

    setLoading(true);
    try {
      await insertDonation(payload);

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

  const updateDonationFunc = async () => {
    if (
      !categoryId ||
      !title ||
      Number(targetAmount) <= 0 ||
      !bankAccount ||
      !dueDate ||
      !status
    ) {
      setMessage('Harap isi form dengan benar');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    const payload = {
      category_id: categoryId,
      title,
      description,
      target_amount: targetAmount,
      bank_account: bankAccount,
      due_date: dueDate,
      status,
      thumbnail,
    };

    setLoading(true);
    try {
      await updateDonation(Number(donationId), payload);
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
      if (donationId) {
        getDonationData(donationId);
      }
    }
  }, [isEdit]);

  return (
    <>
      <Breadcrumb pageName={titleBreadcrumb} direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/donation'}
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
              placeholder="Masukkan judul donasi"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Judul */}

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

          {/* Category */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Kategori
            </label>
            <Select
              options={dataCetgory}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              onChange={(e) => e && setCategoryId(e.id)}
              value={dataCetgory.find((item) => item.id === categoryId)}
              placeholder="Pilih Kategori Donasi"
            />
          </div>
          {/* Category */}

          {/* Target */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Target
            </label>
            <input
              type="text"
              placeholder="Masukkan target donasi"
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Target */}

          {/* Bank */}
          <div className="my-5">
            <label className="mb-3 block text-black dark:text-white">
              Bank
            </label>
            <input
              type="text"
              placeholder="Masukkan judul donasi"
              value={bankAccount}
              onChange={(e) => setBankAccount(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Bank */}

          {/* Due Date */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Tanggal Berakhir
            </label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="border border-gray-300 p-2 rounded-md w-full"
            />
          </div>

          {/* Status */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Status
            </label>
            <SelectInput
              id="status"
              required
              color="white"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            >
              <option value="Aktif">Aktif</option>
              <option value="Tidak Aktif">Tidak Aktif</option>
            </SelectInput>
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
              onClick={isEdit ? updateDonationFunc : insertDonationFunc}
            >
              {loading ? (
                <div>
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </div>
              ) : (
                <p>{isEdit ? 'Edit Donasi' : 'Buat Donasi'}</p>
              )}
            </Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormDonation;
