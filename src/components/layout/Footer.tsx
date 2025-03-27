import Link from "next/link";
import { Instagram, Mail, Send } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-cyan-200/70 pt-7 pb-2 border-t border-blue-500 px-5">
      <div className="container">
        {/* Верхняя часть футера */}
        <div className="grid grid-cols-3 gap-8">
          {/* Левая часть (меню) */}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-lg">Услуги</h3>
              <Link href="/analyzes" className="text-blue-700 hover:underline">
                Анализы
              </Link>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Сотрудничество</h3>
              <Link href="/partners" className="text-blue-700 hover:underline">
                Стать нашим партнером
              </Link>
            </div>
          </div>

          {/* Центр (иконки соцсетей) */}
          <div className="flex items-center gap-4">
            <Instagram className="w-6 h-6 text-blue-700 cursor-pointer hover:text-blue-500" />
            <Send className="w-6 h-6 text-blue-700 cursor-pointer hover:text-blue-500" />
            <Mail className="w-6 h-6 text-blue-700 cursor-pointer hover:text-blue-500" />
          </div>

          {/* Правая часть (QR-код и магазины приложений) */}
          <div className="flex items-center gap-x-4">
            <Image src="/icons/qr.svg" alt="icon" width={100} height={100} />
            <div>
              <h3 className="font-semibold text-lg">Отсканируйте QR code</h3>
              <p className="text-sm text-gray-700">Скачайте приложение</p>
              <div className="flex gap-2 mt-2">
                <img src="/icons/googleplay.jpg" alt="Google Play" />
                <img src="/icons/appstore.jpg" alt="App Store" />
              </div>
            </div>
          </div>
        </div>

        {/* Нижняя строка */}
        <div className="border-t mt-6 pt-4 text-sm text-center text-gray-600 flex flex-wrap justify-center gap-4">
          <Link href="/terms" className="hover:underline">
            Публичная оферта пользователей
          </Link>
          <Link href="/supplier-terms" className="hover:underline">
            Публичная оферта специалиста (поставщика)
          </Link>
          <Link href="/rules" className="hover:underline">
            Правила пользования
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Политика конфиденциальности
          </Link>
          <Link href="/contact" className="hover:underline">
            Свяжитесь с нами
          </Link>
        </div>
      </div>
    </footer>
  );
}
