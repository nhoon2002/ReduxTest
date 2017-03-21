import React from 'react';
import { Link } from 'react-router';
import Header from './Header.jsx';

const Main = React.createClass({
   render() {
      return (
         <div>
            <Header/>
            <h1>
               <Link to="/">Reduxstagram</Link>
            </h1>
            {React.cloneElement(this.props.children, this.props)}
         </div>
      )
   }
});

export default Main;
