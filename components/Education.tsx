import { Award, GraduationCap } from "lucide-react";
import { CERTIFICATIONS_DATA, EDUCATION_DATA } from "@/data/portfolioData";

export default function Education() {
  return (
    <section className="py-10 md:py-16 border-b border-black/15 dark:border-outline-variant/30" id="education">
      {/* Header */}
      <h2 className="font-mono text-xs text-text-muted uppercase tracking-widest font-semibold mb-6 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-text-muted inline-block"></span>
        <span>EDUCATION &amp; CERTIFICATIONS</span>
      </h2>

      {/* Two Column Grid: Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
        {/* Left: Formal Education */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-4 h-4 text-on-surface-variant" />
            <h3 className="text-sm sm:text-base font-semibold text-on-surface tracking-tight">Formal Education</h3>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-3.5">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-surface-container-low border border-black/15 dark:border-outline-variant/40 hover:border-black/35 dark:hover:border-outline-variant transition-all duration-150 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-none"
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                    <h4 className="text-xs sm:text-sm font-semibold text-on-surface">{edu.degree}</h4>
                    <span className="font-mono text-[11px] text-text-muted">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant font-mono mt-0.5">
                    {edu.institution} {edu.location ? `· ${edu.location}` : ""}
                  </p>
                </div>
                <p className="text-xs text-text-muted mt-2 leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Training & Certifications */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-on-surface-variant" />
            <h3 className="text-sm sm:text-base font-semibold text-on-surface tracking-tight">Training &amp; Certifications</h3>
          </div>

          <div className="flex-1 flex flex-col justify-between gap-3.5">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-surface-container-low border border-black/15 dark:border-outline-variant/40 hover:border-black/35 dark:hover:border-outline-variant transition-all duration-150 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-none"
              >
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-1.5">
                    <h4 className="text-xs sm:text-sm font-semibold text-on-surface">{cert.title}</h4>
                    <span className="font-mono text-[10px] text-text-muted px-1.5 py-0.5 rounded bg-surface-container border border-black/15 dark:border-outline-variant/40">
                      {cert.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-on-surface-variant font-mono mt-0.5">{cert.issuer}</p>
                </div>
                <p className="text-xs text-text-muted mt-2 leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
