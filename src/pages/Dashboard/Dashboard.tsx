import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import {
  CalendarRange,
  ClipboardList,
  HeartHandshake,
  Users,
} from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <CardDataStats title="Donasi Berjalan" total="3">
          <HeartHandshake />
        </CardDataStats>
        <CardDataStats title="Program Berjalan" total="3">
          <ClipboardList />
        </CardDataStats>
        <CardDataStats title="Kajian Berjalan" total="3">
          <CalendarRange />
        </CardDataStats>
        <CardDataStats title="Pengguna" total="3">
          <Users />
        </CardDataStats>
      </div>
    </>
  );
};

export default Dashboard;
