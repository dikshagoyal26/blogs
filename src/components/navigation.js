import React from "react"
import {Link} from "gatsby"

export default (props) => (
  <nav className="navigation"> 
    {/* <Link to="/contact">Contact</Link> */}
    <a href="https://www.linkedin.com/in/dikshagoyal26/" target="_blank" title="linkedin"><img src="/assets/linkedin.svg"></img></a>
    <a href="https://github.com/dikshagoyal26/" target="_blank" title="github"><img src="/assets/github.svg"></img></a>
    <a href="https://twitter.com/dikshagoyal26" target="_blank" title="twitter"><img src="/assets/twitter.svg"></img></a>

  </nav>
  
)