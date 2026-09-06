import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] px-6 text-center relative overflow-hidden">
      
      {/* Massive brutalist background text */}
      <h1 className="text-[12rem] md:text-[18rem] font-black text-white/[0.02] tracking-tighter font-mono select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        404
      </h1>
      
      {/* Foreground Content */}
      <div className="relative z-10 mt-12">
        <p className="text-[#10B981] font-bold uppercase tracking-[0.3em] text-sm mb-6">
          System Error
        </p>
        
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight">
          Match Not Found
        </h2>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto mb-10 leading-relaxed font-medium">
          The lobby you're looking for has been dropped, deleted, or never existed. Check your coordinates.
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold text-black bg-[#10B981] rounded hover:bg-white transition-colors duration-200 uppercase tracking-[0.2em]"
        >
          Return to Base
        </Link>
      </div>

    </div>
  );
}
