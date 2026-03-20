'use client'

import { useState } from 'react'

export default function ProfilePhoto() {
  const [error, setError] = useState(false)

  return (
    <div className="w-24 h-24 rounded-full overflow-hidden bg-zinc-100 border-2 border-zinc-200 flex items-center justify-center shrink-0">
      {error ? (
        <span className="text-2xl font-bold text-zinc-400 select-none">조</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src="/photo.png"
          alt="프로필 사진"
          className="w-full h-full object-cover"
          onError={() => setError(true)}
        />
      )}
    </div>
  )
}
