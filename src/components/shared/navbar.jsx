import { Topnav } from "./topnavbar";
import { Search } from "./search";

export const Navbar = () => {
  return (
    <div>
      <div>
        <Topnav />
        <div className="md:hidden">
          <Search />
        </div>
      </div>
    </div>
  );
};
