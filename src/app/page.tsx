'use client';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState({ italia: 0, estero: 0, google: 0, social: 0 });

  const add = (key: keyof typeof data) => {
    setData(prev => ({ ...prev, [key]: prev[key] + 1 }));
  };

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold my-8 text-blue-400 uppercase tracking-tighter">SEUM 🏛️</h1>
      
      <div className="w-full max-w-sm space-y-6">
        {/* PROVENIENZA */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => add('italia')} className="bg-blue-600 active:scale-95 transition-transform p-6 rounded-2xl shadow-xl">
            <span className="block text-sm opacity-80 uppercase font-bold">Italia</span>
            <span className="text-4xl font-black">{data.italia}</span>
          </button>
          <button onClick={() => add('estero')} className="bg-emerald-600 active:scale-95 transition-transform p-6 rounded-2xl shadow-xl">
            <span className="block text-sm opacity-80 uppercase font-bold">Estero</span>
            <span className="text-4xl font-black">{data.estero}</span>
          </button>
        </div>

        {/* CANALI */}
        <div className="space-y-3">
          <button onClick={() => add('google')} className="w-full bg-slate-800 p-5 rounded-xl flex justify-between items-center border border-slate-700 active:bg-slate-700">
            <span className="font-semibold text-slate-300">🔍 Google Maps</span>
            <span className="text-2xl font-mono font-bold">{data.google}</span>
          </button>
          <button onClick={() => add('social')} className="w-full bg-slate-800 p-5 rounded-xl flex justify-between items-center border border-slate-700 active:bg-slate-700">
            <span className="font-semibold text-slate-300">📸 Social Media</span>
            <span className="text-2xl font-mono font-bold text-pink-400">{data.social}</span>
          </button>
        </div>

        {/* RESET */}
        <button 
          onClick={() => setData({ italia: 0, estero: 0, google: 0, social: 0 })}
          className="w-full py-4 text-slate-500 text-xs uppercase tracking-widest hover:text-red-400 transition-colors"
        >
          Reset giornaliero
        </button>
      </div>
    </main>
  );
}
