import { Offline, Online } from "react-detect-offline"

import { useAuthStore } from "../../hooks"

export const Navbar = () => {
  const { user, startLogout } = useAuthStore()

  return (
    <div className='navbar navbar-dark bg-dark mg-4 px-4'>
      <span className='navbar-brand'>
        <i className='fas fa-calendar-alt' />
        &nbsp;
        {user.name}
      </span>

      <Online>
        <span className='text-success'>Online</span>
      </Online>
      <Offline>
        <span className='text-danger'>Offline</span>
      </Offline>

      <button className='btn btn-outline-danger' onClick={startLogout}>
        <i className='fas fa-sign-out-alt'></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  )
}
