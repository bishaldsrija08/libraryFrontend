import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="bg-white shadow">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="flex items-center gap-2 text-teal-600 font-bold text-xl">
              <svg className="h-8 w-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.41 10.3847C..." fill="currentColor" />
              </svg>
              BookNest
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <Link to="/" className="hover:text-teal-600 transition">Home</Link>
            <Link to="/create" className="hover:text-teal-600 transition">Create</Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 focus:outline-none" onClick={() => alert("Add mobile menu logic here")}>
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}
                   viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
