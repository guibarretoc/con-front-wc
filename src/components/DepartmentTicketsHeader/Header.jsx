import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';
import logo from "../../../public/favicon.ico";
import profilepic from "../../assets/funcionario/perfil.png"
import getEmployeeData from '../../services/employee/getEmployeeData';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogoutClick = () => {
    navigate('/login')
    sessionStorage.clear()
  }

  const handleLogoClick = () => {
    navigate('/funcionario');
  }

  const handleTicketsClick = () => {
    navigate('/department-tickets');
  }

  const handleMensagensClick = () => {

  }

  const handleHistoricoClick = () => {

  }

  const getEmployeeInfo = async() => {
    try {
        let name = await getEmployeeData(sessionStorage.getItem("userId"))
        if (name) {
            sessionStorage.setItem("username", name);
            setUsername(name);
        }
    } catch (error) {
        console.log(error)
    }
};

  useEffect(() => {
    getEmployeeInfo();
}, []);

  if (!username) {
    return <div>Loading...</div>;
  }

  return (
    <header className="bg-[#379E53] text-slate-50">
      <nav aria-label="Global" className="mx-auto flex items-center justify-between py-1 lg:py-0">
        <div className="flex ml-8 lg:mr-8">
          <h2 className= "text-2xl" id={"logo"} onClick={handleLogoClick}>WayClient</h2>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className=" -ml-16 inline-flex items-center justify-center rounded-md p-2.5 text-slate-50 bg-inherit"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>

        {/* Redirects */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 ml-auto">
          <a onClick={handleTicketsClick} className="text-base font-semibold leading-6 text-slate-50 cursor-pointer">
            Tickets
          </a>
          <a onClick={handleMensagensClick} className="text-base font-semibold leading-6 text-slate-50 cursor-pointer">
            Mensagens
          </a>
          <a onClick={handleHistoricoClick} className="text-base font-semibold leading-6 text-slate-50 cursor-pointer">
            Histórico
          </a>
        </PopoverGroup>

        {/* Search bar */}
        <input
          type='text'
          placeholder='Pesquisar'
          className="hidden lg:flex h-6 ml-8 px-2 rounded-md text-sm text-gray-800 bg-slate-50"
        />

        {/* Profile */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="lg:flex bg-[#245631] text-slate-50 rounded-l-full">
            <img 
              className="w-16"
              src={profilepic}
            />
            <p className='flex items-center px-4 text-inherit'>
              {username}
            </p>
            <div className="flex cursor-pointer " onClick={toggleDropdown}>
              {dropdownVisible ? <ChevronUpIcon className="w-8"/> : <ChevronDownIcon className="w-8"/>}
            </div>
            {dropdownVisible && (
              <div className="absolute right-0 mt-16 w-44 bg-[#245631] rounded-l-sm shadow-lg z-10">
                <ul>
                  <li className="hover:bg-slate-50 hover:text-gray-800 px-4 py-2 cursor-pointer">
                    Perfil
                  </li>
                  <li className="hover:bg-slate-50 hover:text-gray-800 px-4 py-2 cursor-pointer"
                    onClick={handleLogoutClick}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

      </nav>

      {/* MOBILE MENU */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-slate-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">WayClient</span>
              <img
                alt="Logo do WayClient"
                src={logo}
                onClick={handleLogoClick}
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 bg-slate-50"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  onClick={handleTicketsClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-[#379E53]"
                >
                  Tickets
                </a>
                <a
                  onClick={handleMensagensClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-[#379E53]"
                >
                  Mensagens
                </a>
                <a
                  onClick={handleHistoricoClick}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:text-[#379E53]"
                >
                  Histórico
                </a>
              </div>
              <div className="py-6">
                <a
                  onClick={handleLogoutClick}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:text-[#379E53]"
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
