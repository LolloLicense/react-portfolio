type HeaderProps = {
  nav: {
    case: string;
    skills: string;
    bingo: string;
    contact: string;
  };
};

function Header({ nav }: HeaderProps) {
  return (
    <nav className="p-6">
      <ul className="flex gap-8 uppercase font-black justify-between">
        <li>
          <a href="#case" className="hover:text-orange">
            {nav.case}
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-orange">
            {nav.skills}
          </a>
        </li>
        <li>
          <a href="#bingo" className="hover:text-orange">
            {nav.bingo}
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-orange">
            {nav.contact}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
