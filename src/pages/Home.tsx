// React, Flowbite
import { useEffect, useRef, useState } from 'react';
import { Button, Flowbite, Spinner } from 'flowbite-react';
import { customTheme } from '../utils/FlowbiteThemesCustom';
import Marquee from 'react-fast-marquee';

// Icon
import {
  AllCategoryIcon,
  ArrowRight,
  DateIcon,
  EmailIcon,
  FacebookIcon,
  HumanCategoryIcon,
  InstagramIcon,
  KajianIcon,
  KajianOnlineIcon,
  LinkedinIcon,
  LiveIcon,
  LocationIcon,
  MasjidIcon,
  OfficeIcon,
  OnlineIcon,
  OthersCategoryIcon,
  PhoneIcon,
  WakafIcon,
  WhatsAppIcon,
  YoutubeIcon,
} from '../components/Icon';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Image
import LogoCQF from '../images/logo/logo.png';
import HeroImageOne from '../images/homepage/hero-image/hero-image-1.png';
import HeroImageTwo from '../images/homepage/hero-image/hero-image-2.png';
import HeroImageThree from '../images/homepage/hero-image/hero-image-3.png';
import HeroImageFour from '../images/homepage/hero-image/hero-image-4.png';
import BackgroundHero from '../images/background/background-hero.png';
import BackgroundProgram from '../images/background/background-program.png';
import BackgroundAmazingGroup from '../images/background/background-amazing-group.png';
import BackgroundFooter from '../images/background/background-footer.png';
import DonationBeras from '../images/homepage/donation/donation-beras.png';
import DonationGempa from '../images/homepage/donation/donation-gempa.png';
import DonationYatim from '../images/homepage/donation/donation-yatim.png';
import ZakatInformation from '../images/homepage/donation/zakat-image.svg';
import BarangBerkah from '../images/homepage/donation/barang-berkah.svg';
import AmazingBox from '../images/homepage/donation/amazing-box.svg';
import BacaQuran from '../images/homepage/program/indo-baca-quran.png';
import QuranCall from '../images/homepage/program/cinta-quran-call.png';
import KajianPerkantoran from '../images/homepage/program/kajian-perkantoran.png';
import MajelisCintaQuran from '../images/homepage/program/majelis-cinta-quran.png';
import QuranTV from '../images/homepage/program/cinta-quran-tv.png';
import KajianInspiratif from '../images/homepage/kajian/kajian-inspiratif.png';
import GroupOne from '../images/homepage/amazing-group/amazing-group-1.png';
import GroupTwo from '../images/homepage/amazing-group/amazing-group-2.png';
import GroupThree from '../images/homepage/amazing-group/amazing-group-3.png';
import BannerRegister from '../images/homepage/amazing-group/background-banner-register.png';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

// Component
import ContainerHome from '../layout/ContainerHome';
import DonationCard from '../components/Card/DonationCard';
import { getHomepage } from '../services/HomepageServices';
import ShowIcon from '../components/ShowIcon';
import {
  chunkArrayDonation,
  chunkArrayProgram,
  formatDateTime,
  getValidUrl,
} from '../utils/Helper';

type Donation = {
  thumbnail: string;
  title: string;
  total_collected: string;
  target_amount: string;
  due_date: string;
};

type CategoryData = {
  id: string;
  icon: string;
  name: string;
};

type programData = {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
};

type KajianData = {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: string;
  is_live: number;
  url: string;
  datetime: string;
};

type groupData = {
  id: string;
  name: string;
  logo: string;
};

