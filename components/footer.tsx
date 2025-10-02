import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Chef Jake. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/menu" className="hover:text-primary transition-colors">
              Menu
            </Link>
            <a
              href="https://instagram.com/chefjake.usc"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Instagram (@chefjake.usc)
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
