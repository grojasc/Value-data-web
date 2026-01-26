import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Bot } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    agentes: [
      { name: 'Agentes de Optimización', href: '/soluciones#optimizacion' },
      { name: 'Agentes Predictivos', href: '/soluciones#analytics' },
      { name: 'Agentes de Visión', href: '/soluciones#vision' },
      { name: 'Agentes GenAI', href: '/soluciones#ia-generativa' },
    ],
    industrias: [
      { name: 'Agroindustria', href: '/industrias#agro' },
      { name: 'Minería', href: '/industrias#mineria' },
      { name: 'Logística', href: '/industrias#logistica' },
      { name: 'Manufactura', href: '/industrias#manufactura' },
    ],
    empresa: [
      { name: 'Nosotros', href: '/nosotros' },
      { name: 'Casos de Éxito', href: '/casos' },
      { name: 'Contacto', href: '/contacto' },
    ],
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="ValueData"
                className="h-10 w-auto"
              />
              <div>
                <span className="text-xl font-bold">
                  Value <span className="text-blue-400">Data</span>
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-2 text-sm font-medium">
              AI Agentic Analytics
            </p>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Agentes de IA autónomos que resuelven problemas de gestión empresarial.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/company/valuedata"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Agents */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Agentes</h3>
            <ul className="space-y-2">
              {footerLinks.agentes.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Industrias</h3>
            <ul className="space-y-2">
              {footerLinks.industrias.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-indigo-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contacto</h3>
            <div className="space-y-3">
              <a href="mailto:gonzalo@valuedata.cl" className="flex items-center text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                <Mail className="h-4 w-4 mr-3 text-indigo-400" />
                gonzalo@valuedata.cl
              </a>
              <a href="https://wa.me/56932942337" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-indigo-400 text-sm transition-colors">
                <Phone className="h-4 w-4 mr-3 text-indigo-400" />
                +56 9 3294 2337
              </a>
              <div className="flex items-center text-gray-400 text-sm">
                <MapPin className="h-4 w-4 mr-3 text-indigo-400" />
                Santiago, Chile
              </div>
            </div>
            <div className="mt-4">
              <Link
                to="/contacto"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Diseña tu agente
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © {currentYear} ValueData. AI Agentic Analytics.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/nosotros" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-200">
                Nosotros
              </Link>
              <Link to="/casos" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-200">
                Casos
              </Link>
              <Link to="/contacto" className="text-gray-500 hover:text-indigo-400 text-sm transition-colors duration-200">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
