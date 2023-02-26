import React from "react";

const Header = () => {
  const menuLinks = [
    { name: "Home", link: "/" },
    { name: "Browse by", link: "/browseby" },
    { name: "Stories", link: "/stories" },
    { name: "Agents", link: "/agents" },
  ];

  return (
    <header className="header flex mx-auto justify-between items-center p-[3rem] w-full py-6 mb-12 border-b">
      <div className="logoDiv">
        <button className="text-[30px] text-primary">
          <strong className="text-secondary" href="/" type="link">
            Stay
          </strong>
          cation.
        </button>
      </div>
      <ul className="menu flex gap-4 text-lg">
        {menuLinks?.map((menu, i) => (
          <li key={i}>
            <a href={menu?.link}>{menu?.name}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
