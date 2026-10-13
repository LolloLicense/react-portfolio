type CaseCardProps = {
  title: string;
  label: string;
  year: string;
  image: string;
  alt: string;
  url: string;
  number: number;
};

function CaseCard({
  title,
  label,
  year,
  image,
  alt,
  url,
  number,
}: CaseCardProps) {
  return (
    <article className="w-full">
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={image}
            alt={alt}
            className="w-full aspect-square object-cover"
          />
        </a>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-h6 mt-2 mb-[0.2rem] font-bold uppercase">
            {title}
          </h3>
          <span className="text-sm font-bold">
            {String(number).padStart(2, '0')}
          </span>
        </div>
        <div className="caseDesc flex justify-between items-end">
          <p className="caseLabel">{label}</p>
          <p className="text-xs opacity-50">{year}</p>
        </div>
      </div>
    </article>
  );
}

export default CaseCard;
