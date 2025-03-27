export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-5 my-10">
      <h1 className="w-2/3 text-5xl font-bold text-center"><span className="text-primary">Эффективная </span>реабилитация после ортопедической операции</h1>
      <h2 className="text-xl text-center text-darkGreen">Мы предлагаем инновационные решения для вашего восстановления и возвращения к активной жизни.</h2>
      <div className="w-fit border border-1 border-primary rounded-3xl ">
        <p className="w-[250px] md:w-[400px] px-5 py-1 text-lg text-center text-customGray">
          Добро пожаловать, в Salamandra!
        </p>
      </div>
    </div>
  )
}
