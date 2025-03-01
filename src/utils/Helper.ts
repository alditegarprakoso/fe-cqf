type Donation = {
  thumbnail: string;
  title: string;
  total_collected: string;
  target_amount: string;
  due_date: string;
};

type programData = {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
};

// Function untuk membagi data ke dalam array berisi 3 item per grup
export const chunkArrayDonation = (
  data: Donation[],
  chunkSize: number,
): Donation[][] => {
  return data.reduce((acc: Donation[][], _, i) => {
    if (i % chunkSize === 0) {
      acc.push(data.slice(i, i + chunkSize));
    }
    return acc;
  }, []);
};

export const chunkArrayProgram = (
  data: programData[],
  chunkSize: number,
): programData[][] => {
  return data.reduce((acc: programData[][], _, i) => {
    if (i % chunkSize === 0) {
      acc.push(data.slice(i, i + chunkSize));
    }
    return acc;
  }, []);
};

export const formatDateTime = (datetime: string, type: string): string => {
  const dateObj = new Date(datetime);

  const date = new Intl.DateTimeFormat('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(dateObj);

  const time = new Intl.DateTimeFormat('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false, // Format 24 jam
  }).format(dateObj); // 14:30

  if (type === 'date') {
    return date;
  } else {
    return time;
  }
};

export const getValidUrl = (url: string) => {
  return url.startsWith('http') ? url : `https://${url}`;
};

export const formatRupiah = (angka: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0, // Tanpa desimal
  }).format(angka);
};

export const hitungSisaHari = (tanggalBerakhir: string): string => {
  const sekarang = new Date();
  const berakhir = new Date(tanggalBerakhir);

  const selisih = Math.ceil(
    (berakhir.getTime() - sekarang.getTime()) / (1000 * 60 * 60 * 24),
  );

  return selisih > 0 ? `${selisih} Hari Lagi` : 'Berakhir';
};
