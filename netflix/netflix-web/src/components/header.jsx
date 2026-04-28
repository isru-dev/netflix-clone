import './header.css';
import logo from '../assets/netlogo.png';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export function Header() {
  return (
    <div className="header">
      <div className='header-container'>
        <div className='left-side'>
       

          <ul className='nav-links'>
             <img src={logo} alt="netflix logo" className='img' />
            <li>Home</li>
            <li>TvShows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>MyList</li>
            <li>Browse By Languages</li>
          </ul>

        </div>
        <div className='header-right'>
          <ul>
            <li><SearchIcon /></li>
            <li><NotificationsNoneIcon /></li>
            <li><AccountBoxIcon /></li>
            <li><ArrowDropDownIcon /></li>
          </ul>
        </div>
      </div>
    </div>

  );
}