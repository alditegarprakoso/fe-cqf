import React, { useEffect } from 'react';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import TableList from './TableList';
import { Alert, Button, Pagination, Spinner } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { getKajian } from '../../services/KajianServices';
const KajianPage: React.FC = () => {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPages, setTotalPages] = React.useState(1);
  const [perPage, _setPerPage] = React.useState(5);
  const [search, setSearch] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [isDelete, setIsDelete] = React.useState(false);

  const numbering = {
    perPage,
    currentPage,
  };

  const tableTitle = [
    'No',
    'Thumbnail',
    'Judul',
    'Sub Judul',
    'Deskripsi',
    'Kategori',
    'Tanggal',
    'Live',
    'URL Live',
    'Status',
    'Aksi',
  ];

  const direction = [
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
  ];

  const editPath = '/dashboard/kajian/edit';

  const fetchKajian = async () => {
    setLoading(true);
    const res = await getKajian(currentPage, perPage, search);

    if (res.data.success === true) {
      setData(res.data.data.data);
      setCurrentPage(res.data.data.current_page);
      setTotalPages(res.data.data.last_page);
      setLoading(false);
    } else {
      console.log(res);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKajian();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleSearch = (e: any) => {
    if (e.key === 'Enter') {
      setCurrentPage(1);
      fetchKajian();
    }
  };

  return (
    <>
      <Breadcrumb pageName="Daftar Kajian" direction={direction} />
      <div className="flex flex-col md:flex-row justify-between items-center">
        <Button
          as={Link}
          to={'/dashboard/kajian/add'}
          className="my-4"
          color="btnBlue"
        >
          Tambah Kajian
        </Button>
        <div className="w-[300px]">
          <div className="flex">
            <input
              type="text"
              placeholder="Cari kajian"
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleSearch}
              className="bg-white w-full rounded-lg border-[1.5px] border-stroke bg-transparent mr-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
            <Button color="btnBlue" onClick={fetchKajian}>
              Cari
            </Button>
          </div>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center my-4">
          <Spinner size="lg" />
        </div>
      ) : (
        <div>
          {isDelete && (
            <Alert color="success" onDismiss={() => setIsDelete(false)}>
              <span className="font-medium">Data berhasil dihapus</span>
            </Alert>
          )}
          <TableList
            tableTitle={tableTitle}
            data={data}
            editPath={editPath}
            numbering={numbering}
            refreshData={fetchKajian}
            setIsDelete={setIsDelete}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            className="mt-4"
          />
        </div>
      )}
    </>
  );
};

export default KajianPage;
