import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="bg-pucered p-4 text-blue">
  <nav className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
    
    <ul className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0">

      <li>
        <Link to='/' className="hover:opacity-30 transition">
          <img src="home.svg" alt="Home" className="h-8 w-auto"/>
        </Link>
      </li>

      <li>
        <Link to='/playlist' className="hover:opacity-30 transition">
          <img src="p1.svg" alt="Playlist" className="h-8 w-auto"/>
        </Link>
      </li>
      
      <li>
        <Link to='/remains' className="hover:opacity-30 transition">
          <img src="p2.svg" alt="Remains" className="h-8 w-auto"/>
        </Link>
      </li>

      <li>
        <Link to='/letter' className="hover:opacity-30 transition">
          <img src="p3.svg" alt="Remains" className="h-8 w-auto"/>
        </Link>
      </li>

    </ul>
  </nav>
</header>
  )
}