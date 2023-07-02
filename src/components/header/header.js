import { useState } from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () => {
  const [active, setActive] = useState(1);

  return (
    <header>
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-semibold">Sotnikov</h2>
        <div className="flex justify-between items-center">
          <input type="text" placeholder="Search here..." />
          <ul className="flex gap-4">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`${link.id === active && "active"}`}
                onClick={() => setActive(link.id)}
              >
                <li className="list-menu">{link.link}</li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

const links = [
  {
    id: 1,
    link: "Posts",
    path: "/",
  },
  {
    id: 2,
    link: "Albums",
    path: "/albums",
  },
  {
    id: 3,
    link: "Todos",
    path: "/todos",
  },
];

export default Header;
