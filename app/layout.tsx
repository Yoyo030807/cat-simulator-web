import "./globals.css";

// 这里定义网站的标题和描述
export const metadata = {
  title: "Cat Simulator",
  description: "A Unity WebGL Game developed by Team",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      {/* 这里的 body 去掉了谷歌字体的引用，直接用系统默认字体 */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}