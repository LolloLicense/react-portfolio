import Cv from './Cv';
import type { Locale } from '../../locales/sv';
import { motion } from 'motion/react';

type cvModalProps = {
  cv: Locale['cv'];
  onClose: () => void;
  onContactClick: () => void;
};

function CvModal({ cv, onClose, onContactClick }: cvModalProps) {
  return (
    <motion.div
      className='fixed inset-0 z-40 overflow-y-auto'
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ duration: 0.85, ease: 'easeInOut' }}
    >
      <Cv cv={cv} onClose={onClose} onContactClick={onContactClick} />
    </motion.div>
  );
}
export default CvModal;
