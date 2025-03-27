import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function VideoPage() {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      {/* Навигация */}
      <nav className="text-gray-500 text-md mb-4">
        <Link href="/" className="text-gray-400">Главное</Link> &raquo;{" "}
        <Link href="/video  " className="text-gray-400">Видеоматериалы</Link> &raquo;{" "}
        <span className="text-primary font-semibold">1 урок</span>
      </nav>

      {/* Навигационные кнопки */}
      <div className="flex justify-between items-center bg-gray-200 rounded-full p-1 mb-4">
        <button className="flex-1 text-center py-2 text-white bg-primary rounded-full">
          Данный видеоматериал
        </button>
        <button className="flex-1 text-center py-2 text-primary hover:bg-gray-300 rounded-full transition">
          Следующий видеоматериал &raquo;
        </button>
      </div>

      {/* Видео-превью */}
      <div className="w-full h-60 bg-gray-300 flex items-center justify-center rounded-lg shadow-md mb-6">
        <Image
          src="/images/video-placeholder.png" // Поменяй на реальный путь
          alt="Видео-превью"
          width={80}
          height={80}
          className="opacity-60"
        />
      </div>

      {/* Инструкция */}
      <div className="bg-blue-100 border-l-4 border-primary p-5 rounded-lg shadow-md">
        <h2 className="text-primary font-semibold text-lg flex items-center mb-3">
          <span className="text-2xl mr-2">ℹ️</span> Инструкция для выполнения упражнения
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 text-md">
          <li>Наденьте реабилитационные часы для валидации выполнения упражнения.</li>
          <li>Лягте на спину, положив обе ноги на ровную поверхность.</li>
          <li>Согните одну ногу в колене на 30 градусов, удерживая её в таком положении.</li>
          <li>Медленно выпрямляйте ногу, пока она не станет прямой, затем верните её в исходное положение.</li>
          <li>Повторите упражнение для обеих ног по 10-15 раз.</li>
          <li>
            Убедитесь, что часы зарегистрировали выполнение упражнения и
            синхронизировались с платформой для мониторинга прогресса.
          </li>
        </ol>
      </div>

      {/* Комментарий */}
      <div className="mt-6">
        <label className="block text-gray-600 text-sm mb-2">
          Комментарий к видеоматериалу
        </label>
        <textarea
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Ваш комментарий"
          rows={3}
        ></textarea>
      </div>

      {/* Кнопка отправки */}
      <div className="flex justify-center mt-4">
        <button className="bg-primary text-white px-6 py-2 rounded-full text-sm hover:bg-opacity-80 transition">
          Отправить
        </button>
      </div>
    </div>
  );
}
