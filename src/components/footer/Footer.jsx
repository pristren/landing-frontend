import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#1f2937] py-5 px-20 mt-10">
      {/* links */}
      <div className="flex flex-col lg:flex-row justify-between text-white mb-8 py-5 container mx-auto text-center">
        {/* link col-1  */}
        <ul className="space-y-3 mt-8 md:mt-0">
          <li className="text-[#69707e] font-medium">ACCESO RÁPIDO</li>
          <li>
            <a href="#">Crear cuenta</a>
          </li>
          <li>
            <a href="#">Iniciar sesión</a>
          </li>
          <li>
            <a href="#" className="underline">
              Precios
            </a>
          </li>
        </ul>
        {/* link col-2  */}
        <ul className="space-y-3 mt-8 md:mt-0">
          <li className="text-[#69707e] font-medium">SOBRE NOSOTROS</li>
          <li>
            <a href="#" className="underline">
              Conócenos
            </a>
          </li>
        </ul>
        {/* link col-3   */}
        <ul className="space-y-3 mt-8 md:mt-0">
          <li className="text-[#69707e] font-medium">LEGAL</li>
          <li>
            <a href="#" className="underline">
              Política de cookies
            </a>
          </li>
          <li>
            <Link to="/cookies" className="underline">
              Política de privacidad <br /> Términos y condiciones
            </Link>
          </li>
        </ul>

        {/* link col-5 / IDIOMA  */}
        <ul>
          <li className="text-[#69707e] font-medium">IDIOMA</li>
          <select
            className="bg-[#1f2937] mt-2 border rounded-md p-1"
            name="idioma"
            id=""
          >
            <option value="Español">Español</option>
          </select>
        </ul>
      </div>
      {/* divider */}
      <hr />
      {/*copyright and  social  */}
      <div className="flex flex-col md:flex-row justify-between items-center my-8 container mx-auto">
        {/* copyright  */}
        <p className="text-[#69707e]">
          <small>
            &copy;2023 Cybar Security. Todos los derechos reservados.
          </small>
        </p>
        {/* social icon  */}
        <div className="flex gap-5 my-3 md:my-0 text-white">
          <FaFacebook />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
