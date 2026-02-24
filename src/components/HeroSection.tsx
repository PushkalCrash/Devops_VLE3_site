const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        className="hero-video"
        src="/bgvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videoposteer.jpg"
      />

      <div className="hero-overlay" />

      {/* CENTER WRAPPER */}
      <div className="absolute inset-0 flex items-center justify-center z-10">

        {/* NAME + APG WRAPPER */}
        <div
          className="relative inline-block text-center"
          style={{
            // Single source of truth
            "--name-size": "clamp(2.5rem, 7vw, 6.5rem)"
          } as React.CSSProperties}
        >

          {/* FULL NAME */}
          <h1
            className="font-display text-white opacity-80 tracking-tight leading-none whitespace-nowrap"
            style={{
              fontSize: "var(--name-size)"
            }}
          >
            ARYA PRADYUMN GUPTA
          </h1>

          {/* APG CENTER WRAPPER */}
          <div
            className="absolute top-1/2 left-1/2 pointer-events-none select-none"
            style={{
              
              transform: "translate(-50%, -80%)"
            }}
          >
            <div
              className="font-brush apg-glitch leading-none"
              style={{
                // Always 1.6x name
                fontSize: "calc(var(--name-size) * 2.6)"
              }}
              data-text="APG"
            >
              APG
            </div>
          </div>

        </div>

      </div>

      {/* TAGLINE */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <p
          className="text-muted-foreground tracking-wide"
          style={{
            transform: "translateY(140px)", // below name center
            fontSize: "clamp(0.8rem, 1.4vw, 1.2rem)"
          }}
        >
          Musician • Instructor • Performer
        </p>
      </div>

    </section>
  );
};

export default HeroSection;
