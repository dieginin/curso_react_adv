import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router"

import logo from "../logo.svg"

const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? "nav-active" : ""

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React logo' />
          <ul>
            <li>
              <NavLink to='/' className={getNavLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='about' className={getNavLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='users' className={getNavLinkClass}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='about' element={<h1>About</h1>} />
          <Route path='users' element={<h1>Users</h1>} />
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
