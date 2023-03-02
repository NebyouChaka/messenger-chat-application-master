import React from "react";
import { Link,useNavigate } from 'react-router-dom';

function NavBar() {
  return (
    <div className='frontSide'>
      <span >
        <Link to="/messenger/login" className="link-color"> Login </Link>
        </span>
      <span ><Link to="/messenger/register" className="link-color1"> Register </Link></span>

    </div>
  );
}

export default NavBar;