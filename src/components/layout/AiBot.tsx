"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type TMessage = {
  text: string;
  sender: "user" | "bot";
};

export default function AiBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<TMessage[]>([]);
  const [input, setInput] = useState("");
  const [showHint, setShowHint] = useState(false); // Подсказка

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isOpen) setShowHint(true);
    }, 10000); // Каждые 10 секунд

    return () => clearInterval(interval);
  }, [isOpen]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage: TMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botMessage: TMessage = { text: "Привет! Как я могу помочь?", sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Иконка ИИ + Подсказка */}
      {!isOpen && (
        <div className="relative">
          {/* Анимированная подсказка */}
          <AnimatePresence>
            {showHint && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute right-28 top-5 bg-white text-gray-700 text-md px-3 py-1 rounded-lg 
                shadow-lg border border-primary transition-opacity cursor-pointer"
                onMouseEnter={() => setShowHint(false)} // Убираем при наведении
              >
                Нужна помощь?
              </motion.div>
            )}
          </AnimatePresence>

          {/* Иконка ИИ */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Image
              src={`/images/ai-salamandra.png`}
              alt="salamandra"
              width={120}
              height={120}
              className="cursor-pointer hover:scale-110 transition"
              onMouseEnter={() => setShowHint(false)} // Убираем при наведении
              onClick={() => {
                setIsOpen(true); // Скрываем подсказку при открытии
              }}
            />
          </motion.div>
        </div>
      )}

      {/* Окно чата */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute bottom-0 right-0 w-[350px] h-[55vh] bg-white shadow-lg rounded-xl border border-gray-300 flex flex-col"
        >
          {/* Верхняя панель */}
          <div className="absolute -top-[10%] -left-[20%] z-10">
            <Image
              src={`/images/ai-salamandra.png`}
              alt="salamandra"
              width={120}
              height={120}
              className="cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className="bg-primary text-white p-3 rounded-t-xl flex items-center text-xl font-semibold">
            <span className="flex-1 ml-[15%]"> Salamandra AI</span>
            <button className="text-white text-lg" onClick={() => setIsOpen(false)}>×</button>
          </div>

          {/* Сообщения */}
          <div className="p-3 h-auto overflow-y-auto space-y-2 flex-1">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: msg.sender === "user" ? 30 : -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-500 text-white self-end ml-auto"
                    : "bg-gray-200 text-gray-800 self-start"
                }`}
              >
                {msg.text}
              </motion.div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Поле ввода */}
          <div className="p-3 border-t flex items-center">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Введите сообщение..."
              className="flex-1 border px-3 py-2 rounded-lg focus:outline-none"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="ml-2 bg-primary text-white px-3 py-2 rounded-lg hover:bg-opacity-80 transition"
              onClick={sendMessage}
            >
              ➤
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
