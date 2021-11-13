import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    const navToggle = document.querySelector('.nav-toggle')!;
    const menuItem = document.querySelector('.menu-item')!;

    navToggle.addEventListener('click', () => {
      menuItem.classList.toggle('toggle');
      navToggle.classList.toggle('active');
    });
  }, []);

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
