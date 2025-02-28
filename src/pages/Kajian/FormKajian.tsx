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
import {
  getKajianById,
  insertKajian,
  updateKajian,
} from '../../services/KajianServices';
import Select from 'react-select';
import { getCategory } from '../../services/KajianCategoryServices';

interface CategoryKajian {
  id: string;
  name: string;
}

const FormKajian: React.FC<{ isEdit?: boolean }> = ({ isEdit }) => {
  const { kajianId } = useParams();
  const [dataCetgory, setDataCategory] = useState<CategoryKajian[]>([]);
  const [categoryId, setCategoryId] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [datetime, setDatetime] = useState<string>('');
  const [live, setLive] = useState<string>('Live');
  const [url, setUrl] = useState<string>('');
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
      name: 'Daftar Kajian',
      path: '/dashboard/kajian',
    },
  ];

  const titleBreadcrumb = isEdit ? 'Edit Kajian' : 'Tambah Kajian';

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
    setSubtitle('');
    setDescription('');
    setDatetime('');
    setLive('Live');
    setUrl('');
    setStatus('Aktif');
    setThumbnail(null);
    setPreview(null);
  };

  const getCategoryKajianFunc = async () => {
    try {
      const response = await getCategory();
      const { data } = response.data.data;
      setDataCategory(data);
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  useEffect(() => {
    getCategoryKajianFunc();
  }, []);

  const getKajianData = async (id: number | string) => {
    try {
      const response = await getKajianById(id);
      const { data } = response.data;
      setCategoryId(data.category_id);
      setTitle(data.title);
      setSubtitle(data.subtitle);
      setDescription(data.description);
      setDatetime(data.datetime);
      setLive(data.live == '1' ? 'Live' : 'Tidak Live');
      setUrl(data.url);
      setStatus(data.status);
      setThumbnail(null);
      setPreview(data.thumbnail);
    } catch (error) {
      console.error('Error fetching kajian data:', error);
    }
  };

  const insertKajianFunc = async () => {
    if (!categoryId || !title || !datetime || !live || !status || !thumbnail) {
      setMessage('Harap isi form dengan benar');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    const payload = {
      category_id: categoryId,
      title,
      subtitle,
      description,
      datetime,
      is_live: live,
      url,
      status,
      thumbnail,
    };

    setLoading(true);
    try {
      await insertKajian(payload);

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

  const updateKajianFunc = async () => {
    const payload = {
      category_id: categoryId,
      title,
      subtitle,
      description,
      datetime,
      is_live: live,
      url,
      status,
      thumbnail,
    };

    console.log(payload);
    

    if (!categoryId || !title || !datetime || !live || !status) {
      setMessage('Harap isi form dengan benar');
      setAlertType('failure');
      setShowAlert(true);
      return;
    }

    setLoading(true);
    try {
      await updateKajian(Number(kajianId), payload);
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
      if (kajianId) {
        getKajianData(kajianId);
      }
    }
  }, [isEdit]);

  return (
    <>
      <Breadcrumb pageName={titleBreadcrumb} direction={direction} />
      <Button
        as={Link}
        to={'/dashboard/kajian'}
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
              placeholder="Masukkan judul kajian"
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
              placeholder="Masukkan sub judul kajian"
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

          {/* Kategori */}
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
              placeholder="Pilih Kategori Kajian"
            />
          </div>
          {/* Kategori */}

          {/* Tanggal */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Tanggal
            </label>
            <input
              type="datetime-local"
              className="border border-gray-300 p-2 rounded-md w-full"
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
            />
          </div>
          {/* Tanggal */}

          {/* Live */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              Live
            </label>
            <SelectInput
              id="live"
              required
              color="white"
              onChange={(e) => setLive(e.target.value)}
              value={live}
            >
              <option value="Live">Live</option>
              <option value="Tidak Live">Tidak Live</option>
            </SelectInput>
          </div>
          {/* Live */}

          {/* URL Live */}
          <div className="mb-5">
            <label className="mb-3 block text-black dark:text-white">
              URL Live
            </label>
            <input
              type="text"
              placeholder="Masukkan url live"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          {/* URL Live */}

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
              onClick={isEdit ? updateKajianFunc : insertKajianFunc}
            >
              {loading ? (
                <div>
                  <Spinner aria-label="Spinner button example" size="sm" />
                  <span className="pl-3">Loading...</span>
                </div>
              ) : (
                <p> {isEdit ? 'Edit Kajian' : 'Tambah Kajian'}</p>
              )}
            </Button>
          </div>
          {/* Save */}
        </div>
      </div>
    </>
  );
};

export default FormKajian;
