import { allVideos } from '@/arrays/allVideos'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface IVideo {
  id: number
  thumbnail: string
  status?: "watching" | "watched"
}
export default function () {
  const latestVideos = allVideos.slice(-8)
  return (
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4 text-darkBlue">Видеоинструкции на эту неделю</h2>
      <div className="grid grid-cols-4 gap-4 max-w-xl">
        {latestVideos.map((video) => (
          <div
            key={video.id}
            className="relative border border-green-300 rounded-lg p-3 flex items-center justify-center h-24 w-24"
          >
            <Link href={`/video`}>
            {/* <Link href={`/video-${video.id}`}> */}
              <Image
                src={video.thumbnail}
                alt={`Видео ${video.id}`}
                width={60}
                height={60}
                className="opacity-70"
              />
            </Link>
            {video.status && (
              <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center rounded-full bg-white shadow-lg">
                {video.status === "watching" ? "🔥" : "✅"}
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="bg-primary px-10 py-1 rounded-xl text-white my-10 block mx-auto">
        <Link href={`/video`}>Мой прогресс</Link>
      </button>
    </div>
  )
}
