import { Button, Modal } from 'flowbite-react';
import { CircleAlert, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { deleteUser } from '../../services/UserServices';

import DefaultPicture from '../../images/user/default-picture.jpg';

interface TableListProps {
  tableTitle: string[];
  data: {
    id: number;
    photo: string;
    name: string;
    email: string;
    position: string;
    status: string;
  }[];
  editPath: string;
  numbering: { perPage: number; currentPage: number };
  refreshData: () => void;
  setIsDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableList = (props: TableListProps) => {
  const { tableTitle, data, editPath, numbering, refreshData, setIsDelete } =
    props;
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(0);

  const showModal = (id: number) => {
    setOpenModal(true);
    setId(id);
  };

  const handleDelete = async () => {
    try {
      await deleteUser(id);
      refreshData();
      setIsDelete(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {tableTitle.map((title: string, key: number) => (
                <th
                  key={key}
                  className={`py-4 px-4 font-medium text-black dark:text-white`}
                >
                  <p
                    className={`text-black dark:text-white ${
                      title === 'Aksi' && 'lg:ml-10'
                    }`}
                  >
                    {title}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr key={key} className="border-b last:border-b-0">
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
                    {numbering.perPage * (numbering.currentPage - 1) + key + 1}
                  </h5>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <img
                    src={item.photo ? item.photo : DefaultPicture}
                    alt={item.name}
                    className="h-[100px] w-[100px] object-cover rounded-full"
                  />
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white md:whitespace-normal">
                    <p className="text-black dark:text-white">{item.name}</p>
                  </h5>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{item.email}</p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{item.position}</p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      item.status === 'Aktif'
                        ? 'bg-success text-success'
                        : item.status === 'Tidak Aktif'
                        ? 'bg-danger text-danger'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {item.status}
                  </p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <Button
                      as={Link}
                      to={`${editPath}/${item.id}`}
                      color="btnAction"
                    >
                      <Pencil />
                    </Button>
                    <button
                      className="hover:text-danger"
                      aria-label="Delete"
                      onClick={() => showModal(item.id)}
                    >
                      <Trash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(true)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="flex flex-col items-center">
            <CircleAlert width={50} height={50} color="red" className="mb-5" />
            <h3 className="mb-5 text-lg font-normal text-black dark:text-white">
              Apakah kamu yakin ingin menghapus data ini?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={handleDelete}>
                Ya, hapus data
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                Batal
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default TableList;
