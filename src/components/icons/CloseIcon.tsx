type CloseIconProps = {
  className?: string;
};

function CloseIcon({ className }: CloseIconProps) {
  return (
    <svg
      className={`pointer-events-none ${className ?? ''}`}
      width='14'
      height='14'
      viewBox='0 0 14 14'
      fill='none'
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0.999994 1.00001L12.3137 12.3137M12.3137 1.00001L0.999994 12.3137'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
        pointerEvents='none'
      />
    </svg>
  );
}

export default CloseIcon;
