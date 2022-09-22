import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <>

    <div className="header">
      <ul className='header-list'>
        <li><Link to ="/">Home</Link></li>
        <li><Link to ="/time">Hooks</Link></li>
        <li><Link to ="/api">API</Link></li>
        <li><Link to ="/forms">Forms</Link></li>
        
      </ul>
    </div>
    </>
  )
}

export default Header;