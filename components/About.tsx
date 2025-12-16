"use client";
import { motion } from "framer-motion";
import { Users, ExternalLink, ChevronDown } from "lucide-react"; // 引入 ChevronDown

export default function About() {
  // 添加滚动函数
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // 🔥 修改点 1: 添加 relative，这是为了让绝对定位的箭头能以此为基准
    <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-screen relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-full max-w-4xl flex flex-col items-center text-center"
      >
        {/* --- 标题区域 --- */}
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6 drop-shadow-lg">
            Mission <span className="text-purple-400">Briefing</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-80"></div>
        </div>

        {/* --- 纯文字介绍 --- */}
        <div className="mb-16 max-w-3xl">
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light">
            "The Cat Has Arrived" is an interactive journey designed to foster empathy. 
            <br/><br/>
            Through carefully crafted scenarios, players navigate the gap between human perception and feline reality.
          </p>
        </div>

        {/* --- 导师卡片 --- */}
        <div className="mb-16 w-full flex justify-center">
            <a
                href="https://myweb.cuhk.edu.cn/sahbazojaji/Home/Index"
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                    color: 'white',             
                    textDecoration: 'none',     
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)', 
                    maxWidth: '600px',
                    width: '100%'
                }}
                className="group p-6 md:p-8 rounded-[2rem] hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-8 shadow-lg relative"
            >
                {/* 左侧图标 */}
                <div className="p-4 bg-purple-500/20 rounded-2xl group-hover:bg-purple-500/30 transition-colors flex-shrink-0">
                    <Users className="text-purple-300" size={32} />
                </div>
                
                {/* 中间文字 */}
                <div className="flex flex-col text-left">
                    <h4 className="text-xs text-purple-300 font-mono mb-1 uppercase tracking-widest font-bold">Instructor</h4>
                    
                    <p 
                        style={{ color: 'white' }}
                        className="font-black text-2xl md:text-3xl flex items-center gap-2 group-hover:text-purple-200 transition-colors"
                    >
                        Sahba Zojaji
                        <ExternalLink size={20} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                    </p>
                    <p className="text-gray-400 text-sm mt-1 font-mono">CUHK-Shenzhen</p>
                </div>
            </a>
        </div>

        {/* --- Team & Date --- */}
        <div className="flex flex-row items-center justify-center w-full">
            
            {/* Team Capsule */}
            <div className="flex flex-col items-center">
                <p className="text-[10px] font-mono uppercase tracking-widest text-pink-400/80 mb-2 font-bold">Team</p>
                <div className="px-10 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <p className="font-bold text-white text-sm whitespace-nowrap">Friends Without Benefits</p>
                </div>
            </div>

            {/* 50px 物理隔离墙 */}
            <div style={{ minWidth: '50px', height: '1px' }}></div>

            {/* Date Capsule */}
            <div className="flex flex-col items-center">
                <p className="text-[10px] font-mono uppercase tracking-widest text-green-400/80 mb-2 font-bold">Date</p>
                <div className="px-10 py-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <p className="font-bold text-white text-sm whitespace-nowrap">2025-12-09</p>
                </div>
            </div>
            
        </div>
      </motion.div>

      {/* 🔥🔥🔥 修改点 2: 底部 Scroll 箭头 (复用 Hero 样式) 🔥🔥🔥 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
            position: 'absolute',
            bottom: '40px',   // 强制距离底部 40px
            left: '50%',      // 水平居中
            transform: 'translateX(-50%)',
            zIndex: 50
        }}
        // 点击跳转到下一页 (game-demo)
        className="cursor-pointer flex flex-col items-center text-white/40 hover:text-white transition-colors"
        onClick={() => scrollToSection('game-demo')}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em] mb-2">Next</span>
        <ChevronDown size={24} />
      </motion.div>

    </div>
  );
}