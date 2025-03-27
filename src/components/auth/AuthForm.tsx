import Image from 'next/image'
import React from 'react'

export default function AuthForm() {
  return (
    <div className="min-h-[80vh] bg-cyan-200 flex items-center px-4"
      style={{ backgroundImage: "url('/images/auth-bg.png')", backgroundSize: "cover" }}>
      <div className="container flex flex-wrap items-start gap-10 lg:gap-[5%]">

        {/* Форма входа */}
        <form className="flex flex-col gap-5 w-full sm:w-2/3 lg:w-1/3 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-darkGreen">
            Зайдите в свой аккаунт
          </h2>
          <input
            type="email"
            className="text-primary text-lg border-b-2 border-primary px-2 py-2 focus:outline-none"
            placeholder="Логин"
          />
          <input
            type="password"
            className="text-primary text-lg border-b-2 border-primary px-2 py-2 focus:outline-none"
            placeholder="Пароль"
          />
          <button className="w-full mt-8 flex justify-center items-center gap-2 bg-primary text-white px-4 py-3
      rounded-xl text-lg font-medium hover:bg-opacity-80 transition">
            <Image src="/icons/check-mark.svg" alt="check-mark" width={25} height={25} />
            Войти
          </button>
          <p className="text-xs text-gray-600 text-center">
            Продолжая вход или регистрацию, вы соглашаетесь с условиями
            <a href="/" className="text-blue-500"> Пользовательского соглашения </a>
            и
            <a href="/" className="text-blue-500"> Политикой обработки персональных данных</a>.
          </p>
          <h2 className="text-lg font-medium text-center text-darkGreen">
            Нет доступа к аккаунту?
          </h2>
          <button className="w-full border border-primary text-primary px-4 py-3 rounded-xl text-lg font-medium hover:bg-primary hover:text-white transition">
            Получить доступ к аккаунту
          </button>
        </form>

        {/* Приветствие */}
        <div className="w-full sm:w-2/3 lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold text-darkGreen mb-4">
            Добро пожаловать!
          </h1>
          <p className="text-lg lg:text-xl font-semibold text-darkGreen leading-relaxed">
            «Salamandra — твой надёжный помощник на пути к восстановлению, поддержка и мотивация на каждом шаге реабилитации!»
          </p>
          <div className="flex justify-center lg:justify-start mt-6">
            <Image src="/images/auth-doctor.png" alt="Доктор" width={350} height={250} className="rounded-lg shadow-md" />
          </div>
        </div>

      </div>
    </div>

  )
}
