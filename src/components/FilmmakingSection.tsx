import React, { useState } from 'react';
import { Maximize2, X } from 'lucide-react';
import {
  FILM_THE_SHADOW,
  FILM_NIYATI,
  FILM_GENRES_INTEREST,
} from '../data/portfolioData';
import { useScrollAnimations } from '../hooks/useScrollAnimations';
import { POSTER_THE_SHADOW, POSTER_NIYATI } from '../data/posterAssets';

export const FilmmakingSection: React.FC = () => {
  const containerRef = useScrollAnimations<HTMLElement>({
    enableParallax: false, // Keeping cinema slots strictly static as requested
    staggerDelay: 0.1,
  });

  const [activeTabShadow, setActiveTabShadow] = useState<
    'concept' | 'cinematography' | 'editing' | 'sound' | 'progress'
  >('concept');
  const [fullscreenPoster, setFullscreenPoster] = useState<{ src: string; title: string } | null>(null);

  // Permanent official posters loaded directly from verified assets
  const shadowPoster = FILM_THE_SHADOW.posterUrl || '/the-shadow.svg';
  const niyatiPoster = FILM_NIYATI.posterUrl || '/niyati.svg';

  return (
    <section ref={containerRef} id="films" className="py-24 md:py-36 bg-[#050505] text-[#F4F1EA] border-t border-[#262626] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header with Staggered Reveal */}
        <div className="reveal-group flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#262626]">
          <div>
            <span className="reveal-item text-xs font-mono uppercase tracking-widest text-[#B40018] block mb-2 font-bold">
              NARRATIVE &amp; PSYCHOLOGICAL CINEMA
            </span>
            <h2 className="reveal-item text-5xl sm:text-6xl md:text-7xl font-extrabold uppercase font-display tracking-tight text-[#F4F1EA]">
              I TELL
              <span className="block text-[#B40018]">STORIES.</span>
            </h2>
          </div>

          <div className="reveal-item max-w-md space-y-2">
            <p className="text-lg md:text-xl font-bold uppercase font-display text-[#F4F1EA]">
              &ldquo;I don’t want to make films people simply watch. I want to make films they
              remember.&rdquo;
            </p>
            <p className="text-xs text-[#A3A199] font-mono">
              / Directing, cutting, and scoring psychological thrillers under IronWings Production.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 1. THE SHADOW - OFFICIAL ORIGINAL POSTER SLOT (STATIC / PERMANENT)        */}
        {/* ========================================================================= */}
        <div className="mb-24 bg-[#0A0A0A] border-2 border-[#B40018]/60 p-6 md:p-10 lg:p-12 relative">
          {/* Ongoing Status Flag */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#262626]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B40018]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#B40018] font-bold">
                CURRENT ACTIVE FILM PRODUCTION
              </span>
              <span className="text-[#A3A199]">·</span>
              <span className="font-mono text-xs text-[#F4F1EA] uppercase">
                {FILM_THE_SHADOW.production}
              </span>
            </div>

            <div className="font-mono text-xs text-[#F4F1EA] bg-[#B40018] px-3 py-1 font-bold tracking-wider uppercase">
              {FILM_THE_SHADOW.status}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Official Poster Slot (Static, No Animation, Always Visible) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[2/3] w-full bg-[#050505] border border-[#262626] overflow-hidden group">
                <div className="w-full h-full relative">
                  <img
                    src={shadowPoster}
                    onError={(e) => {
                      if (e.currentTarget.src !== POSTER_THE_SHADOW) e.currentTarget.src = POSTER_THE_SHADOW;
                    }}
                    alt="THE SHADOW: HUNTING FROM THE DARK - Original Film Poster"
                    className="w-full h-full object-cover object-center select-none block cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
                    onClick={() =>
                      setFullscreenPoster({
                        src: shadowPoster,
                        title: 'THE SHADOW: HUNTING FROM THE DARK',
                      })
                    }
                  />
                  {/* Fullscreen button */}
                  <button
                    type="button"
                    onClick={() =>
                      setFullscreenPoster({
                        src: shadowPoster,
                        title: 'THE SHADOW: HUNTING FROM THE DARK',
                      })
                    }
                    className="absolute bottom-3 right-3 p-2 bg-[#050505]/90 text-[#F4F1EA] hover:bg-[#B40018] border border-[#262626] text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="View Full Resolution"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-wider uppercase">Enlarge</span>
                  </button>
                </div>
              </div>

              {/* Actions footer */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#A3A199]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B40018]" />
                  <span>OFFICIAL POSTER · IRONWINGS PRODUCTION</span>
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setFullscreenPoster({
                      src: shadowPoster,
                      title: 'THE SHADOW: HUNTING FROM THE DARK',
                    })
                  }
                  className="text-[#F4F1EA] hover:text-[#B40018] transition-colors underline cursor-pointer"
                >
                  View Full Screen
                </button>
              </div>
            </div>

            {/* Right: Production Dossier Tabs & Deep Dive */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="font-mono text-xs text-[#B40018] uppercase tracking-wider font-bold">
                  GENRE: {FILM_THE_SHADOW.genre.toUpperCase()}
                </span>
                <h3 className="text-3xl sm:text-4xl font-extrabold uppercase font-display text-[#F4F1EA] mt-1">
                  THE SHADOW: {FILM_THE_SHADOW.subtitle}
                </h3>
                <p className="text-base sm:text-lg text-[#F4F1EA]/90 font-serif italic mt-3">
                  &ldquo;SOME HUNTS ARE NOT ABOUT PREY... BUT ABOUT THE DARK.&rdquo;
                </p>
              </div>

              {/* Roles Badge List */}
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#A3A199] block mb-2">
                  ADARSH&apos;S PRODUCTION ROLES:
                </span>
                <div className="flex flex-wrap gap-2">
                  {FILM_THE_SHADOW.roles.map((role, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#171717] border border-[#262626] font-mono text-xs text-[#F4F1EA] font-semibold"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Film Technical Specs Ribbon */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 bg-[#080808] border border-[#262626]">
                {FILM_THE_SHADOW.technicalSpecs.map((spec, i) => (
                  <div key={i} className="space-y-0.5">
                    <span className="text-[10px] font-mono text-[#A3A199] block uppercase">
                      {spec.label}
                    </span>
                    <span className="font-mono text-xs text-[#F4F1EA] font-bold">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Production Dossier Tabs */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-2 border-b border-[#262626] pb-3">
                  {[
                    { id: 'concept', label: '01. Concept' },
                    { id: 'cinematography', label: '02. Cinematography' },
                    { id: 'editing', label: '03. Editing' },
                    { id: 'sound', label: '04. Sound' },
                    { id: 'progress', label: '05. Status' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTabShadow(tab.id as any)}
                      className={`px-3 py-1.5 font-mono text-xs transition-colors cursor-pointer ${
                        activeTabShadow === tab.id
                          ? 'bg-[#B40018] text-[#F4F1EA] font-bold'
                          : 'bg-[#121212] text-[#A3A199] hover:text-[#F4F1EA]'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab Content Display */}
                <div className="p-5 bg-[#0F0F0F] border border-[#262626] min-h-[140px] flex items-center">
                  <p className="text-sm md:text-base text-[#F4F1EA]/90 leading-relaxed font-sans">
                    {FILM_THE_SHADOW.productionNotes[activeTabShadow]}
                  </p>
                </div>
              </div>

              {/* Cast & Crew Lineup */}
              <div className="p-4 bg-[#080808] border border-[#262626] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B40018] font-bold block">
                  CAST &amp; COLLABORATORS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                  <div>
                    <span className="text-[#A3A199]">DIRECTOR: </span>
                    <span className="text-[#F4F1EA] font-semibold">{FILM_THE_SHADOW.director}</span>
                  </div>
                  <div>
                    <span className="text-[#A3A199]">PRODUCED BY: </span>
                    <span className="text-[#F4F1EA] font-semibold">{FILM_THE_SHADOW.producer}</span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-[#A3A199]">ACTORS: </span>
                    <span className="text-[#F4F1EA] font-semibold">
                      {FILM_THE_SHADOW.cast?.join(' · ')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. NIYATI - UPCOMING SHORT FILM (ORIGINAL POSTER, STATIC / PERMANENT)     */}
        {/* ========================================================================= */}
        <div className="mb-24 bg-[#0A0A0A] border border-[#262626] p-6 md:p-10 lg:p-12 relative">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#262626]">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#A3A199]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#A3A199] font-bold">
                DIRECTED BY ADARSH R MOHITHE
              </span>
              <span className="text-[#A3A199]">·</span>
              <span className="font-mono text-xs text-[#F4F1EA] uppercase">
                {FILM_NIYATI.production}
              </span>
            </div>

            <div className="font-mono text-xs text-[#F4F1EA] bg-[#1C1C1C] border border-[#333] px-3 py-1 font-bold tracking-wider uppercase">
              {FILM_NIYATI.status}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Official Poster Slot (Static, No Animation, Always Visible) */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[2/3] w-full bg-[#050505] border border-[#262626] overflow-hidden group">
                <div className="w-full h-full relative">
                  <img
                    src={niyatiPoster}
                    onError={(e) => {
                      if (e.currentTarget.src !== POSTER_NIYATI) e.currentTarget.src = POSTER_NIYATI;
                    }}
                    alt="NIYATI: A PSYCHOLOGICAL THRILLER - Original Film Poster"
                    className="w-full h-full object-cover object-center select-none block cursor-pointer transition-transform duration-500 group-hover:scale-[1.02]"
                    onClick={() =>
                      setFullscreenPoster({
                        src: niyatiPoster,
                        title: 'NIYATI: A PSYCHOLOGICAL THRILLER',
                      })
                    }
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setFullscreenPoster({
                        src: niyatiPoster,
                        title: 'NIYATI: A PSYCHOLOGICAL THRILLER',
                      })
                    }
                    className="absolute bottom-3 right-3 p-2 bg-[#050505]/90 text-[#F4F1EA] hover:bg-[#B40018] border border-[#262626] text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                    title="View Full Resolution"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="text-[10px] tracking-wider uppercase">Enlarge</span>
                  </button>
                </div>
              </div>

              {/* Actions footer */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#A3A199]">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B40018]" />
                  <span>OFFICIAL POSTER · IRONWINGS PRODUCTION</span>
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setFullscreenPoster({
                      src: niyatiPoster,
                      title: 'NIYATI: A PSYCHOLOGICAL THRILLER',
                    })
                  }
                  className="text-[#F4F1EA] hover:text-[#B40018] transition-colors underline cursor-pointer"
                >
                  View Full Screen
                </button>
              </div>
            </div>

            {/* Right Info */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="font-mono text-xs text-[#B40018] font-bold block mb-1">
                  A PSYCHOLOGICAL THRILLER · IRONWINGS PRODUCTION
                </span>
                <p className="text-xl sm:text-2xl font-bold font-serif italic text-[#F4F1EA]">
                  &ldquo;WAS IT EVER YOUR CHOICE?&rdquo;
                </p>
                <p className="text-sm font-mono text-[#A3A199] mt-1">
                  &ldquo;SOME PEOPLE ARE NOT WHO THEY SEEM&rdquo;
                </p>
              </div>

              <div className="p-5 bg-[#0E0E0E] border-l-2 border-[#B40018] border-y border-r border-[#262626] space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#B40018] font-bold block">
                  SYNOPSIS PREVIEW &amp; CORE VISION
                </span>
                <p className="text-sm md:text-base text-[#F4F1EA]/90 leading-relaxed font-sans">
                  {FILM_NIYATI.synopsisPreview}
                </p>
              </div>

              {/* Production Dossier Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#0F0F0F] border border-[#262626] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3A199] block">
                    WRITER &amp; DIRECTOR
                  </span>
                  <p className="text-sm font-bold font-display text-[#F4F1EA]">
                    Adarsh R Mohithe
                  </p>
                  <p className="text-xs text-[#A3A199]">
                    Personal cinematic vision focusing on psychological consequence.
                  </p>
                </div>

                <div className="p-4 bg-[#0F0F0F] border border-[#262626] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3A199] block">
                    ASSISTANT DIRECTOR
                  </span>
                  <p className="text-sm font-bold font-display text-[#F4F1EA]">
                    Nikith
                  </p>
                  <p className="text-xs text-[#A3A199]">
                    Creative continuity and set direction under IronWings Production.
                  </p>
                </div>

                <div className="p-4 bg-[#0F0F0F] border border-[#262626] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3A199] block">
                    PRODUCER
                  </span>
                  <p className="text-sm font-bold font-display text-[#F4F1EA]">
                    Yashwanth
                  </p>
                  <p className="text-xs text-[#A3A199]">
                    Logistics, production oversight, and equipment management.
                  </p>
                </div>

                <div className="p-4 bg-[#0F0F0F] border border-[#262626] space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A3A199] block">
                    ACTORS
                  </span>
                  <p className="text-xs font-semibold text-[#F4F1EA] leading-relaxed">
                    Rohan · Bhanu Prakash G · Yashwanth · Nikith · Nisarga
                  </p>
                </div>
              </div>

              {/* Worldbuilding & Visual Cue */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-[#A3A199]">
                <span className="px-3 py-1 bg-[#141414] border border-[#262626]">
                  Dual Doors: &ldquo;Expose&rdquo; vs &ldquo;Understand&rdquo;
                </span>
                <span className="px-3 py-1 bg-[#141414] border border-[#262626]">
                  Aesthetic: High-Contrast Noir &amp; Surveillance Optics
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* GENRES OF EXPLORATION */}
        <div className="reveal-group">
          <span className="reveal-item text-xs font-mono uppercase tracking-widest text-[#B40018] block mb-3 font-bold">
            CINEMATIC PALETTE
          </span>
          <h3 className="reveal-item text-2xl md:text-3xl font-extrabold uppercase font-display text-[#F4F1EA] mb-6">
            GENRES ADARSH IS EXPLORING
          </h3>

          <div className="reveal-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FILM_GENRES_INTEREST.map((genre, idx) => (
              <div
                key={idx}
                className="reveal-card p-5 bg-[#0A0A0A] border border-[#262626] hover:border-[#B40018] transition-colors"
              >
                <span className="font-mono text-xs text-[#B40018] font-bold block mb-1">
                  0{idx + 1}
                </span>
                <h4 className="text-lg font-bold uppercase font-display text-[#F4F1EA] mb-2">
                  {genre.name}
                </h4>
                <p className="text-xs text-[#A3A199] leading-relaxed font-sans">{genre.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Static Viewer (Zero Animation) */}
      {fullscreenPoster && (
        <div
          className="fixed inset-0 z-50 bg-[#050505]/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setFullscreenPoster(null)}
        >
          <div
            className="relative max-h-[92vh] max-w-2xl w-auto flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setFullscreenPoster(null)}
              className="absolute -top-10 right-0 p-1.5 text-[#F4F1EA] hover:text-[#B40018] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-7 h-7" />
            </button>

            <img
              src={fullscreenPoster.src}
              alt={fullscreenPoster.title}
              className="max-h-[85vh] w-auto object-contain border border-[#262626]"
            />

            <div className="pt-3 text-center">
              <p className="font-mono text-xs uppercase tracking-widest text-[#F4F1EA] font-bold">
                {fullscreenPoster.title}
              </p>
              <p className="font-mono text-[10px] text-[#A3A199]">
                OFFICIAL IRONWINGS PRODUCTION ORIGINAL POSTER
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
