import { Button, Modal } from 'flowbite-react';
import { CircleAlert, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteDonature } from '../../services/DonatureServices';

interface TableListProps {
  tableTitle: string[];
  data: {
    id: number;
    attachment: string;
    donature_name: string;
    email: string;
    phone: string;
    total_donation: string;
    donation: { id: number; title: string };
    info: string;
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
      await deleteDonature(id);
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
                  className={`py-4 px-4 font-medium text-black dark:text-white ${
                    title !== 'No' &&
                    title !== 'Bukti Transfer' &&
                    'min-w-[200px]'
                  } ${title === 'Bukti Transfer' && 'min-w-[200px]'}
                  `}
                >
                  <p className={`text-black dark:text-white`}>{title}</p>
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
                    src={item.attachment}
                    alt={item.donature_name}
                    className="h-[350px] w-auto object-contain"
                  />
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white md:whitespace-normal">
                    {item.donature_name}
                  </h5>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{item.email}</p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{item.phone}</p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {item.total_donation}
                  </p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white md:whitespace-normal">
                    {item.donation.title}
                  </h5>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">{item.info}</p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      item.status === 'Diterima'
                        ? 'bg-success text-success'
                        : item.status === 'Gagal Diterima'
                        ? 'bg-danger text-danger'
                        : 'bg-yellow-400 text-yellow-700'
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
