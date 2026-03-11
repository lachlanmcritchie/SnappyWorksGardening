import type { MDXComponents } from "mdx/types"
import Image from "next/image"
import Link from "next/link"

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mb-4 mt-10 text-2xl font-bold tracking-tight text-foreground"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mb-3 mt-8 text-xl font-semibold text-foreground"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mb-4 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-muted-foreground" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  a: ({ href, ...props }) => (
    <Link
      href={href ?? "#"}
      className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mb-4 border-l-4 border-primary/30 pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  img: ({ src, alt, ...props }) => (
    <span className="my-6 block overflow-hidden rounded-xl">
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={800}
        height={450}
        className="w-full object-cover"
        {...props}
      />
    </span>
  ),
  strong: (props) => <strong className="font-semibold text-foreground" {...props} />,
  hr: () => <hr className="my-8 border-border" />,
}
