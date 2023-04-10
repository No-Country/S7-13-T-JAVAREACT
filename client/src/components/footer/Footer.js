const Footer = () => {
  return (
    <div className="bg-[#050829] py-8">
      <div className="grid grid-cols-3 gap-8  mx-10 max-w-7xl ">
        {/* col 1 */}
        <div className="flex items-start flex-col ">
          <h2 className="text-white my-2 my-2">PortaCode</h2>
          <p className="text-gray-400 my-2">PortFolio Maker</p>
          <p className="text-gray-400 my-2">Logo</p>
          <p className="text-gray-400 my-2">@ Todos los derechos reservados</p>
        </div>
        {/* col 2 */}
        <div>
          <h2 className="text-white my-2">Sobre PortaCode</h2>
          <p className="text-gray-400 my-2">Nuestros precios</p>
          <p className="text-gray-400 my-2">Ayuda</p>
          <p className="text-gray-400 my-2">Iniciar Sesión</p>
          <p className="text-gray-400 my-2">Registrarse</p>
          <p className="text-gray-400 my-2">Editor</p>
        </div>
        {/* col 3 */}
        <div>
          <h2 className="text-white my-2">Nuestras Redes</h2>
          <div className="flex gap-2">
            <p className="text-gray-400 ">Facebook</p>
            <p className="text-gray-400">Twitter</p>
            <p className="text-gray-400">Instagram</p>
            <p className="text-gray-400">Linkedin</p>
          </div>
          <div className="mt-8">
            <p className="text-gray-400">Contactanos</p>
            <button className="bg-[#9FA7F4] px-4 py-2 rounded-full mt-2">
              webnombre@mail.com
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
