import Navbar from "@components/Navbar";
import { NavItem } from "@interfaces/nav";

type HeaderProps = {
  data: NavItem[];
};

const Header = ({ data }: HeaderProps) => (
  <header>
    <Navbar data={data} />
  </header>
);

export default Header;
