export function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          © {new Date().getFullYear()} Surya Teja Reddy. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-muted-foreground">
          <span className="hover:text-primary transition-colors cursor-pointer">Privacy</span>
          <span className="hover:text-primary transition-colors cursor-pointer">Terms</span>
        </div>
      </div>
    </footer>
  )
}
