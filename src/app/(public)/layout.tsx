import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { StructuredData } from "@/components/structured-data"

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  )
}
