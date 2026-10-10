import type { Locale } from '../locales/sv';

type HeaderProps = {
  nav: Locale['nav'];
};

function Header({ nav }: HeaderProps) {
  return (
    <nav className="py-4 md:py-6 text-foreground">
      <ul className="flex gap-6 md:gap-8 uppercase font-black justify-between">
        <li>
          <a href="#case" className="text-foreground hover:text-orange">
            {nav.case}
          </a>
        </li>
        <li>
          <a href="#skills" className="text-foreground hover:text-orange">
            {nav.skills}
          </a>
        </li>
        <li>
          <a href="#bingo" className="text-foreground hover:text-orange">
            {nav.bingo}
          </a>
        </li>
        <li>
          <a href="#contact" className=" text-foreground hover:text-orange">
            {nav.contact}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
