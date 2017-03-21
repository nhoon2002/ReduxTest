import React from 'react';
import { Link } from 'react-router';

const Header = React.createClass({
   render() {
      return (
         <nav className="navbar navbar-default">
         <div className="container-fluid">

           <div className="navbar-header">
             <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
               <span className="sr-only">Toggle navigation</span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
               <span className="icon-bar"></span>
             </button>
               <img src='http://placehold.it/200x50?text=logo' className="Header-logo" alt="logo" />

           </div>


           <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             <ul className="nav navbar-nav">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/">ToDo</Link></li>
               <li><Link to="/">Profile</Link></li>
               {/* <li><AsyncExample/></li> */}

             </ul>

             <ul className="nav navbar-nav navbar-right">
               <li className="notifications-bar">
                 <button className="btn btn-primary" type="button">Notifications
                   <span className="badge">4</span>
                 </button>
               </li>
               <li>
                 <img className='navbar-profilepic img-circle' src='http://placehold.it/50x50' alt='profilepic'/>
               </li>
               <li><a href="#">Logout</a></li>


             </ul>
           </div>
         </div>
       </nav>
      )
   }
});

export default Header;
