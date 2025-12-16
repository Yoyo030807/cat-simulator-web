"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Gamepad2, ExternalLink } from "lucide-react";

// Hugging Face 图标 (保持不变)
const HuggingFaceIcon = ({ size = 24, color = "currentColor" }: { size?: number, color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ color: color }}>
    <path d="M22.5 40C22.5 40 20 22.5 35 15C50 7.5 50 15 50 15C50 15 50 7.5 65 15C80 22.5 77.5 40 77.5 40" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22.5 40C15 40 7.5 47.5 10 60C12.5 72.5 25 72.5 25 72.5" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M77.5 40C85 40 92.5 47.5 90 60C87.5 72.5 75 72.5 75 72.5" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25 72.5C25 85 37.5 92.5 50 92.5C62.5 92.5 75 85 75 72.5" stroke={color} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="35" cy="50" r="4" fill={color}/>
    <circle cx="65" cy="50" r="4" fill={color}/>
    <path d="M40 65H60" stroke={color} strokeWidth="6" strokeLinecap="round"/>
  </svg>
);

export default function GameSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full">
      
      {/* ---------------- 第一页：视频演示 ---------------- */}
      <div 
        className="h-screen w-full snap-start flex flex-col items-center justify-start relative px-4"
        // 🔥🔥🔥 强制内联样式：解决重叠与背景透视问题
        style={{
            backgroundColor: '#0f172a', // 强制实心深蓝背景
            paddingTop: '250px',        // 强制顶部留白 250px，避开上一页箭头
            zIndex: 50                  // 强制层级高于上一页
        }}
      >
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-6xl flex flex-col items-center gap-8"
        >
            {/* 标题区域 */}
            <div className="text-center w-full">
                {/* 🔥🔥🔥 强制内联样式：解决居中问题
                    display: 'flex', justifyContent: 'center' -> 绝对居中
                    gap: '20px' -> 图标和文字的间距
                */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '8px' }}>
                    <Play size={28} className="text-blue-400 fill-current" />
                    <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-blue-400">
                        Phase 1
                    </h3>
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                    Gameplay <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Demo</span>
                </h2>
            </div>

            {/* 视频容器 (自定义控制器) */}
            <div 
              className="w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl bg-black relative group cursor-pointer"
              onClick={togglePlay}
            >
                <div className="absolute -inset-10 bg-blue-500/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>
                
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  loop 
                  playsInline
                  onEnded={() => setIsPlaying(false)}
                >
                    <source src="/team/demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* 左下角播放按钮 */}
                <AnimatePresence>
                  {!isPlaying && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute bottom-6 left-6 z-30"
                    >
                      <button 
                        onClick={(e) => {
                          e.stopPropagation(); 
                          togglePlay();
                        }}
                        className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all shadow-lg"
                      >
                        <Play className="fill-current" size={20} />
                        <span>Click to Watch</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

                {isPlaying && (
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors pointer-events-none"></div>
                )}
            </div>
            
        </motion.div>
      </div>

      {/* ---------------- 第二页：游戏试玩 ---------------- */}
      <div 
        className="h-screen w-full snap-start flex flex-col items-center justify-center relative px-4"
        style={{ backgroundColor: '#0f172a', zIndex: 50 }}
      >
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[90rem] flex flex-col items-center gap-6" 
        >
            <div className="text-center w-full">
                {/* 🔥🔥🔥 Phase 2 也应用同样的强制居中样式 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '8px' }}>
                    <Gamepad2 size={28} className="text-purple-400" />
                    <h3 className="text-xl font-bold uppercase tracking-[0.3em] text-purple-400">
                        Phase 2
                    </h3>
                </div>

                <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                    Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Build</span>
                </h2>
            </div>

            <div className="relative w-full h-[65vh] md:h-[70vh] rounded-[2rem] overflow-hidden shadow-2xl bg-[#121212]">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-600 -z-10 font-mono">
                   <div className="w-8 h-8 border-2 border-white/20 border-t-purple-500 rounded-full animate-spin mb-4"></div>
                   LOADING WEBGL...
                </div>
                <iframe
                    src="https://yaoyaoyu-the-cat-has-arrived.static.hf.space"
                    title="Cat Simulator Game"
                    allowFullScreen
                    className="w-full h-full border-none"
                ></iframe>
            </div>

            <a 
                href="https://huggingface.co/spaces/yaoyaoyu/the-cat-has-arrived" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: '2px solid black',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 32px',
                    borderRadius: '9999px',
                    fontWeight: '900',
                    fontSize: '14px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    boxShadow: '0 0 20px rgba(255,255,255,0.2)'
                }}
                className="hover:scale-105 transition-transform duration-300"
            >
                <HuggingFaceIcon size={24} color="black" />
                <span>Open on Hugging Face</span>
                <ExternalLink size={16} />
            </a>
        </motion.div>
      </div>
    </div>
  );
}