import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-pink-200/50 bg-white/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-600 flex items-center justify-center gap-2">
          Designed & Built with
          <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
          by Lama Qasem
        </p>
        <p className="text-xs text-gray-500 mt-2">
          © 2026 All rights reserved.
        </p>
      </div>
    </footer>
  );
}
