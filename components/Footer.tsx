export default function Footer() {
  return (
    <footer className="w-full border-t border-accent/10 py-8 mt-12 bg-background/50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="font-mono text-text-muted text-xs tracking-wide">
          © {new Date().getFullYear()} Shuban Shinde
        </p>
      </div>
    </footer>
  );
}
