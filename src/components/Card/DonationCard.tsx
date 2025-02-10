import { Progress } from 'flowbite-react';

type ProgressProps = {
  image: string;
  donationTitle: string;
  donationTotal: string;
  remaining: string;
};

export default function DonationCard(props: ProgressProps) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white mx-auto">
      {/* Gambar */}
      <img
        src={props.image}
        alt="Bantu Bencana Gempa"
        className="w-full h-[360px] object-cover"
      />

      {/* Konten */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {props.donationTitle}
        </h2>

        {/* Dana Terkumpul & Sisa Waktu */}
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4 mt-8">
          <div>
            <p>Dana Terkumpul</p>
            <p className="text-blue-cqf font-semibold">Rp {props.donationTotal}</p>
          </div>
          <div className="text-right">
            <p>Sisa Waktu</p>
            <p className="text-blue-cqf font-semibold">{props.remaining}</p>
          </div>
        </div>

        <Progress progress={45} size="sm" color="progressCqf" />
      </div>
    </div>
  );
}
