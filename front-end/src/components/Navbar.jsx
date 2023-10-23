import styled from 'styled-components'
import { useEffect } from 'react'
import { useScrollDirection } from '../hooks/useScrollDirection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faPlus, faX } from '@fortawesome/free-solid-svg-icons'
import { useScreenWidth } from '../hooks/useScreenWidth';
import StyledIcon from './StyledIcon'
// const MenuToggle = styled.div`
// 	position: fixed;
// 	top: 2.5rem;
// 	right: 2.5rem;
// 	color: #eeeeee;
// 	font-size: 3rem;
// 	cursor: pointer;
// 	z-index: 1000;
//     display: none;
// `
// const Nav = styled.nav`
// 	padding: 2rem 0;
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	text-transform: uppercase;
// 	font-size: 1.6rem;
// `

const NavItemDown = styled.a`
    &:before{
        top: 0;
        transform-origin: left;
    }
    &:after{
        bottom: 0;
        transform-origin: left;
        }
    }
`

const NavItemUp = styled.a`
&:before{
	top: 0;
	transform-origin: right;
}

&:after{
	bottom: 0;
	transform-origin: right;
}
`

const Navbar = props => {
    const { menus, visibleSection, headerRef, navOpen, setNavOpen } = props
    const scrollDirection = useScrollDirection(headerRef);
    // let NavItem = NavItemDown
    // useEffect(() => {
    //     if (scrollDirection === 'up') {
    //         NavItem = NavItemUp
    //     } else {
    //         NavItem = NavItemDown
    //     }
    // }, [scrollDirection])

    function toggleNav() {
        setNavOpen(prevNav => !prevNav)
        console.log(isMobile)
    }
    let isMobile = useScreenWidth()
    let NavItems = (
        <ul>
            {menus.map((menuItem, index) => (
                <li
                    key={index}
                    className=""
                >
                    {
                        scrollDirection === 'down' ?
                            <NavItemDown onClick={() => toggleNav()} className={visibleSection === menuItem.section ? "active" : "false"}
                                href={`#${menuItem.section}`}>{menuItem.text}</NavItemDown>
                            :
                            <NavItemUp onClick={() => toggleNav()} className={visibleSection === menuItem.section ? "active" : "false"}
                                href={`#${menuItem.section}`}>{menuItem.text}</NavItemUp>
                    }
                </li>
            ))}
        </ul>
    )
    return (
        <header className={isMobile ? ` ${navOpen ? 'menu-open' : ''}` : ''}>

            {/* <div className="menu-toggle" id="hamburger" onClick={() => toggleNav()}>
                {navOpen ?  <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}
            </div> */}
            <div className={isMobile ? `overlay ${navOpen ? 'menu-open' : ''}` : 'overlay'}></div>
            <div className="container">
                <nav className={isMobile ? ` ${navOpen ? 'menu-open' : ''}` : ''}>
                    <h1 className="brand">
                        <a onClick={() => toggleNav()} href='#'>D<span>a</span>niel&nbsp;M<span>a</span>tto
                            {
                                isMobile ?
                                    navOpen ?
                                        <StyledIcon>
                                            <FontAwesomeIcon color='white' icon={faX} />
                                        </StyledIcon>
                                        :
                                        <StyledIcon>
                                            <FontAwesomeIcon color='white' icon={faPlus} />
                                        </StyledIcon>
                                    :
                                    navOpen ?
                                        <StyledIcon>
                                            <FontAwesomeIcon color='white' icon={faPlus} />
                                        </StyledIcon>
                                        :
                                        <StyledIcon>
                                            <FontAwesomeIcon color='white' icon={faX} />
                                        </StyledIcon>
                            }
                        </a>
                    </h1>
                    {
                        isMobile ?
                            navOpen ?
                                NavItems
                                :
                                <></>
                            :
                            NavItems
                    }
                </nav>
            </div>


        </header>
    )
}

export default Navbar