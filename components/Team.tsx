"use client";
import { motion } from "framer-motion";
import { Cat } from "lucide-react";

// 团队成员数据
const teamMembers = [
  {
    id: "yaoyao",
    name: "Yaoyao YU",
    role: "Creative & Lead Developer",
    color: "text-orange-400", 
    image: "/team/yaoyao.jpg", 
    // 你的专属链接
    link: "https://huggingface.co/YaoyaoYU",
    description: "The mastermind behind the code."
  },
  {
    id: "fortune",
    name: "Fortune FISH",
    role: "Script Writer & Consultant",
    color: "text-gray-300",
    image: "/team/fortune.jpg",
    description: "The soul of the narrative."
  },
  {
    id: "lele",
    name: "Lele DUO",
    role: "UI Designer & Manager",
    color: "text-yellow-200",
    image: "/team/lele.jpg",
    description: "The visual magician."
  }
];

export default function Team() {
  return (
    <div className="container mx-auto px-4 h-full flex flex-col justify-center relative">
      {/* 1. 标题区域 */}
      <div className="text-center mb-16 md:mb-24">
        <h2 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter uppercase text-white drop-shadow-lg">
          The Creators
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full opacity-80"></div>
      </div>

      {/* 2. 成员列表 */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24">
        {teamMembers.map((member, index) => {
          // 定义头像内容的 JSX
          const AvatarContent = (
            <div className="relative mb-6 group">
                {/* 🔥🔥🔥 强制锁定尺寸 & 强制白边 🔥🔥🔥 */}
                <div 
                    style={{ 
                        width: '120px', 
                        height: '120px',
                        // 强制覆盖：边框变白
                        borderColor: 'white' 
                    }} 
                    // 这里把 border-[#1a1a1a] 改成了 border-white
                    // 同时保留 border-4 确保边框够粗
                    className={`rounded-full border-4 border-white outline outline-2 outline-white/20 overflow-hidden ${member.link ? "group-hover:scale-105 group-hover:outline-purple-500 cursor-pointer" : ""} transition-all duration-500 ease-out z-10 relative bg-black/50 shadow-2xl flex-shrink-0`}
                >
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center filter brightness-90 group-hover:brightness-110 transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        (e.target as HTMLImageElement).parentElement!.classList.add('bg-gray-800');
                      }}
                    />
                    
                    <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <Cat className="text-white/20" size={24}/>
                    </div>
                </div>

                {/* 装饰光环 (只有有链接时才显示 Hover 效果) */}
                {member.link && (
                    <div 
                        style={{ width: '120px', height: '120px' }}
                        className="absolute top-0 left-0 bg-purple-600/40 rounded-full blur-xl scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    ></div>
                )}
            </div>
          );

          return (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="flex flex-col items-center text-center relative"
            >
              {/* 如果有 link，就用 <a> 包裹头像 */}
              {member.link ? (
                <a 
                    href={member.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Visit Profile"
                >
                    {AvatarContent}
                </a>
              ) : (
                <div>
                    {AvatarContent}
                </div>
              )}

              {/* 名字与职位 */}
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight text-white">
                {member.name}
              </h3>
              <p className="font-mono text-xs text-white/50 uppercase tracking-[0.2em]">
                {member.role}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}