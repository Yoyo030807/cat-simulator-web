"use client";
import { motion } from "framer-motion";
import { Gamepad2, Github, Cat, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="h-screen w-full relative flex flex-col items-center justify-center overflow-hidden bg-[#0f172a]">
      {/* 背景层 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-[#0f172a] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-40"></div>
      </div>

      {/* 主内容区域 */}
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto flex flex-col items-center"> 
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          {/* Logo 图标 */}
          <div className="p-6 bg-white/5 rounded-full backdrop-blur-xl border border-white/10 shadow-[0_0_60px_rgba(168,85,247,0.3)]">
            <Cat size={72} color="white" className="drop-shadow-lg" />
          </div>
        </motion.div>
        
        {/* 标题 */}
        <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl tracking-tighter uppercase leading-tight"
        >
            The Cat Has Arrived
        </motion.h1>
        
        {/* 副标题 */}
        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-2xl text-purple-200 mb-12 max-w-3xl font-light leading-relaxed"
        >
            A psychological journey through feline eyes.
            <br className="hidden md:block" />
            <span className="block mt-2 font-bold text-white tracking-widest text-sm md:text-base opacity-80">
                BASED ON REAL CAT LOGIC
            </span>
        </motion.p>

        {/* 🔥 按钮区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row items-center justify-center"
        >
          {/* 主按钮：Start Game */}
          <button 
            onClick={() => scrollToSection('game-demo')} 
            style={{ height: '56px' }}
            className="flex items-center gap-3 px-8 bg-white text-black rounded-full font-black text-sm md:text-base uppercase tracking-wider hover:scale-105 hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Gamepad2 size={24} />
            <span>Start Game</span>
          </button>

          {/* 物理隔离墙 */}
          <div style={{ minWidth: '50px', height: '1px' }}></div>

          {/* 🔥 次按钮：GitHub (终极白底修复版) */}
          <a 
            href="https://github.com/Yoyo030807/Cat-Has-Arrived/tree/main/Assets/Fries%20and%20Seagull/Interior%2001/Scripts" 
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
                width: '56px', 
                height: '56px', 
                minWidth: '56px', 
                minHeight: '56px', 
                borderColor: 'black',
                color: 'black',
                textDecoration: 'none',
                marginLeft: '10px',
                // 🔥🔥🔥🔥🔥🔥 核心修复：强制内联白色背景！
                backgroundColor: 'white' 
            }}
            className="group rounded-full border hover:bg-gray-200 hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center flex-shrink-0"
            title="View Source Code on GitHub"
          >
            <Github 
                size={28} 
                color="black"
                className="transition-colors duration-300" 
            />
          </a>
        </motion.div>
      </div>
      
      {/* Scroll 箭头 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
            position: 'absolute',
            bottom: '40px', 
            left: '50%', 
            transform: 'translateX(-50%)',
            zIndex: 50
        }}
        className="cursor-pointer flex flex-col items-center text-white/40 hover:text-white transition-colors"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] mb-2">Scroll</span>
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}