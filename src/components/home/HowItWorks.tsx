import Image from "next/image"

interface IReasons {
  src: string
  alt: string
  title: string
  description: string
}

const reasons: IReasons[] = [
  {
    src: `/icons/personalization.svg`, alt: `personalization`,
    title: `Персонализированная реабилитация`,
    description: `Платформа предоставляет индивидуальный план восстановления, включающий упражнения и видеоинструкции, адаптированные под  текущий этап реабилитации.`
  },
  {
    src: `/icons/progress.svg`, alt: `progress`,
    title: `Мониторинг прогресса и фидбек от врачей`,
    description: `Платформа отслеживает выполнение упражнений и прогресс, предоставляя отчёты. Пользователи также получают фидбек от врачей для корректировки программы восстановления.`
  },
  {
    src: `/icons/emotion.svg`, alt: `emotion`,
    title: `Эмоциональная поддержка`,
    description: `Интерактивный персонаж, «Саламандра», мотивирует и поддерживает пользователя, предлагая полезные советы и позитивные сообщения.`
  },
]
export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="max-w-4xl text-4xl md:text-5xl font-bold text-center leading-tight">
        Как работает наша платформа <span className="text-primary">для реабилитации</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="bg-[#D1EEEB] p-5 rounded-full flex items-center justify-center">
              <Image src={reason.src} alt={reason.alt} width={60} height={60} />
            </div>
            <h2 className="font-bold text-xl mt-4 h-14">{reason.title}</h2>
            <p className="mt-2">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
