export default function Navbar() {
  return (
    <nav id='nav'>
      <div className='nav-container'>
        <div className='nav-toggle'>
          <p></p>
        </div>
        <ul className='menu-item'>
          <li>
            <a className='navItem' href='#skills'>
              Skills
            </a>
          </li>
          <li>
            <a className='navItem' href='#projects'>
              Projects
            </a>
          </li>
          <li>
            <a className='navItem' href='#contact'>
              Send me a Message
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
