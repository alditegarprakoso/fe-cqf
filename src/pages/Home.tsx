// React, Flowbite
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

// Image
import HeroImageOne from '../images/homepage/hero-image/hero-image-1.png';
import HeroImageTwo from '../images/homepage/hero-image/hero-image-2.png';
import HeroImageThree from '../images/homepage/hero-image/hero-image-3.png';
import HeroImageFour from '../images/homepage/hero-image/hero-image-4.png';
import BackgroundHero from '../images/background/background-hero.png';
import DonationBeras from '../images/homepage/donation/donation-beras.png';
import DonationGempa from '../images/homepage/donation/donation-gempa.png';
import DonationYatim from '../images/homepage/donation/donation-yatim.png';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ContainerHome from '../layout/ContainerHome';
import DonationCard from '../components/Card/DonationCard';

function Home() {
  return (
    <div>
      <Flowbite theme={{ theme: customTheme }}>
        {/* Hero Section */}
        <div className="relative mb-[130px]">
          <img
            src={BackgroundHero}
            alt="background-hero"
            className="absolute z-[-1] top-[-50px] md:top-[-200px] 2.5xl:top-[-400px] left-0 w-full md:h-auto md:w-full object-contain"
          />
          <ContainerHome>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-8 items-center px-3 md:px-0">
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
          <div className="py-6">
            {/* Donasi Title */}
            <div className="flex justify-between items-center mb-10">
              <div>
                <p className="text-5xl font-semibold text-black-cqf mb-4">
                  Donasi Pilihan
                </p>
                <p className="text-lg font-normal">
                  Pilih dan salurkan donasi melalui program-program kami yang
                  berarti bagi sahabat Cinta quran.
                </p>
              </div>
              <div>Arrow</div>
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
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-10 2.5xl:gap-40'>
              <DonationCard image={DonationBeras} donationTitle='Sedekah Beras untuk seluruh para keluarga di afrika selatan' donationTotal='0' remaining='30 Hari Lagi' />
              <DonationCard image={DonationGempa} donationTitle='Bantu Bencana Gempa dengan Kebutuhan Pokok' donationTotal='500.000.124' remaining='2 Hari Lagi' />
              <DonationCard image={DonationYatim} donationTitle='Penyaluran Bantuan untuk Anak Yatim dan Dhuafa' donationTotal='235.366.942' remaining='11 Hari Lagi' />
            </div>
            {/* Donasi List */}
          </div>
        </ContainerHome>
        {/* Donasi Section */}
      </Flowbite>
    </div>
  );
}

export default Home;
