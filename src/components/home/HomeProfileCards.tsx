import Link from "next/link";
import Image from "next/image";
import { homeProfileCards } from "@/arrays/homeProfildeCards";


export interface IHomeProfileCardsProps {
  src: string;
  title: string;
  description: string;
  btnText: string;
  link: string;
  color: string;
}

export default function HomeProfileCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-20">
      {homeProfileCards.map((card, index) => (
        <div
          key={index}
          className="bg-blue-200/80 p-5 border rounded-xl shadow-md flex flex-col justify-between h-48"
        >
          {/* Верхняя часть с иконкой и текстом */}
          <div className="flex items-start gap-x-4">
            {/* Окрашенный фон для иконки */}
            <div
              className="p-3 rounded-lg flex items-center justify-center w-16 h-16"
              style={{ backgroundColor: card.color }}
            >
              <Image src={card.src} alt={card.title} width={40} height={40} />
            </div>
            {/* Текст */}
            <div className="flex-1">
              <p className="text-xl font-semibold">{card.title}</p>
              <p className="text-md text-gray-600">{card.description}</p>
            </div>
          </div>

          {/* Кнопка */}
          <Link href={card.link} passHref className="">
            <button
              className="border rounded-3xl px-5 py-1 text-lg"
              style={{
                borderColor: card.color,
                color: card.color,
              }}
            >
              {card.btnText} →
            </button>
          </Link>
        </div>
      ))}

    </div>
  );
}