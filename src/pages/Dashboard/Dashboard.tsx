import React from 'react';
import CardDataStats from '../../components/CardDataStats';
import {
  CalendarRange,
  ClipboardList,
  HeartHandshake,
  Users,
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');

  return (
    <>
      <p className="text-2xl mb-10">
        Selamat datang, <span className="font-medium">{user.name}</span>
      </p>
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
