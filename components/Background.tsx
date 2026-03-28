export default function Background() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black pointer-events-none">
      {/* Morphing Blobs — navy on pure black */}
      <div className="absolute top-[-10%] left-[-10%] w-[120vw] md:w-[60vw] h-[120vw] md:h-[60vw] rounded-full bg-navy opacity-[0.35] md:opacity-[0.4] blur-[80px] md:blur-[120px] animate-blob-1 mix-blend-screen" />
      <div className="absolute top-[40%] right-[-20%] md:right-[-5%] w-[100vw] md:w-[45vw] h-[100vw] md:h-[45vw] rounded-full bg-navy opacity-[0.25] md:opacity-[0.35] blur-[80px] md:blur-[120px] animate-blob-2 mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[10%] md:left-[20%] w-[140vw] md:w-[60vw] h-[140vw] md:h-[60vw] rounded-full bg-navy opacity-[0.3] md:opacity-[0.4] blur-[90px] md:blur-[140px] animate-blob-3 mix-blend-screen" />

      {/* Dot Grid Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}
