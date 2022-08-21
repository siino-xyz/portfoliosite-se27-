import Button from "components/button";
import Link from "next/link";
import { useState } from "react";
import { sprinkles } from "styles";

const Header = () => {
  const menuItems = [
    { id: 1, title: "トップ", href: "./" },
    { id: 2, title: "Web制作/開発", href: "./" },
    { id: 3, title: "委託開発", href: "./" },
    { id: 4, title: "ブログ", href: "./" },
    { id: 5, title: "コンタクト", href: "./" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button>開閉</button>
      <nav
        className={sprinkles({
          background: "gray2",
          position: "absolute",
        })}
      >
        <ul
          className={sprinkles({
            display: "flex",
            flexDirection: {
              mobile: "column",
              tablet: "column",
              desktop: "row",
            },
            listStyleType: "none",
            gap: "size-6",
            justifyContent: "flex-end",
          })}
        >
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>
                <a>
                  <p>{item.title}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
