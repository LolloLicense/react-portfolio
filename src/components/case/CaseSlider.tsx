import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';

import cases from '../../data/case.json';
import CaseCard from './CaseCard';

function CaseSlider() {
  return (
    <Swiper
      modules={[Keyboard]}
      slidesPerView={3}
      spaceBetween={16}
      keyboard={{
        enabled: true,
        onlyInViewport: true,
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
