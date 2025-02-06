// import React from 'react'

// export default function NavBar(props) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="/">{props.title}</a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/">{props.about}</a>
//           </li>
//         </ul>
//         <form className="d-flex">
//           {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-outline-success" type="submit">Search</button> */}
//           <span><h5><b>Created by Arachana Kumari</b></h5></span>
//         </form>
//       </div>
//     </div>
//   </nav>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom';  // ✅ Import Link

export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>  {/* ✅ Use Link instead of <a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">{props.home}</Link>  {/* ✅ Use Link */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.about}</Link>  {/* ✅ Fixed navigation */}
            </li>
          </ul>
          <form className="d-flex">
            <span><h5><b>Created by Archana Kumari</b></h5></span>
          </form>
        </div>
      </div>
    </nav>
  );
}
