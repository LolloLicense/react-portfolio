import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';
import CaseCard from './CaseCard';
import type { Case } from '../../types/case';

type CaseSliderProps = {
  cases: Case[];
};

function CaseSlider({ cases }: CaseSliderProps) {
  return (
    <Swiper
      modules={[Keyboard]}
      slidesPerView={1}
      spaceBetween={16}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      }}
    >
      {cases.map((caseItem, index) => (
        <SwiperSlide key={caseItem.title}>
          <CaseCard {...caseItem} number={index + 1} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default CaseSlider;
