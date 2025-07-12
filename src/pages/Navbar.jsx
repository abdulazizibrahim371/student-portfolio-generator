import { Link } from "react-router-dom";
const Navbar = () => {
    return( 
        <nav className="absolute top-4 left-6 right-6 z-50 flex justify-between items-center">
                <Link to="/" className="text-xl font-bold text-white">PortfolioGen</Link>
                <div className="hidden md:flex space-x-4">
                  <Link to="/" className="text-white hover:text-gray-200">Home</Link>
                  <Link to="/features" className="text-white hover:text-gray-200">Features</Link>
                  <Link to="/about" className="text-white hover:text-gray-200">About</Link>
                  <Link to="/contact" className="text-white hover:text-gray-200">Contact</Link>
                  {/* <Link to="/create" className="text-gray-700 hover:text-purple-600">Create</Link> */}
                  <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
        
                </div>
              </nav>
    )
}

export default Navbar;