function Home() {
  const swiperRefDonationDesktop = useRef<any>(null);
  const swiperRefDonationMobile = useRef<any>(null);
  const swiperRefProgramDesktop = useRef<any>(null);
  const swiperRefProgramMobile = useRef<any>(null);
  // Donation
  const [donations, setDonations] = useState<Donation[]>([]);
  const [donationDesktop, setDonationDesktop] = useState<Donation[][]>([]);
  const [categoryDonations, setCategoryDonations] = useState<CategoryData[]>(
    [],
  );
  const [categoryDonationSelected, setCategoryDonationSelected] =
    useState('all');
  // Donation

  // Program
  const [program, setProgram] = useState<programData[]>([]);
  const [programDesktop, setProgramDesktop] = useState<programData[][]>([]);
  // Program

  // Kajian
  const [kajian, setKajian] = useState<KajianData[]>([]);
  const [categoryKajian, setCategoryKajian] = useState<CategoryData[]>([]);
  const [categoryKajianSelected, setCategoryKajianSelected] = useState('all');
  // Kajian

  const [group, setGroup] = useState<groupData[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchHomepage = async () => {
    setLoading(true);

    try {
      const response = await getHomepage();

      // Donations
      const dataDonation = chunkArrayDonation(response.data.data.donations, 3);
      setDonationDesktop(dataDonation);
      setDonations(response.data.data.donations);
      setCategoryDonations(response.data.data.categoryDonation);
      // Donations

      // Program
      const dataProgram = chunkArrayProgram(response.data.data.programs, 5);
      setProgramDesktop(dataProgram);
      setProgram(response.data.data.programs);
      // Program

      // Kajian
      setKajian(response.data.data.kajians);
      setCategoryKajian(response.data.data.categoryKajian);

      // Group
      setGroup(response.data.data.groups);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomepage();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center my-4">
          <Spinner size="lg" />
        </div>
      ) : (
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
                    Menumbuhkan motivasi agar masyarakat mencintai Alquran
                    dengan program-program islami terbaik dan kreatif.
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
                      <p className="text-blue-cqf font-semibold text-xl">
                        +124
                      </p>
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
            <div className="py-6 px-8 md:mb-20 md:px-0">
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
                    onClick={() =>
                      swiperRefDonationDesktop.current?.slidePrev()
                    }
                    className="custom-prev bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition mr-4"
                  >
                    <ChevronLeft className="text-blue-500 w-5 h-5" />
                  </button>
                  <button
                    onClick={() =>
                      swiperRefDonationDesktop.current?.slideNext()
                    }
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
                {categoryDonations.map((categoryDonation) => {
                  return (
                    <Button
                      color={
                        categoryDonationSelected === categoryDonation.icon
                          ? 'btnCategoryActive'
                          : 'btnCategory'
                      }
                      key={categoryDonation.id}
                      pill={true}
                    >
                      <div className="flex items-center justify-center">
                        <ShowIcon value={categoryDonation.icon} />
                        <p>{categoryDonation.name}</p>
                      </div>
                    </Button>
                  );
                })}
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
                autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
                pagination={{
                  clickable: true,
                  el: '.custom-pagination-mobile',
                  renderBullet: (_index, className) => {
                    return `<span class="${className} custom-bullet-hero-mobile"></span>`;
                  },
                }}
                onSwiper={(swiper) =>
                  (swiperRefDonationDesktop.current = swiper)
                }
                modules={[Autoplay, Pagination]}
                className="hidden md:block"
              >
                {donationDesktop.map((donation, indexParent) => {
                  return (
                    <SwiperSlide
                      key={`donation-desktop-group-${indexParent}`}
                      className="grid grid-cols-1 md:grid-cols-3 md:gap-10 2.5xl:gap-40"
                    >
                      {donation.map((item, indexChild) => {
                        return (
                          <DonationCard
                            key={`donation-desktop-card-${indexChild}`}
                            image={item.thumbnail}
                            donationTitle={item.title}
                            donationTotal={item.total_collected}
                            targetAmount={item.target_amount}
                            remaining={item.due_date}
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
                onSwiper={(swiper) =>
                  (swiperRefDonationMobile.current = swiper)
                }
                modules={[Autoplay, Pagination]}
                className="block md:hidden"
              >
                {donations.map((item, indexParent) => (
                  <SwiperSlide
                    key={`donation-mobile-group-${indexParent}`}
                    className="grid grid-cols-1 md:grid-cols-3 md:gap-10 2.5xl:gap-40"
                  >
                    <DonationCard
                      key={`donation-mobile-card-${indexParent}`}
                      image={item.thumbnail}
                      donationTitle={item.title}
                      donationTotal={item.total_collected}
                      targetAmount={item.target_amount}
                      remaining={item.due_date}
                    />
                  </SwiperSlide>
                ))}

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
              src={BackgroundProgram}
              alt="background-program"
              className="absolute z-[-1] h-full w-full md:h-auto md:w-full top-[-280px] md:top-[-250px] lg:top-[-450px] 2.5xl:top-[-600px] left-0 object-cover md:object-contain"
            />
            <ContainerHome>
              {/* Program Title */}
              <div className="flex flex-col md:flex-row justify-center md:justify-between md:items-center mb-10">
                <div className="w-full mb-10 md:mb-0 md:w-[75%]">
                  <p className="text-5xl font-semibold text-black-cqf mb-4">
                    Program Pilihan
                  </p>
                  <p className="text-lg font-normal text-gray-cqf">
                    Program-program terbaik dari Cinta Quran Foundation untuk
                    Sahabat Cinta Quran.
                  </p>
                </div>
                {/* Custom Navigation Buttons Desktop */}
                <div className="hidden md:block">
                  <button
                    onClick={() => swiperRefProgramDesktop.current?.slidePrev()}
                    className="custom-prev bg-white border border-blue-cqf p-3 rounded-full shadow-md hover:bg-blue-100 transition mr-4"
                  >
                    <ChevronLeft className="text-blue-cqf w-5 h-5" />
                  </button>
                  <button
                    onClick={() => swiperRefProgramDesktop.current?.slideNext()}
                    className="custom-next bg-white border border-blue-cqf p-3 rounded-full shadow-md hover:bg-blue-100 transition"
                  >
                    <ChevronRight className="text-blue-cqf w-5 h-5" />
                  </button>
                </div>
                {/* Custom Navigation Buttons Desktop */}

                {/* Custom Navigation Buttons Mobile */}
                <div className="block md:hidden">
                  <button
                    onClick={() => swiperRefProgramMobile.current?.slidePrev()}
                    className="custom-prev bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition mr-4"
                  >
                    <ChevronLeft className="text-blue-500 w-5 h-5" />
                  </button>
                  <button
                    onClick={() => swiperRefProgramMobile.current?.slideNext()}
                    className="custom-next bg-white border border-blue-400 p-3 rounded-full shadow-md hover:bg-blue-100 transition"
                  >
                    <ChevronRight className="text-blue-500 w-5 h-5" />
                  </button>
                </div>
                {/* Custom Navigation Buttons Mobile */}
              </div>
              {/* Program Title */}

              {/* Program Content */}
              <div className="max-w-6xl mx-auto px-4 py-8">
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
                  onSwiper={(swiper) =>
                    (swiperRefProgramDesktop.current = swiper)
                  }
                  modules={[Autoplay, Pagination]}
                  className="hidden md:block"
                >
                  {programDesktop.map((program, indexParent) => {
                    return (
                      <SwiperSlide key={`program-desktop-${indexParent}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {/* Large Card */}
                          {program.length > 0 && (
                            <div className="md:col-span-2 relative overflow-hidden rounded-lg">
                              <img
                                src={program[0].thumbnail}
                                alt={program[0].title}
                                className="w-[360px] h-[300px] md:w-full md:h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-4">
                                  {program[0].title}
                                </h2>
                                <p className="text-lg">{program[0].subtitle}</p>
                              </div>
                            </div>
                          )}

                          {/* Medium Card */}
                          {program.length > 1 && (
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src={program[1].thumbnail}
                                alt={program[1].title}
                                className="w-[360px] h-[300px] md:w-full md:h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-4">
                                  {program[1].title}
                                </h2>
                                <p className="text-lg">{program[0].subtitle}</p>
                              </div>
                            </div>
                          )}

                          {/* Small Cards */}
                          {program.length > 2 && (
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src={program[2].thumbnail}
                                alt={program[2].title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 flex items-end justify-center text-white">
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-6">
                                  {program[2].title}
                                </h2>
                              </div>
                            </div>
                          )}

                          {program.length > 3 && (
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src={program[3].thumbnail}
                                alt={program[3].title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 flex items-end justify-center text-white">
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-6">
                                  {program[3].title}
                                </h2>
                              </div>
                            </div>
                          )}

                          {program.length > 4 && (
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src={program[4].thumbnail}
                                alt={program[4].title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 flex items-end justify-center text-white">
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-6">
                                  {program[4].title}
                                </h2>
                              </div>
                            </div>
                          )}
                          {/* Small Cards */}
                        </div>
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
                  onSwiper={(swiper) =>
                    (swiperRefProgramMobile.current = swiper)
                  }
                  modules={[Autoplay, Pagination]}
                  className="block md:hidden"
                >
                  {program.map((item, index) => {
                    return (
                      <SwiperSlide key={`program-mobile-${index}`}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {/* Large Card */}
                          {program.length > 0 && (
                            <div className="md:col-span-2 relative overflow-hidden rounded-lg">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-[360px] h-[300px] md:w-full md:h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6 text-white">
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-4">
                                  {item.title}
                                </h2>
                                <p className="text-lg">{item.subtitle}</p>
                              </div>
                            </div>
                          )}

                          {/* Medium Card */}
                          {program.length > 1 && (
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-[360px] h-[300px] md:w-full md:h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-4">
                                  {item.title}
                                </h2>
                                <p className="text-lg">{item.subtitle}</p>
                              </div>
                            </div>
                          )}

                          {/* Small Cards */}
                          {program.length > 2 && (
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 flex items-end justify-center text-white">
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-6">
                                  {item.title}
                                </h2>
                              </div>
                            </div>
                          )}

                          {program.length > 3 && (
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 flex items-end justify-center text-white">
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-6">
                                  {item.title}
                                </h2>
                              </div>
                            </div>
                          )}

                          {program.length > 4 && (
                            <div className="relative overflow-hidden rounded-lg">
                              <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-black/50 flex items-end justify-center text-white">
                                <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mb-6">
                                  {item.title}
                                </h2>
                              </div>
                            </div>
                          )}
                          {/* Small Cards */}
                        </div>
                      </SwiperSlide>
                    );
                  })}

                  {/* Custom Pagination */}
                  <div className="custom-pagination-mobile flex gap-[4px] justify-center mt-8"></div>
                </Swiper>
                {/* Mobile */}
              </div>
              {/* Program Content */}
            </ContainerHome>
          </div>
          {/* Program Pilihan */}

          {/* Kajian Inspiratif */}
          <div className="lg:mt-[180px]">
            <ContainerHome>
              {/* Title */}
              <div className="text-center mb-8">
                <p className="text-5xl font-semibold text-black-cqf mb-4">
                  Kajian Inpiratif
                </p>
                <p className="text-base">
                  Program kajian inspiratif dari kami untuk menemani aktivitas
                  Sahabat Cinta Qur'an.
                </p>
              </div>
              {/* Title */}

              {/* Kajian Category */}
              <div className="flex justify-between mb-10 overflow-x-auto lg:overflow-hidden pb-3 gap-4">
                <Button color="btnCategoryActive" pill={true}>
                  <div className="flex items-center justify-center">
                    <AllCategoryIcon active={true} className="mr-3" />
                    <p>Semua Kajian</p>
                  </div>
                </Button>
                {categoryKajian.map((categoryKajian) => {
                  return (
                    <Button
                      color={
                        categoryKajianSelected === categoryKajian.icon
                          ? 'btnCategoryActive'
                          : 'btnCategory'
                      }
                      key={categoryKajian.id}
                      pill={true}
                    >
                      <div className="flex items-center justify-center">
                        <ShowIcon value={categoryKajian.icon} />
                        <p>{categoryKajian.name}</p>
                      </div>
                    </Button>
                  );
                })}
                <Button color="btnCategory" pill={true}>
                  <div className="flex items-center justify-center">
                    <OthersCategoryIcon className="mr-3" />
                    <p>Lainnya</p>
                  </div>
                </Button>
              </div>
              {/* Kajian Category */}

              {/* Kajian Content */}
              <div className="max-w-6xl mx-auto px-4 py-8">
                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                  {/* Large Card */}
                  {kajian.length > 0 && (
                    <a
                      href={getValidUrl(kajian[0].url)}
                      target="_blank"
                      className="lg:col-span-3 lg:row-span-3 relative overflow-hidden rounded-lg"
                    >
                      <img
                        src={kajian[0].thumbnail}
                        alt={kajian[0].title}
                        className="w-full h-full object-cover"
                      />
                      {kajian[0].is_live === 1 && (
                        <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-md">
                          <div className="flex flex-row items-center animate-pulse">
                            <LiveIcon color="white" className="mr-2" />
                            <p>Sedang Berlangsung</p>
                          </div>
                        </div>
                      )}

                      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/100 to-transparent p-6 text-white">
                        <p className="text-sm opacity-80">
                          {kajian[0].subtitle}
                        </p>
                        <h2 className="text-2xl font-bold">
                          {kajian[0].title}
                        </h2>
                        <p className="text-yellow-300 font-semibold mt-2">
                          {formatDateTime(kajian[0].datetime, 'date')}
                        </p>
                        <p className="text-sm">
                          {formatDateTime(kajian[0].datetime, 'time')}
                        </p>
                      </div>
                    </a>
                  )}

                  {/* Small Card */}
                  {kajian.length > 1 &&
                    kajian.map((item, index) => {
                      return (
                        <a
                          href={getValidUrl(item.url)}
                          target="_blank"
                          className="relative overflow-hidden rounded-lg"
                          key={`kajian-small-card-${index}`}
                        >
                          <img
                            src={item.thumbnail}
                            alt="Cinta Quran Call"
                            className="w-full h-full object-cover brightness-75 grayscale"
                          />
                        </a>
                      );
                    })}
                </div>
              </div>
              {/* Kajian Content */}
            </ContainerHome>
          </div>
          {/* Kajian Inspiratif */}

          {/* Amazing Group */}
          <div className="relative mt-8 md:mt-[200px]">
            <img
              src={BackgroundAmazingGroup}
              alt="background-program"
              className="absolute z-[-1] top-[-160px] md:top-[-200px] lg:top-[-500px] 2.5xl:top-[-600px] left-0 h-full w-full md:h-auto md:w-full object-cover md:object-contain"
            />
            <ContainerHome>
              <p className="text-5xl font-semibold text-black-cqf text-center mb-8">
                Amazing Group
              </p>

              {/* List Client */}
              <div className="mb-20">
                <Marquee speed={60} direction="right" autoFill>
                  {group.map((item, index) => {
                    return (
                      <div
                        className="bg-white m-4 p-4 rounded-lg shadow-md"
                        key={`client-1-${index}`}
                      >
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-16 object-contain"
                        />
                      </div>
                    );
                  })}
                </Marquee>

                <Marquee speed={60} direction="left" autoFill>
                  {group.map((item, index) => {
                    return (
                      <div
                        className="bg-white m-4 p-4 rounded-lg shadow-md"
                        key={`client-1-${index}`}
                      >
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-16 object-contain"
                        />
                      </div>
                    );
                  })}
                </Marquee>
              </div>
              {/* List Client */}

              {/* Register */}
              <div className="relative h-[270px] bg-gradient-to-r from-blue-cqf to-green-cqf rounded-2xl p-6 text-white overflow-hidden flex flex-col items-center md:items-start md:justify-center">
                {/* Text Container */}
                <div className="relative z-10 max-w-xl flex flex-col justify-center">
                  <h2 className="text-3xl font-semibold mb-3">
                    Mari bergabung menjadi keluarga Cinta Quran Foundation agar
                    bisa berbagi dengan sesama
                  </h2>
                  <Button color="btnRegister" pill={true}>
                    <p className="mr-3 md:mr-4">Daftar Sekarang</p>
                    <div className="bg-blue-cqf rounded-full w-5 h-5 flex items-center justify-center">
                      <ArrowRight color="#FFFFFF" />
                    </div>
                  </Button>
                </div>

                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={BannerRegister}
                    alt="Quran"
                    className="w-full h-full object-cover opacity-30"
                  />
                </div>
              </div>
              {/* Register */}
            </ContainerHome>
          </div>
          {/* Amazing Group */}

          {/* Footer */}
          <div className="relative  py-6 px-8 md:px-0 mt-[80px]">
            <img
              src={BackgroundFooter}
              alt="background-program"
              className="absolute z-[-1] bottom-0 left-0 h-full w-full md:h-auto md:w-full object-cover md:object-contain"
            />
            <ContainerHome>
              <div className="grid grid-cols-1 lg:grid-cols-4">
                {/* CQF */}
                <div>
                  <img src={LogoCQF} alt="logo-cqf" />
                  <p className="text-base font-normal text-black-cqf my-8">
                    Cinta Quran Foundation adalah lembaga independen yang
                    mendakwahkan Alquran sebagai solusi dan inspirasi untuk
                    negeri.
                  </p>
                  <Button color="btnHero" pill={true} className="mb-16">
                    <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-3 md:mr-4">
                      <ArrowRight />
                    </div>
                    <p className="text-sm font-semibold">
                      Lihat Laporan CQ Foundation
                    </p>
                  </Button>
                </div>
                {/* CQF */}

                {/* Program */}
                <div className="flex flex-col mb-8 lg:mb-0 items-start lg:items-center text-base font-normal text-black-cqf">
                  <div className="text-left">
                    <p>Program</p>
                    <p>Donasi</p>
                    <p>Kajian</p>
                    <p>Kemitraan</p>
                    <p>Inspirasi</p>
                  </div>
                </div>
                {/* Program */}

                {/* Kebijakan */}
                <div className="flex flex-col mb-8 lg:mb-0 items-start lg:items-center text-base font-normal text-black-cqf">
                  <div className="text-left">
                    <p>Volunteer</p>
                    <p>Tentang Kami</p>
                    <p>FAQ</p>
                    <p>Syarat & Ketentuan</p>
                    <p>Kebijakan Privasi</p>
                  </div>
                </div>
                {/* Kebijakan */}

                {/* Contact */}
                <div>
                  {/* Location */}
                  <div className="flex mb-3">
                    <LocationIcon className="mr-3 md:mr-0 lg:mr-3" />
                    <p className="text-base font-normal text-black-cqf">
                      Jl. Parikesit Raya No.35-37 Bantarjati, Bogor Utara, Kota
                      Bogor 16153, Jawa Barat, Indonesia.
                    </p>
                  </div>
                  {/* Location */}

                  {/* Email */}
                  <div className="flex items-center mb-3">
                    <EmailIcon className="mr-3" />
                    <p className="text-base font-normal text-black-cqf">
                      info@cintaquran.or.id
                    </p>
                  </div>
                  {/* Email */}

                  {/* Phone */}
                  <div className="flex mb-3">
                    <PhoneIcon className="mr-3" />
                    <p className="text-base font-normal text-black-cqf">
                      (0251) 85 717 62
                    </p>
                    <Button color="btnWA" pill={true} className="ml-5">
                      <p className="mr-3">Hubungi Kami</p>
                      <WhatsAppIcon />
                    </Button>
                  </div>
                  {/* Phone */}

                  {/* Follow Us */}
                  <div>
                    <p className="text-base font-semibold text-black-cqf">
                      Ikuti kami di
                    </p>
                    <div className="flex my-3">
                      <div className=" mr-3 flex justify-center items-center h-7 w-7 rounded-full bg-[#636363]">
                        <FacebookIcon />
                      </div>
                      <div className=" mr-3 flex justify-center items-center h-7 w-7 rounded-full bg-[#636363]">
                        <YoutubeIcon />
                      </div>
                      <div className=" mr-3 flex justify-center items-center h-7 w-7 rounded-full bg-[#636363]">
                        <InstagramIcon />
                      </div>
                      <div className="flex justify-center items-center h-7 w-7 rounded-full bg-[#636363]">
                        <LinkedinIcon />
                      </div>
                    </div>
                  </div>
                  {/* Follow Us */}
                </div>
                {/* Contact */}
              </div>
              <p className="text-sm font-normal text-black-cqf">
                © Copyright CintaQuran® Foundation All Rights Reserved.
              </p>
            </ContainerHome>
          </div>
          {/* Footer */}
        </Flowbite>
      )}
    </div>
  );
}

export default Home;
