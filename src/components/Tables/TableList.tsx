import { Button, Modal } from 'flowbite-react';
import { CircleAlert, Pencil, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface TableListProps {
  tableTitle: string[];
  dataDonation: {
    image: string;
    donationTitle: string;
    donationTotal: string;
    donationCategory: string;
    donationStatus: string;
    remaining: string;
  }[];
  editPath: string;
}

const TableList = (props: TableListProps) => {
  const { tableTitle, dataDonation, editPath } = props;
  const [openModal, setOpenModal] = useState(false);

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
                    title === 'Donasi' && 'min-w-[250px] md:w-[50%]'
                  }`}
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
            {dataDonation.map((donation, key) => (
              <tr key={key} className="border-b last:border-b-0">
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
                    {key + 1}
                  </h5>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark w-full md:w-[50%]">
                  <h5 className="font-medium text-black dark:text-white md:whitespace-normal">
                    {donation.donationTitle}
                  </h5>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {donation.donationCategory}
                  </p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {donation.donationTotal}
                  </p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium ${
                      donation.donationStatus === 'Aktif'
                        ? 'bg-success text-success'
                        : donation.donationStatus === 'Tidak Aktif'
                        ? 'bg-danger text-danger'
                        : 'bg-gray-300 text-gray-700'
                    }`}
                  >
                    {donation.donationStatus}
                  </p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <Button
                      as={Link}
                      to={`${editPath}/${key}`}
                      color="btnAction"
                    >
                      <Pencil />
                    </Button>
                    <button
                      className="hover:text-danger"
                      aria-label="Delete"
                      onClick={() => setOpenModal(true)}
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
            <CircleAlert width={50} height={50} color='red' className='mb-5' />
            <h3 className="mb-5 text-lg font-normal text-black dark:text-white">
              Apakah kamu yakin ingin menghapus data ini?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
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
