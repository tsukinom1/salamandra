import { IHomeProfileCardsProps } from "@/components/home/HomeProfileCards";

export const homeProfileCards: IHomeProfileCardsProps[] = [
  {
    src: `/icons/profile.svg`,
    title: `Мой профиль`,
    description: `Мои медицинские данные`,
    btnText: `Перейти`,
    link: `/profile`,
    color: `blue`,
  },
  {
    src: `/icons/doctor.svg`,
    title: `Мой врач`,
    description: `Данные моего хирурга/ реабилитолога`,
    btnText: `Узнать`,
    link: `/doctor`,
    color: `red`,
  },
  {
    src: `/icons/rehab.png`,
    title: `План реабилитации`,
    description: `Персонализированная программа с видео`,
    btnText: `Начать`,
    link: `/`,
    color: `orange`,
  },
  { 
    src: `/icons/fire.svg`,
    title: `Feedback`,
    description: `Обратная связь`,
    btnText: `Открыть чат AI`,
    link: `/`,
    color: `green`,
  },
];
