import heroBg from "../assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end pb-20 pt-32 lg:items-center lg:pb-0">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: `url(${heroBg.src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-800/50 to-transparent" />
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-primary" />
            <span className="section-label">SINCE 2018</span>
          </div>
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl mb-6 font-bold">
            Engineering the{" "}
            <span className="text-primary italic">Next</span> Digital Era
          </h1>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-lg">
            Bespoke software solutions crafted with precision. From concept to deployment, we scale your vision.
          </p>
          <div className="flex gap-4">
            <a
              href="#portfolio"
              className="px-6 py-3 bg-primary text-primary-foreground font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-foreground/30 text-foreground font-semibold text-sm rounded-lg hover:border-primary hover:text-primary transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;