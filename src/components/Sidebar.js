import React from 'react';
import './Sidebar.css';
import logo from './logo-learnlab.png'; 
import home from '../sidebar-logos/icons8-home-24.png';
import book from '../sidebar-logos/icons8-book-24.png';
import left from '../sidebar-logos/icons8-left-24.png';
import community from '../sidebar-logos/icons8-community-24.png';
import hackerrank from '../sidebar-logos/icons8-hackerrank-24.png';
import logout from '../sidebar-logos/icons8-logout-24.png';
import assessment from '../sidebar-logos/icons8-document-24.png';
const Sidebar = () => {
  return (
     
<div className="sidebar">
  <div className='logo-icon'>
    <img src={logo} alt="LearnLab Logo" className="sidebar-logo"/> 
  </div>
  
  <ul className="sidebar-nav">
    <li className="nav-item">
      <a href="#" className="nav-link-active" style={{paddingTop:'12px'}}><img src={home} alt="Home icon" className='sidebar-icons' style={{marginRight:"10px", marginLeft:"10px"}}/>Dashboard</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link"><img src={assessment} alt="Assessment icon" className='sidebar-icons' style={{marginRight:"10px", marginLeft:"10px"}} />Assessments</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link"><img src={hackerrank} alt="Assessment icon" className='sidebar-icons' style={{marginRight:"10px", marginLeft:"10px"}}/>Global Platform Assessments</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link"><img src={book} alt="Assessment icon" className='sidebar-icons' style={{marginRight:"10px", marginLeft:"10px"}}/>Courses</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link"><img src={community} alt="Assessment icon" className='sidebar-icons' style={{marginRight:"10px", marginLeft:"10px"}}/>Live Session</a>
    </li>
    <li className="nav-item">
      <a href="#" className="nav-link"><img src={logout} alt="Assessment icon" className='sidebar-icons' style={{marginRight:"10px", marginLeft:"10px"}}/>Logout</a>
    </li>
  </ul>
  
   
</div>


  );
};

export default Sidebar;
