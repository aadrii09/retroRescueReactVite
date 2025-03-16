const Footer = () => {
  return (
    <footer className="nes-container is-dark p-6 text-center mt-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="nes-text is-primary">Mi Tienda Retro</h3>
        <p className="nest-text is-warning">
          &copy; {new Date().getFullYear()} - Todos los derechos reservados
        </p>
      </div>

      <div>
        <h4 className="nes-text is-primary">Enlaces rápidos</h4>
        <ul className="!list-none p-0">
          <li>
            <a href="#" className="nes-text is-success">🎮 Tienda</a>
          </li>
          <li>
            <a href="#" className="nes-text is-success">ℹ️ Sobre nosotros</a>
          </li>
          <li>
            <a href="#" className="nes-text is-success">📥 Contacto</a>
          </li>
        </ul>
      </div>

      <div>
        <h4 className="nes-text is-primary">Síguenos</h4>
        <div className="flex gap-3 justify-center">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon facebook is-large"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <i className="nes-icon instagram is-large"></i>
          </a>
        </div>
        {/* contact */}
        <div>
          <h4>📞 Contacto</h4>
          <p className="text-gray-300">✉️ Email: <a href="adriancastrobeiro@gmail.com">adriancastrobeiro@gmail.com</a></p>
          <p className="text-gray-300">☎️ Tel: +1234567989</p>
          <p className="text-gray-300">🏠 Ubicación: A Coruña, Galicia, Spain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
