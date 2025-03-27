"use client"
import React, { useState } from "react";

export default function DoctorPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Хирург");

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      {/* Выбор специалиста */}
      <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
        <span>Выберите: Хирург/реабилитолог</span>
        <select
          className="border border-primary px-3 py-1 rounded-lg text-primary cursor-pointer focus:outline-none"
          value={selectedSpecialty}
          onChange={(e) => setSelectedSpecialty(e.target.value)}
        >
          <option value="Хирург">Хирург</option>
          <option value="Реабилитолог">Реабилитолог</option>
        </select>
      </div>

      {/* Карточка врача */}
      <div className="grid grid-cols-3 gap-6 items-start">
        {/* Фото */}
        <div className="w-40 h-40 bg-gray-200 flex items-center justify-center rounded-lg shadow-md">
          <span className="text-gray-500">🖼 Фото</span>
        </div>

        {/* Информация о враче */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md border">
          <span className="inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm mb-3">
            О враче
          </span>
          <h2 className="text-2xl font-semibold mb-2">Фамилия Имя Отчество</h2>
          <p className="text-gray-700 text-sm mb-2">
            <strong>Хирург, хирург-онколог</strong>
          </p>
          <p className="text-gray-500 text-sm">Ведет практику с 2022 года</p>

          {/* Специализация */}
          <h3 className="text-lg font-semibold mt-4 mb-2">Специализация:</h3>
          <ul className="list-disc pl-5 text-gray-600 text-sm space-y-1">
            <li>
              Диагностика и лечение онкологических заболеваний, в том числе молочных желез
            </li>
            <li>
              Хирургическое иссечение доброкачественных новообразований кожи и мягких тканей
            </li>
            <li>
              Выполнение диагностических биопсий для уточнения диагноза при подозрении на онкопатологию
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
