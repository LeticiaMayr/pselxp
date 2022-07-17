import React from "react";

function Header() {
  const quotedUser = localStorage.getItem('lastUser')
  const lastUser = quotedUser.slice(1, quotedUser.length - 1); // Remove quotes from email required from local storage
  return (
    <header>
      Usuário: {lastUser}
    </header>
  );
};

export default Header;
