import { TbRainbow } from 'react-icons/tb';

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className='footer footer-center text-primary-content p-10'>
      <div className='hover:text-accent '>
        <TbRainbow className='text-5xl' />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
