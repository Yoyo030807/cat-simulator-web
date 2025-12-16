import Hero from "@/components/Hero";
import About from "@/components/About";
import GameSection from "@/components/GameSection";
import Team from "@/components/Team";
import CodeShowcase from "@/components/CodeShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // 🔥 修改点：
    // 1. h-screen: 占满屏幕高度
    // 2. overflow-y-scroll: 允许内部滚动
    // 3. snap-y snap-mandatory: 开启强制垂直吸附 (PPT效果核心)
    // 4. no-scrollbar: 隐藏右侧丑陋的滚动条
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar bg-[#0f172a] text-white">
      
      {/* 1. 首页 (每一页都加 snap-start 和 min-h-screen) */}
      <section className="snap-start min-h-screen w-full flex items-center justify-center relative">
        <Hero />
      </section>

      {/* 2. 关于 (背景加点深色区分) */}
      <section id="about" className="snap-start min-h-screen w-full flex items-center justify-center bg-black/10 backdrop-blur-sm">
        <About />
      </section>

      {/* 3. 游戏 (这一页内容多，用 min-h-screen 保证不被切掉，flex让它居中) */}
      <section id="game-demo" className="snap-start min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#0f172a] to-purple-900/20">
        <GameSection />
      </section>

      {/* 4. 团队 */}
      <section id="team" className="snap-start min-h-screen w-full flex items-center justify-center">
        <Team />
      </section>

      {/* 5. 代码 */}
      <section id="code" className="snap-start min-h-screen w-full flex items-center justify-center bg-black/20">
        <CodeShowcase />
      </section>

      {/* 6. 页脚 (页脚不需要占满全屏，让它自然跟在代码页后面即可，或者给它 snap-align-end) */}
      <div className="snap-end">
        <Footer />
      </div>
    </main>
  );
}