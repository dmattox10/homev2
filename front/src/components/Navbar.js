import styled from 'styled-components'

const MenuToggle = styled.div`
	position: fixed;
	top: 2.5rem;
	right: 2.5rem;
	color: #eeeeee;
	font-size: 3rem;
	cursor: pointer;
	z-index: 1000;
	display: none;
`
const Nav = styled.nav`
	padding: 2rem 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-transform: uppercase;
	font-size: 1.6rem;
`
const Navbar = props => {
  const { menus, visibleSection } = props
  return (
    <article className="module desktop-12 tablet-12">
      <header>
        <MenuToggle class="menu-toggle" id="hamburger">
          <i class="fas fa-bars"></i>
        </MenuToggle>
        <div class="overlay"></div>
        <div class="container">
          <Nav>
            <h1 class="brand"><a href="index.html">D<span>a</span>niel&nbsp;M<span>a</span>ttox</a></h1>
            <ul>
            {menus.map((menuItem, index) => (
                                    <li
                                        key={index}
                                        className=""
                                    >
                                        <a className={visibleSection === menuItem.section ? "active" : "false"}
                                            href={`#${menuItem.section}`}>{menuItem.text}</a>
                                    </li>
                                ))}
            </ul>
          </Nav>
        </div>
      </header>
    </article>
  )
}

export default Navbar