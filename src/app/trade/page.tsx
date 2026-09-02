"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import TradingSimulation from "@/components/ui/TradingSimulation";
import { ArrowUpRight, ArrowDownRight, Layers, Clock, Shield } from "lucide-react";

export default function TradePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 w-full flex flex-col gap-6">
        
        {/* Top Ticker Bar */}
        <div className="bg-[#0A0A0E] border border-white/10 p-4 rounded-2xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/coins/btc.svg" className="w-8 h-8 rounded-full" alt="BTC" />
              <div>
                <div className="font-display font-black text-lg text-white">BTC/USDT</div>
                <div className="text-xs text-white/40">Bitcoin Spot</div>
              </div>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div>
              <div className="text-xs text-white/40">24h High</div>
              <div className="text-sm font-mono font-bold text-white">$78,420.00</div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xs text-white/40">24h Low</div>
              <div className="text-sm font-mono font-bold text-white">$75,810.00</div>
            </div>
            <div className="hidden md:block">
              <div className="text-xs text-white/40">24h Volume</div>
              <div className="text-sm font-mono font-bold text-white">$1.24B</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
              ● Match Engine Live
            </span>
          </div>
        </div>

        {/* Main Trading Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart & Orderbook */}
          <div className="lg:col-span-2">
            <TradingSimulation />
          </div>

          {/* Place Order Panel */}
          <div className="bg-[#0A0A0E] border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="font-bold text-base text-white">Place Order</div>
              <div className="flex bg-white/5 rounded-xl p-1 text-xs">
                <button className="bg-emerald-500 text-white font-bold px-4 py-1.5 rounded-lg shadow">Buy</button>
                <button className="text-white/60 hover:text-white px-4 py-1.5 rounded-lg">Sell</button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-white/50 mb-1 block">Order Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-primary">
                  <option>Limit Order</option>
                  <option>Market Order</option>
                  <option>Stop Limit</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-white/50 mb-1 block">Price (USDT)</label>
                <input 
                  type="text" 
                  defaultValue="77,161.30" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-mono font-bold text-white focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs text-white/50 mb-1 block">Amount (BTC)</label>
                <input 
                  type="text" 
                  placeholder="0.00" 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm font-mono font-bold text-white focus:outline-none focus:border-primary"
                />
              </div>

              <div className="pt-2 flex justify-between text-xs text-white/40">
                <span>Available Balance</span>
                <span className="font-mono text-white">25,400.00 USDT</span>
              </div>

              <button className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-3.5 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all">
                Buy BTC
              </button>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
