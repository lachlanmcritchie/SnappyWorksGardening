import Image from "next/image"

type PageHeroProps = {
  image: string
  imageAlt: string
  eyebrow: string
  title: string
  description: string
}

export function PageHero({ image, imageAlt, eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-green-300">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-white/80">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}
