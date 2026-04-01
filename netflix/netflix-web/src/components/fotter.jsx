import './fotter.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
export function Fotter() {
  return (
    <div className='fotter'>
       <div className="fotter-icon">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      <div className="fotter-container">
       
        <div>
          <ul>
            <li>Audio Description</li>
            <li>Invest Relation</li>
            <li>Legal Notice</li>
            <li>Service Code</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use </li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <span className='copyright'>
      &copy;  2026 Netflix Inc.
      </span> 
    </div>
  );
}