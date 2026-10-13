import Cv from './Cv';
import type { Locale } from '../../locales/sv';

type cvModalProps = {
  cv: Locale['cv'];
  onClose: () => void;
  onContactClick: () => void;
};

function CvModal({ cv, onClose, onContactClick }: cvModalProps) {
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto">
      <Cv cv={cv} onClose={onClose} onContactClick={onContactClick} />
    </div>
  );
}
export default CvModal;
