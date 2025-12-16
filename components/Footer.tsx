export default function Footer() {
    return (
      <footer className="py-8 bg-black/40 border-t border-white/5 backdrop-blur-md">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Friends Without Benefits. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-xs text-gray-600">
            <span>Unity 2022 LTS</span>
            <span>•</span>
            <span>Next.js 14</span>
            <span>•</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </footer>
    );
}