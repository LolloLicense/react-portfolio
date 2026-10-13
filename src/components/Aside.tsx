import MailIcon from './icons/MailIcon';
import GitHubIcon from './icons/GitHubIcon';
import LinkedIn from './icons/LinkedIn';
import MoonIcon from './icons/MoonIcon';
import SunIcon from './icons/SunIcon';

type AsideProps = {
  language: 'sv' | 'eng';
  setLanguage: (language: 'sv' | 'eng') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  onContactClick: () => void;
};

function Aside({
  language,
  setLanguage,
  theme,
  setTheme,
  onContactClick,
}: AsideProps) {
  const toggleLanguage = () => {
    setLanguage(language === 'sv' ? 'eng' : 'sv');
  };
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <aside
      aria-label='Länkar'
      className='fixed top-1/4 left-0 z-40 -translate-y-1/2 bg-foreground px-2 py-4 rounded-r-lg'
    >
      <nav className='flex flex-col items-center gap-3'>
        <ul className='flex flex-col gap-3'>
          <li>
            <button
              type='button'
              onClick={onContactClick}
              aria-label='Öppna kontaktformulär'
              className='text-background transition-colors hover:text-orange'
            >
              <MailIcon />
            </button>
          </li>
          <li>
            <a
              href='https://github.com/LolloLicense'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Besök Louise Sverkströms GitHub-profil'
              className='text-background transition-colors hover:text-orange'
            >
              <GitHubIcon />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/louise-sverkstr%C3%B6m-208634271/'
              className='text-background transition-colors hover:text-orange'
              aria-label='LinkedIn'
              rel='noopener noreferrer'
            >
              <LinkedIn />
            </a>
          </li>
        </ul>
        {/* themetoggle */}
        <button
          type='button'
          onClick={toggleTheme}
          aria-label={
            theme === 'light' ? 'Byt till mörkt tema' : 'Byt till ljust tema'
          }
          className='text-background transition-colors hover:text-orange'
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
        {/* Language toggle*/}
        <button
          type='button'
          onClick={toggleLanguage}
          aria-label='Byt språk'
          className='font-body text-background font-bold text-sm uppercase transition-colors hover:text-orange'
        >
          {language === 'sv' ? 'SV' : 'EN'}
        </button>
      </nav>
    </aside>
  );
}

export default Aside;
