import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-red-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Lunar<span className="text-red-500">Land</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-4 max-w-md">
              Продаём лунные участки с официальными документами и уникальными координатами с 2020 года.
              Более 10 000 довольных владельцев.
            </p>
            <a
              href="tel:+79212054248"
              className="font-orbitron text-xl font-bold text-red-400 hover:text-red-300 transition-colors duration-200 mb-6 inline-block"
            >
              +7 921 205-42-48
            </a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Участки</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#applications"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Как купить
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Карта Луны
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Вопросы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200"
                >
                  Подарочные наборы
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Отзывы
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Пресса
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-red-500 transition-colors duration-200">
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-red-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2025 LunarLand. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Конфиденциальность
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Условия использования
              </a>
              <a
                href="#"
                className="font-space-mono text-gray-400 hover:text-red-500 text-sm transition-colors duration-200"
              >
                Cookie-политика
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}