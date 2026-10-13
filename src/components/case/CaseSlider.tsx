import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard } from 'swiper/modules';
import 'swiper/css';
import CaseCard from './CaseCard';
import type { Case } from '../../types/case';
import { motion } from 'motion/react';

type CaseSliderProps = {
  cases: Case[];
};

function CaseSlider({ cases }: CaseSliderProps) {
  return (
    <motion.div
      key={cases.map((caseItem) => caseItem.title).join('-')}
      initial={{ x: 30 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      <Swiper
        modules={[Keyboard]}
        slidesPerView={1.15}
        spaceBetween={16}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.15,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3.15,
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
    </motion.div>
  );
}

export default CaseSlider;
