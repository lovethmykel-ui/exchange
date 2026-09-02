"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Wallet, Bell, User, Settings, Maximize,
  ChevronDown, ArrowRight, Activity, Crosshair, Type, 
  BarChart2, PenTool, LayoutTemplate, LineChart, 
  Settings2, Star
} from 'lucide-react';

const formatNum = (num: number, decimals: number = 2) => num.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
const rand = (min: number, max: number) => Math.random() * (max - min) + min;

export default function TradingSimulation() {
  const [candlesticks, setCandlesticks] = useState<any[]>([]);
  const [currentPrice, setCurrentPrice] = useState(67351.20);
  const [priceFlash, setPriceFlash] = useState<"up" | "down" | null>(null);
  const [asks, setAsks] = useState<any[]>([]);
  const [bids, setBids] = useState<any[]>([]);

  useEffect(() => {
    const initialCandles = Array.from({ length: 40 }).map((_, i) => {
      const open = rand(66500, 67800);
      const close = open + rand(-150, 150);
      return {
        id: i,
        open, close,
        high: Math.max(open, close) + rand(10, 80),
        low: Math.min(open, close) - rand(10, 80),
        isUp: close >= open
      };
    });
    setCandlesticks(initialCandles);

    let askPrice = 67352.00;
    const initialAsks = Array.from({ length: 9 }).map((_, i) => {
       const p = askPrice + (i * rand(0.5, 2));
       const a = rand(0.01, 1.8);
       return { id: i, price: p, amount: a, total: p * a, width: rand(15, 85) };
    }).reverse();
    setAsks(initialAsks);

    let bidPrice = 67349.00;
    const initialBids = Array.from({ length: 9 }).map((_, i) => {
       const p = bidPrice - (i * rand(0.5, 2));
       const a = rand(0.01, 1.8);
       return { id: i, price: p, amount: a, total: p * a, width: rand(15, 85) };
    });
    setBids(initialBids);
  }, []);

  return (
    <div className="w-full bg-[#0E0E12] rounded-2xl border border-white/10 overflow-hidden text-white font-sans text-xs">
      {/* Pair Bar */}
      <div className="p-4 bg-[#14141A] border-b border-white/5 flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <img src="/coins/btc.svg" className="w-6 h-6" alt="BTC" />
          <div>
            <div className="font-bold text-sm text-white">BTC/USDT</div>
            <div className="text-[10px] text-white/40">Bitcoin / Tether</div>
          </div>
        </div>
        <div className="text-right">
          <div className="font-mono font-bold text-emerald-400 text-sm">{formatNum(currentPrice)} USDT</div>
          <div className="text-[10px] text-white/40">+2.45% 24h</div>
        </div>
      </div>

      {/* Mini Orderbook & Chart Preview */}
      <div className="p-4 grid grid-cols-2 gap-4">
        <div>
          <div className="text-[10px] text-white/40 font-bold uppercase mb-2">Asks (Sell)</div>
          <div className="space-y-1">
            {asks.slice(0, 5).map((a) => (
              <div key={a.id} className="flex justify-between text-[11px] font-mono relative py-0.5">
                <div className="absolute top-0 right-0 bottom-0 bg-red-500/10" style={{ width: `${a.width}%` }} />
                <span className="text-red-400 relative z-10">{formatNum(a.price, 1)}</span>
                <span className="text-white/60 relative z-10">{a.amount.toFixed(3)}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] text-white/40 font-bold uppercase mb-2">Bids (Buy)</div>
          <div className="space-y-1">
            {bids.slice(0, 5).map((b) => (
              <div key={b.id} className="flex justify-between text-[11px] font-mono relative py-0.5">
                <div className="absolute top-0 right-0 bottom-0 bg-emerald-500/10" style={{ width: `${b.width}%` }} />
                <span className="text-emerald-400 relative z-10">{formatNum(b.price, 1)}</span>
                <span className="text-white/60 relative z-10">{b.amount.toFixed(3)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
