export function MoonGallery() {
  const images = [
    {
      src: "https://cdn.poehali.dev/projects/e9522643-3f58-4924-ac04-6a6808d7276a/files/5c99f128-9747-4cc4-b15a-7154ebc7e625.jpg",
      caption: "Наш первый владелец на своём участке",
    },
    {
      src: "https://cdn.poehali.dev/projects/e9522643-3f58-4924-ac04-6a6808d7276a/files/824e1e15-2619-4b0e-9a8b-6bc2a187464c.jpg",
      caption: "Сертификат в руках — прямо на Луне",
    },
    {
      src: "https://cdn.poehali.dev/projects/e9522643-3f58-4924-ac04-6a6808d7276a/files/8fc25384-1da4-4d87-8c1f-ed4f224edcbc.jpg",
      caption: "Победа! Лунный землевладелец",
    },
  ]

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-orbitron">
            Уже бывали на своём участке?
          </h2>
          <p className="text-gray-400 text-lg font-space-mono">
            Наши клиенты не ждут — они уже там
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl border border-red-500/20 hover:border-red-500/60 transition-all duration-300"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-white font-space-mono text-sm text-center">
                {img.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
