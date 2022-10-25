<header>
  <nav>
    <ahref="#">LOGO</ahref>
    <ul>
      <li>HOME</li>
      <li>ABOUT</li>
      <li>SERVICES</li>
      <li>TESTIMONIALS</li>
      <li>CONTACT</li>
    </ul>
  </nav>
</header>

* {
  margin: 0;
}

header {
  padding: 4rem;
  background: lightgray;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  display: flex;
  list-style: none;
  align-items: center;
  gap: .8rem;
}

ul li:last-child {
  background: black;
  color: white;
  padding: .8rem;
}
