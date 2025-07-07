import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="bg-pucered p-4 text-blue">
  <nav className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
    <h1 className="text-xl font-bold">Miri's Bday</h1>
    <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">
      <li>
        <Link to='/' className="hover:text-gray-200 transition">Home</Link>
      </li>
      <li>
        <Link to='/playlist' className="hover:text-gray-200 transition">Playlist</Link>
      </li>
      <li>
        <Link to='/remains' className="hover:text-gray-200 transition">Remains</Link>
      </li>
      <li>
        <Link to='/letter' className="hover:text-gray-200 transition">Letter</Link>
      </li>
    </ul>
  </nav>
</header>
  )
}