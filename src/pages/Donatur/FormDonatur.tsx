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
import { getDonation } from '../../services/DonationServices';
import {
  getDonatureById,
  insertDonature,
  updateDonature,
} from '../../services/DonatureServices';

import Select from 'react-select';
interface DonationType {
  id: string;
  title: string;
}

const FormDonatur: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const { donatureId } = useParams();
  const [dataDonation, setDataDonation] = useState<DonationType[]>([]);
  const [donationId, setDonationId] = useState<string>('');
  const [donatureName, setDonatureName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [totalDonation, setTotalDonation] = useState<string>('');
  const [info, setInfo] = useState<string>('');
  const [status, setStatus] = useState<string>('Diterima');
  const [attachment, setAttachment] = useState<File | null>(null);
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
      name: 'Daftar Donatur',
      path: '/dashboard/donation/list',
    },
  ];

  const title = isEdit ? 'Edit Donatur' : 'Tambah Donatur';

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAttachment(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const clearForm = () => {
    setDonationId('');
    setDonatureName('');
    setEmail('');
    setPhone('');
    setTotalDonation('');
    setInfo('');
    setStatus('Diterima');
    setAttachment(null);
    setPreview(null);
  };

  const getDonationFunc = async () => {
    try {
      const response = await getDonation();
      const { data } = response.data.data;
      setDataDonation(data);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  useEffect(() => {
    getDonationFunc();
  }, []);

  const getDonatureData = async (id: number | string) => {
    try {
      const response = await getDonatureById(id);
      const { data } = response.data;
      setDonationId(data.donation_id);
      setDonatureName(data.donature_name);
      setEmail(data.email);
      setPhone(data.phone);
      setTotalDonation(data.total_donation);
      setInfo(data.info);
      setStatus(data.status);
      setAttachment(null);
      setPreview(data.attachment);
    } catch (error) {
      console.error('Error fetching donature data:', error);
    }
  };

  const insertDonatureFunc = async () => {
    if (
      !donationId ||
      !donatureName ||
      !totalDonation ||
      !status ||
      !attachment
    ) {
      setMessage('Harap isi form dengan benar');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    const payload = {
      donation_id: donationId,
      donature_name: donatureName,
      email,
      phone,
      total_donation: totalDonation,
      info,
      status,
      attachment,
    };

    setLoading(true);
    try {
      await insertDonature(payload);

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

  const updateDonatureFunc = async () => {
    if (!donationId || !donatureName || !totalDonation || !status) {
      setMessage('Harap isi form dengan benar');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    const payload = {
      donation_id: donationId,
      donature_name: donatureName,
      email,
      phone,
      total_donation: totalDonation,
      info,
      status,
      attachment,
    };

    setLoading(true);
    try {
      await updateDonature(Number(donatureId), payload);
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
      if (donatureId) {
        getDonatureData(donatureId);
      }
    }
  }, [isEdit]);

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
              placeholder="Masukkan nama donatur"
              value={donatureName}
              onChange={(e) => setDonatureName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              type="text"
              placeholder="Masukkan total donasi"
              value={totalDonation}
              onChange={(e) => setTotalDonation(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Total Donation */}

          {/* Pick Donasi */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Kategori
            </label>
            <Select
              options={dataDonation}
              getOptionLabel={(option) => option.title}
              getOptionValue={(option) => option.id}
              onChange={(e) => e && setDonationId(e.id)}
              value={dataDonation.find((item) => item.id === donationId)}
              placeholder="Pilih Kategori Donasi"
            />
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
              value={info}
              onChange={(e) => setInfo(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* Info */}

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
              <option value="Diterima">Diterima</option>
              <option value="Gagal Diterima">Gagal Diterima</option>
              <option value="Belum Diterima">Belum Diterima</option>
            </SelectInput>
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

            {preview && (
              <div className="mt-4">
                <p className="mb-3 block text-black dark:text-white">
                  Preview bukti transfer :
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
              onClick={isEdit ? updateDonatureFunc : insertDonatureFunc}
            >
              {loading ? (
                <div>
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </div>
              ) : (
                <p>{isEdit ? 'Edit Donatur' : 'Tambah Donatur'}</p>
              )}
            </Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormDonatur;
