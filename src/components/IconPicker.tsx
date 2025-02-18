import { useState } from 'react';
import HumanCategoryIcon from './Icon/HumanCategoryIcon';
import KajianIcon from './Icon/KajianIcon';
import LiveIcon from './Icon/LiveIcon';
import MasjidIcon from './Icon/MasjidIcon';
import OfficeIcon from './Icon/OfficeIcon';
import OthersCategoryIcon from './Icon/OthersCategoryIcon';
import WakafIcon from './Icon/WakafIcon';
import OnlineIcon from './Icon/OnlineIcon';
import DateIcon from './Icon/DateIcon';

interface IconPickerProps {
  value?: string;
  onChange: (icon: string) => void;
}

// Daftar icon
const icons = {
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

export default function IconPicker({ value, onChange }: IconPickerProps) {
  const [selectedIcon, setSelectedIcon] = useState<string | undefined>(value);

  const handleSelect = (iconKey: string) => {
    setSelectedIcon(iconKey);
    onChange(iconKey); // Kirim data ke parent
  };

  return (
    <div className="space-y-4">
      {/* Grid Icon */}
      <div className="flex flex-wrap gap-4">
        {Object.entries(icons).map(([key, Icon]) => (
          <button
            key={key}
            onClick={() => handleSelect(key)}
            className={`border p-3 rounded-lg transition ${
              selectedIcon === key
                ? 'border-blue-500 bg-blue-100'
                : 'border-gray-300'
            }`}
          >
            <Icon
              size={24}
              color={selectedIcon === key ? '#389ED9' : '#636363'}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
