import { Pencil, Trash2 } from 'lucide-react';
import DonationBeras from '../../images/homepage/donation/donation-beras.png';
import DonationGempa from '../../images/homepage/donation/donation-gempa.png';
import DonationYatim from '../../images/homepage/donation/donation-yatim.png';

const dataDonation = [
  {
    image: DonationBeras,
    donationTitle:
      'Sedekah Beras untuk seluruh para keluarga di afrika selatan',
    donationTotal: '0',
    donationCategory: 'Test Category',
    donationStatus: 'Aktif',
    remaining: '30 Hari Lagi',
  },
  {
    image: DonationGempa,
    donationTitle: 'Bantu Bencana Gempa dengan Kebutuhan Pokok',
    donationTotal: '500.000.124',
    donationCategory: 'Test Category',
    donationStatus: 'Aktif',
    remaining: '2 hari lagi',
  },
  {
    image: DonationYatim,
    donationTitle: 'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa',
    donationTotal: '235.366.942',
    donationCategory: 'Test Category',
    donationStatus: 'Aktif',
    remaining: '11 Hari Lagi',
  },
];

const TableList = (props: any) => {
  const { tableTitle } = props;
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
                    title === 'Donasi' && 'md:w-[50%]'
                  }`}
                >
                  {title}
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
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <h5 className="font-medium text-black dark:text-white">
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
                        : 'bg-warning text-warning'
                    }`}
                  >
                    {donation.donationStatus}
                  </p>
                </td>
                <td className="border-[#eee] py-5 px-4 dark:border-strokedark">
                  <div className="flex items-center space-x-3.5">
                    <button className="hover:text-blue-cqf">
                      <Pencil />
                    </button>
                    <button className="hover:text-danger">
                      <Trash2 />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
