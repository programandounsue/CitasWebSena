
import './PieDePagina.css';

const PieDePagina = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Citas Médicas |  Arley Torres & Isabel Alvarez</p>
        <div className="footer-links">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default PieDePagina;
