// React, Flowbite
import { useRef } from 'react';
import { Button, Flowbite } from 'flowbite-react';
import { customTheme } from '../utils/FlowbiteThemesCustom';

// Icon
import {
  AllCategoryIcon,
  ArrowRight,
  HumanCategoryIcon,
  KajianIcon,
  KajianOnlineIcon,
  MasjidIcon,
  OthersCategoryIcon,
  WakafIcon,
} from '../components/Icon';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Image
import HeroImageOne from '../images/homepage/hero-image/hero-image-1.png';
import HeroImageTwo from '../images/homepage/hero-image/hero-image-2.png';
import HeroImageThree from '../images/homepage/hero-image/hero-image-3.png';
import HeroImageFour from '../images/homepage/hero-image/hero-image-4.png';
import BackgroundHero from '../images/background/background-hero.png';
import DonationBeras from '../images/homepage/donation/donation-beras.png';
import DonationGempa from '../images/homepage/donation/donation-gempa.png';
import DonationYatim from '../images/homepage/donation/donation-yatim.png';
import ZakatInformation from '../images/homepage/donation/zakat-image.svg';
import BarangBerkah from '../images/homepage/donation/barang-berkah.svg';
import AmazingBox from '../images/homepage/donation/amazing-box.svg';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Component
import ContainerHome from '../layout/ContainerHome';
import DonationCard from '../components/Card/DonationCard';

