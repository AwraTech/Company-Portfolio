"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const timeline = [
  {
    year: "2022",
    title: "Founded",
    desc: "AwraTech was born from a passion for building exceptional web experiences.",
  },
  {
    year: "2023",
    title: "First Major Project",
    desc: "Delivered a full-stack SaaS platform serving thousands of users.",
  },
  {
    year: "2024",
    title: "Team Growth",
    desc: "Expanded to a team of skilled developers, designers, and strategists.",
  },
  {
    year: "2025",
    title: "Going Global",
    desc: "Partnering with clients worldwide to build the future of the web.",
  },
];

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "30+", label: "Happy Clients" },
  { num: "3+", label: "Years Experience" },
  { num: "99%", label: "Client Satisfaction" },
];

const reasons = [
  "High-quality engineering",
  "Modern scalable tech stack",
  "Client-focused workflow",
  "Transparent communication",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 section-alternate -mt-1">
      <div className="container mx-auto px-4 md:px-8">

        {/* WHY AWRA SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <SectionHeading
              label="Why Awra"
              title="Built Different, By Design"
              description="We don't just build products — we craft experiences that leave lasting impressions."
              align="left"
            />

            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={reason}
                  {...fadeUp}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle
                    size={18}
                    className="text-primary flex-shrink-0"
                  />
                  <span className="text-sm text-foreground">
                    {reason}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* STATS */}
          <motion.div {...fadeUp} className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center transition-all "
              >
                <div className="text-3xl font-display font-bold gradient-text">
                  {stat.num}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border/30" />

          <div className="space-y-12">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* DOT */}
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background z-10" />

                {/* CONTENT */}
                <div
                  className={`ml-12 lg:ml-0 lg:w-1/2 ${
                    i % 2 === 0
                      ? "lg:pr-16 lg:text-right"
                      : "lg:pl-16"
                  }`}
                >
                  <span className="text-xs font-mono text-primary tracking-wider">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-foreground mt-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;