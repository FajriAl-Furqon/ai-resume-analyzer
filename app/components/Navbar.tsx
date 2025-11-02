import { Link } from "react-router"

const Navbar = () => {
    return (
        // Menambahkan bar navigasi
        <nav className="navbar">
            {/* Menambahkan logo RESUMIND */}
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">RESUMIND</p>
            </Link>
            {/* Menambahkan tombol upload resume */}
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>
    )
}

export default Navbar