function Home() {
  const swiperRefDonationDesktop = useRef<any>(null);
  const swiperRefDonationMobile = useRef<any>(null);

  const dataDonation = [
    [
      {
        image: DonationBeras,
        donationTitle:
          'Sedekah Beras untuk seluruh para keluarga di afrika selatan',
        donationTotal: '0',
        remaining: '30 Hari Lagi',
      },
      {
        image: DonationGempa,
        donationTitle: 'Bantu Bencana Gempa dengan Kebutuhan Pokok',
        donationTotal: '500.000.124',
        remaining: '2 hari lagi',
      },
      {
        image: DonationYatim,
        donationTitle: 'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa',
        donationTotal: '235.366.942',
        remaining: '11 Hari Lagi',
      },
    ],
    [
      {
        image: DonationBeras,
        donationTitle:
          'Sedekah Beras untuk seluruh para keluarga di afrika selatan',
        donationTotal: '0',
        remaining: '30 Hari Lagi',
      },
      {
        image: DonationGempa,
        donationTitle: 'Bantu Bencana Gempa dengan Kebutuhan Pokok',
        donationTotal: '500.000.124',
        remaining: '2 hari lagi',
      },
      {
        image: DonationYatim,
        donationTitle: 'Penyaluran Bantuan untuk Anak Yatim dan Dhuafa',
        donationTotal: '235.366.942',
        remaining: '11 Hari Lagi',
      },
    ],
  ];

  return (
    <div>
      <Flowbite theme={{ theme: customTheme }}>
        {/* Hero Section */}
        <div className="relative mb-[130px]">
          <img
            src={BackgroundHero}
            alt="background-hero"
            className="absolute z-[-1] top-[-50px] md:top-[-200px] 2.5xl:top-[-400px] left-0 h-full w-full md:h-auto md:w-full object-cover md:object-contain"
          />
          <ContainerHome>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-8 items-center px-8 md:px-0">
              {/* Left Section */}
              <div className="mb-10 md:w-[70%] md:mx-auto lg:mx-0">
                <p className="text-3xl md:text-5xl text-black-cqf font-bold mb-5">
                  Dukung Program Dakwah Syiar Qur'an Project.
                </p>

                <p className="text-lg mb-8">
                  Menumbuhkan motivasi agar masyarakat mencintai Alquran dengan
                  program-program islami terbaik dan kreatif.
                </p>

                <Button color="btnHero" pill={true} className="mb-16">
                  <p className="mr-3 md:mr-4">Donasi Sekarang</p>
                  <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center">
                    <ArrowRight />
                  </div>
                </Button>

                <div className="flex justify-between">
                  <div>
                    <KajianIcon />
                    <p className="text-gray-cqf my-2">Kajian Perkantoran</p>
                    <p className="text-blue-cqf font-semibold text-xl">+124</p>
                  </div>
                  <div>
                    <MasjidIcon />
                    <p className="text-gray-cqf my-2">Majelis Cinta Quran</p>
                    <p className="text-blue-cqf font-semibold text-xl">+43</p>
                  </div>
                  <div>
                    <KajianOnlineIcon />
                    <p className="text-gray-cqf my-2">Kajian Online</p>
                    <p className="text-blue-cqf font-semibold text-xl">+92</p>
                  </div>
                </div>
              </div>
              {/* Left Section */}

              {/* Right Section */}
              <div>
                {/* Swiper Desktop */}
                <Swiper
                  direction="vertical"
                  slidesPerView={1}
                  spaceBetween={300}
                  autoplay={{ delay: 3000 }}
                  pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    renderBullet: (_index, className) => {
                      return `<span class="${className} custom-bullet-hero-desktop"></span>`;
                    },
                  }}
                  modules={[Autoplay, Pagination]}
                  className="h-[600px] w-full hidden md:block"
                >
                  <SwiperSlide>
                    <div>
                      <div className="flex justify-center items-center gap-8">
                        <img src={HeroImageOne} alt="Slide 1" />
                        <img src={HeroImageTwo} alt="Slide 1" />
                      </div>
                      <div className="flex justify-center items-center gap-8">
                        <img src={HeroImageThree} alt="Slide 1" />
                        <img src={HeroImageFour} alt="Slide 1" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="flex justify-center items-center gap-8">
                        <img src={HeroImageOne} alt="Slide 1" />
                        <img src={HeroImageTwo} alt="Slide 1" />
                      </div>
                      <div className="flex justify-center items-center gap-8">
                        <img src={HeroImageThree} alt="Slide 1" />
                        <img src={HeroImageFour} alt="Slide 1" />
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div>
                      <div className="flex justify-center items-center gap-8">
                        <img src={HeroImageOne} alt="Slide 1" />
                        <img src={HeroImageTwo} alt="Slide 1" />
                      </div>
                      <div className="flex justify-center items-center gap-8">
                        <img src={HeroImageThree} alt="Slide 1" />
                        <img src={HeroImageFour} alt="Slide 1" />
                      </div>
                    </div>
                  </SwiperSlide>

                  {/* Custom Pagination */}
                  <div className="custom-pagination absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col gap-[4px]"></div>
                </Swiper>
                {/* Swiper Desktop */}

                {/* Swiper Mobile */}
                <Swiper
                  slidesPerView={1}
                  spaceBetween={300}
                  autoplay={{ delay: 3000 }}
                  pagination={{
                    clickable: true,
                    el: '.custom-pagination-mobile',
                    renderBullet: (_index, className) => {
                      return `<span class="${className} custom-bullet-hero-mobile"></span>`;
                    },
                  }}
                  modules={[Autoplay, Pagination]}
                  className="md:hidden"
                >
                  <SwiperSlide>
                    <img
                      src={HeroImageOne}
                      alt="Slide 1"
                      className="h-[300px] object-contain mx-auto"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={HeroImageTwo}
                      alt="Slide 1"
                      className="h-[300px] object-contain mx-auto"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={HeroImageThree}
                      alt="Slide 1"
                      className="h-[300px] object-contain mx-auto"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src={HeroImageFour}
                      alt="Slide 1"
                      className="h-[300px] object-contain mx-auto"
                    />
                  </SwiperSlide>

                  {/* Custom Pagination */}
                  <div className="custom-pagination-mobile flex gap-[4px] justify-center mt-8"></div>
                </Swiper>
                {/* Swiper Mobile */}
              </div>
              {/* Right Section */}
            </div>
          </ContainerHome>
        </div>
        {/* Hero Section */}

        {/* Donasi Section */}
        <ContainerHome>
          <div className="py-6 px-8 md:px-0">
            {/* Donasi Title */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center mb-10">
              <div className="w-full mb-10 md:mb-0 md:w-[75%]">
                <p className="text-5xl font-semibold text-black-cqf mb-4">
                  Donasi Pilihan
                </p>
                <p className="text-lg font-normal">
                  Pilih dan salurkan donasi melalui program-program kami yang
                  berarti bagi sahabat Cinta quran.
                </p>
              </div>
              {/* Custom Navigation Buttons Desktop */}
              <div className="hidden md:block">
                <button
                  onClick={() => swiperRefDonationDesktop.current?.slidePrev()}
                  className="custom-prev bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition mr-4"
                >
                  <ChevronLeft className="text-blue-500 w-5 h-5" />
                </button>
                <button
                  onClick={() => swiperRefDonationDesktop.current?.slideNext()}
                  className="custom-next bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition"
                >
                  <ChevronRight className="text-blue-500 w-5 h-5" />
                </button>
              </div>
              {/* Custom Navigation Buttons Desktop */}
              {/* Custom Navigation Buttons Mobile */}
              <div className="block md:hidden">
                <button
                  onClick={() => swiperRefDonationMobile.current?.slidePrev()}
                  className="custom-prev bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition mr-4"
                >
                  <ChevronLeft className="text-blue-500 w-5 h-5" />
                </button>
                <button
                  onClick={() => swiperRefDonationMobile.current?.slideNext()}
                  className="custom-next bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition"
                >
                  <ChevronRight className="text-blue-500 w-5 h-5" />
                </button>
              </div>
              {/* Custom Navigation Buttons Mobile */}
            </div>
            {/* Donasi Title */}

            {/* Donasi Category */}
            <div className="flex justify-between mb-10 overflow-x-auto pb-3 gap-4">
              <Button color="btnCategoryActive" pill={true}>
                <div className="flex items-center justify-center">
                  <AllCategoryIcon active={true} className="mr-3" />
                  <p>Semua Kategori</p>
                </div>
              </Button>
              <Button color="btnCategory" pill={true}>
                <div className="flex items-center justify-center">
                  <HumanCategoryIcon className="mr-3" />
                  <p className="mt-1">Kemanusiaan</p>
                </div>
              </Button>
              <Button color="btnCategory" pill={true}>
                <div className="flex items-center justify-center">
                  <MasjidIcon className="mr-3" />
                  <p className="mt-1">IBBQ</p>
                </div>
              </Button>
              <Button color="btnCategory" pill={true}>
                <div className="flex items-center justify-center">
                  <WakafIcon className="mr-3" />
                  <p className="mt-1">Wakaf</p>
                </div>
              </Button>
              <Button color="btnCategory" pill={true}>
                <div className="flex items-center justify-center">
                  <OthersCategoryIcon className="mr-3" />
                  <p>Lainnya</p>
                </div>
              </Button>
            </div>
            {/* Donasi Category */}

            {/* Donasi List */}
            {/* Desktop */}
            <Swiper
              slidesPerView={1}
              spaceBetween={300}
              autoplay={{ delay: 3000 }}
              pagination={{
                clickable: true,
                el: '.custom-pagination-mobile',
                renderBullet: (_index, className) => {
                  return `<span class="${className} custom-bullet-hero-mobile"></span>`;
                },
              }}
              onSwiper={(swiper) => (swiperRefDonationDesktop.current = swiper)}
              modules={[Autoplay, Pagination]}
              className="hidden md:block"
            >
              {dataDonation.map((donations, _key1) => {
                return (
                  <SwiperSlide
                    key={_key1}
                    className="grid grid-cols-1 md:grid-cols-3 md:gap-10 2.5xl:gap-40"
                  >
                    {donations.map((donation, _key2) => {
                      return (
                        <DonationCard
                          key={_key2}
                          image={donation.image}
                          donationTitle={donation.donationTitle}
                          donationTotal={donation.donationTotal}
                          remaining={donation.remaining}
                        />
                      );
                    })}
                  </SwiperSlide>
                );
              })}

              {/* Custom Pagination */}
              <div className="custom-pagination-mobile flex gap-[4px] justify-center mt-8"></div>
            </Swiper>
            {/* Desktop */}

            {/* Mobile */}
            <Swiper
              slidesPerView={1}
              spaceBetween={300}
              autoplay={{ delay: 3000 }}
              pagination={{
                clickable: true,
                el: '.custom-pagination-mobile',
                renderBullet: (_index, className) => {
                  return `<span class="${className} custom-bullet-hero-mobile"></span>`;
                },
              }}
              onSwiper={(swiper) => (swiperRefDonationMobile.current = swiper)}
              modules={[Autoplay, Pagination]}
              className="block md:hidden"
            >
              {dataDonation.map((donationGroup, indexParent) =>
                donationGroup.map((donation, indexChild) => (
                  <SwiperSlide
                    key={`slide-${indexParent}-${indexChild}`}
                    className="grid grid-cols-1 md:grid-cols-3 md:gap-10 2.5xl:gap-40"
                  >
                    <DonationCard
                      key={`card-${indexParent}-${indexChild}`}
                      image={donation.image}
                      donationTitle={donation.donationTitle}
                      donationTotal={donation.donationTotal}
                      remaining={donation.remaining}
                    />
                  </SwiperSlide>
                )),
              )}

              {/* Custom Pagination */}
              <div className="custom-pagination-mobile flex gap-[4px] justify-center mt-8"></div>
            </Swiper>
            {/* Mobile */}
            {/* Donasi List */}

            {/* Donation Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 mt-13 md:gap-10">
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <img
                  src={ZakatInformation}
                  alt="zakat-information"
                  className="mr-4"
                />
                <div className="my-8 text-center lg:text-left">
                  <p className="font-semibold text-2xl text-black-cqf">
                    Zakat 100%
                  </p>
                  <p className="font-normal text-base mt-2 mb-6">
                    Tunaikan Zakat Anda melalui Program Zakat 100% Amanah.
                  </p>
                  <a href="#" className="font-medium text-base text-blue-cqf">
                    Selengkapnya
                  </a>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <img
                  src={BarangBerkah}
                  alt="zakat-information"
                  className="mr-4"
                />
                <div className="my-8 text-center lg:text-left">
                  <p className="font-semibold text-2xl text-black-cqf">
                    Barang Berkah
                  </p>
                  <p className="font-normal text-base mt-2 mb-6">
                    Yuk berikan barang bekas yang masih layak pakai untuk
                    sahabat kita.
                  </p>
                  <a href="#" className="font-medium text-base text-blue-cqf">
                    Selengkapnya
                  </a>
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-center items-center">
                <img
                  src={AmazingBox}
                  alt="zakat-information"
                  className="mr-4"
                />
                <div className="my-8 text-center lg:text-left">
                  <p className="font-semibold text-2xl text-black-cqf">
                    Amazing Box
                  </p>
                  <p className="font-normal text-base mt-2 mb-6">
                    Isi penuh Amazing Box selama 1 bulan, kembalikan kepada
                    kami.
                  </p>
                  <a href="#" className="font-medium text-base text-blue-cqf">
                    Selengkapnya
                  </a>
                </div>
              </div>
            </div>
            {/* Donation Information */}
          </div>
        </ContainerHome>
        {/* Donasi Section */}

        {/* Program Pilihan */}
        <div className="relative py-6 px-8 md:px-0">
          <img
            src={BackgroundHero}
            alt="background-hero"
            className="absolute z-[-1] top-[-50px] md:top-[-200px] 2.5xl:top-[-400px] left-0 h-full w-full md:h-auto md:w-full object-cover md:object-contain"
          />
          <ContainerHome>
            {/* Program Title */}
            <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center mb-10">
              <div className="w-full mb-10 md:mb-0 md:w-[75%]">
                <p className="text-5xl font-semibold text-black-cqf mb-4">
                  Donasi Pilihan
                </p>
                <p className="text-lg font-normal">
                  Pilih dan salurkan donasi melalui program-program kami yang
                  berarti bagi sahabat Cinta quran.
                </p>
              </div>
              {/* Custom Navigation Buttons Desktop */}
              <div className="hidden md:block">
                <button
                  onClick={() => swiperRefDonationDesktop.current?.slidePrev()}
                  className="custom-prev bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition mr-4"
                >
                  <ChevronLeft className="text-blue-500 w-5 h-5" />
                </button>
                <button
                  onClick={() => swiperRefDonationDesktop.current?.slideNext()}
                  className="custom-next bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition"
                >
                  <ChevronRight className="text-blue-500 w-5 h-5" />
                </button>
              </div>
              {/* Custom Navigation Buttons Desktop */}

              {/* Custom Navigation Buttons Mobile */}
              <div className="block md:hidden">
                <button
                  onClick={() => swiperRefDonationMobile.current?.slidePrev()}
                  className="custom-prev bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition mr-4"
                >
                  <ChevronLeft className="text-blue-500 w-5 h-5" />
                </button>
                <button
                  onClick={() => swiperRefDonationMobile.current?.slideNext()}
                  className="custom-next bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition"
                >
                  <ChevronRight className="text-blue-500 w-5 h-5" />
                </button>
              </div>
              {/* Custom Navigation Buttons Mobile */}
            </div>
          </ContainerHome>
          {/* Program Title */}
        </div>
        {/* Program Pilihan */}
      </Flowbite>
    </div>
  );
}

export default Home;
