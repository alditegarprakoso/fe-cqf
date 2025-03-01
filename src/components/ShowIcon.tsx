import { useEffect, useState } from 'react';
import HumanCategoryIcon from './Icon/HumanCategoryIcon';
import KajianIcon from './Icon/KajianIcon';
import LiveIcon from './Icon/LiveIcon';
import MasjidIcon from './Icon/MasjidIcon';
import OfficeIcon from './Icon/OfficeIcon';
import OthersCategoryIcon from './Icon/OthersCategoryIcon';
import WakafIcon from './Icon/WakafIcon';
import OnlineIcon from './Icon/OnlineIcon';
import DateIcon from './Icon/DateIcon';

interface ShowIconProps {
  value?: string;
  active?: boolean;
}

// Daftar icon
const icons: Record<string, React.ElementType> = {
  HumanCategoryIcon,
  KajianIcon,
  OnlineIcon,
  LiveIcon,
  MasjidIcon,
  WakafIcon,
  DateIcon,
  OfficeIcon,
  OthersCategoryIcon,
};

export default function ShowIcon({ value, active }: ShowIconProps) {
  const [selectedIcon, setSelectedIcon] = useState<string | undefined>(value);

  useEffect(() => {
    setSelectedIcon(value);
  }, [value]);

  const SelectedIcon = selectedIcon ? icons[selectedIcon] : null;

  return (
    <div className="space-y-4">
      {/* Show Selected Icon */}
      <div>
        {SelectedIcon ? (
          <SelectedIcon
            size={24}
            className="mr-3"
            color={active ? '#389ED9' : '#636363'}
          />
        ) : (
          <p className="text-gray-500">Icon tidak ditemukan</p>
        )}
      </div>
    </div>
  );
}
