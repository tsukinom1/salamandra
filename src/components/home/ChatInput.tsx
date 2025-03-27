
export default function ChatInput() {
  return (
    <div className="w-fit mx-auto border border-1 border-primary rounded-xl my-20">
      <input type="text" placeholder="У вас возникли вопросы?" readOnly
        className="w-[250px] md:w-[400px] px-5 py-1 rounded-xl outline-none text-lg" />
      <button className="bg-primary px-3 py-1 rounded-xl text-white text-xl">Chat AI</button>
    </div>
  )
}
