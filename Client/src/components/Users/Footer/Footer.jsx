import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import "./Footer.css"
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  const handleGoHome = ()=> {
    navigate('/home')
}
  return (
    <div className='bg-wwbrown w-screen footerWw text-wwwhite'>
      <div className='flex'>
        <div className='flex w-1/3 items-center justify-center'>
        <div>
         <button onClick={handleGoHome} className="mx-auto w-20"><img src="https://images2.imgbox.com/41/5c/UX8ZYgxS_o.png" alt="Wizarding Wares" /></button>
        </div>
        </div>
        <div className='w-1/3'>
          <h4>Información</h4>
          <Link to="/nosotros" className="footer-link">Nosotros</Link>
          <br />
          <Link to="/faq" className="footer-link">FAQ</Link>
        </div>
        <div className='w-1/3'>
          <h4>Legal</h4>
          <Link to="/terminosYCondiciones" className="footer-link">Términos y Condiciones</Link>
          <br />
          <Link to="/politicaDePrivacidad" className="footer-link">Política de Privacidad</Link>
        </div>
      </div>
      <div>
        <p>2023 - Wizarding Wares | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;