// React, Flowbite
import { Button, Flowbite } from 'flowbite-react';
import { customTheme } from '../utils/FlowbiteThemesCustom';

// Icon
import {
  ArrowRight,
  KajianIcon,
  KajianOnlineIcon,
  MasjidIcon,
} from '../components/Icon';

// Image
import HeroImageOne from '../images/homepage/hero-image/hero-image-1.png';
import HeroImageTwo from '../images/homepage/hero-image/hero-image-2.png';
import HeroImageThree from '../images/homepage/hero-image/hero-image-3.png';
import HeroImageFour from '../images/homepage/hero-image/hero-image-4.png';
import BackgroundHero from '../images/background/background-hero.png';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ContainerHome from '../layout/ContainerHome';

function Home() {
  return (
    <div>
      <Flowbite theme={{ theme: customTheme }}>
        {/* Hero Section */}
        <div className="relative lg:h-[100vh]">
          <img
            src={BackgroundHero}
            alt="background-hero"
            className="absolute z-[-1] top-[-50px] md:top-[-300px] left-0 h-full md:h-auto md:w-full object-cover"
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
          <div className="mt-25">
            <p className="text-5xl font-semibold text-black-cqf mb-4">
              Donasi Pilihan
            </p>
            <p className="text-lg font-normal">
              Pilih dan salurkan donasi melalui program-program kami yang
              berarti bagi sahabat Cinta quran.
            </p>
          </div>
        </ContainerHome>
        {/* Donasi Section */}
      </Flowbite>
    </div>
  );
}

export default Home;
