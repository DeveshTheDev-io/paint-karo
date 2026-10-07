import React, { useState } from 'react';
import { PAINT_KARO_VIDEOS, CHANNEL_INFO } from '../data/mockData';
import { VideoTutorial } from '../types';
import { ArrowRight } from 'lucide-react';

export const VideoTutorials: React.FC = () => {
  const [activeVideoModal, setActiveVideoModal] = useState<VideoTutorial | null>(null);

  return (
    <section id="videos" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-6 lg:pb-8 border-b border-gray-300/80">
        <div>
          <span className="text-xs uppercase tracking-[0.2em] text-rose-700 font-bold font-mono">
            FIELD DEMONSTRATIONS
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal tracking-tight text-[#191919]">
            YouTube Video Masterclasses
          </h2>
        </div>

        {/* Channel Stats Glass Pill */}
        <div className="mt-4 md:mt-0 flex items-center gap-3 px-4 py-2 bg-white/90 backdrop-blur-md border border-gray-200 rounded-xl shadow-xs text-xs font-mono text-[#191919]">
          <span className="font-bold text-rose-600">▶ {CHANNEL_INFO.subscribers}</span>
          <span>·</span>
          <span>{CHANNEL_INFO.videoCount} Videos</span>
          <span>·</span>
          <span className="font-medium">{CHANNEL_INFO.views} Views</span>
        </div>
      </div>

      {/* 4 Video Cards with Cinematic Glassmorphism */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {PAINT_KARO_VIDEOS.map((video) => (
          <div
            key={video.id}
            className="group bg-gradient-to-b from-white/95 via-rose-50/30 to-white/90 backdrop-blur-md border border-gray-200/90 hover:border-rose-300 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 h-full"
          >
            <div>
              {/* Thumbnail Container */}
              <div
                className="relative aspect-video bg-black overflow-hidden cursor-pointer"
                onClick={() => setActiveVideoModal(video)}
              >
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-rose-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <span className="text-sm font-bold pl-0.5">▶</span>
                  </div>
                </div>

                <div className="absolute bottom-3 right-3 text-xs font-mono font-bold text-white bg-black/85 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {video.duration}
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5 sm:p-6 lg:p-7">
                <div className="text-xs font-mono text-rose-700 font-semibold mb-2">
                  {video.category} · Paint Karo Official Masterclass
                </div>

                <h3 className="text-lg sm:text-xl lg:text-2xl font-serif text-[#191919] font-normal line-clamp-2">
                  {video.title}
                </h3>
                <div className="text-xs text-[#191919]/70 font-semibold mt-1">
                  {video.hindiTitle}
                </div>

                <p className="mt-2.5 text-xs sm:text-sm text-[#191919]/80 line-clamp-2 leading-relaxed">
                  {video.description}
                </p>

                {/* Key Chapters */}
                <div className="mt-4 pt-3 border-t border-gray-200/90 space-y-1.5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 font-mono">
                    Chapters:
                  </div>
                  {video.keyTimestamps.slice(0, 2).map((ts, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-[#191919]/80">
                      <span className="font-mono text-rose-700 font-bold bg-white px-2 py-0.5 rounded border border-gray-200 shadow-xs">
                        {ts.time}
                      </span>
                      <span className="truncate">{ts.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="px-5 sm:px-6 py-4 bg-white/80 border-t border-gray-200/80 flex items-center justify-between">
              <button
                onClick={() => setActiveVideoModal(video)}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
              >
                <span>Watch Tutorial</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href={video.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#191919] hover:text-rose-600 transition-colors flex items-center gap-1"
              >
                <span>Open in YouTube</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal with embedded YouTube Player */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-white border border-gray-200 rounded-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-gray-200 p-5 flex items-center justify-between z-10">
              <div>
                <span className="text-xs font-mono text-rose-600 font-bold">{activeVideoModal.category}</span>
                <h3 className="text-lg font-serif text-[#191919] font-normal">{activeVideoModal.title}</h3>
              </div>
              <button
                onClick={() => setActiveVideoModal(null)}
                className="px-3 py-1.5 text-gray-600 hover:text-[#191919] bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-xs font-mono cursor-pointer"
              >
                ✕ Close
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-black shadow-lg">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideoModal.videoCode}?autoplay=1`}
                  title={activeVideoModal.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>

              <div className="p-4 bg-rose-50/70 border border-rose-200 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div>
                  <div className="font-bold text-[#191919]">{activeVideoModal.hindiTitle}</div>
                  <div className="text-[#191919]/70">Subscribe to Paint Karo on YouTube for new guides</div>
                </div>
                <a
                  href={activeVideoModal.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl transition-all whitespace-nowrap text-center shadow-xs"
                >
                  Subscribe on YouTube
                </a>
              </div>

              <div className="space-y-2">
                <div className="text-xs uppercase tracking-wider text-gray-600 font-mono font-bold">
                  All Timestamps in this Video:
                </div>
                {activeVideoModal.keyTimestamps.map((ts, idx) => (
                  <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between text-xs">
                    <span className="text-[#191919] font-medium">{ts.label}</span>
                    <span className="font-mono text-rose-700 font-bold bg-white px-2 py-0.5 rounded border border-gray-200">
                      {ts.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
