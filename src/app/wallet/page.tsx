"use client";

import React from "react";
import { Header } from "@/components/layout/Header";
import { Wallet, ArrowDownLeft, ArrowUpRight, RefreshCw, Shield, Plus, Lock } from "lucide-react";

export default function WalletPage() {
  const assets = [
    { s: "BTC", n: "Bitcoin", b: "0.8412", usd: "$64,908.12", icon: "/coins/btc.svg" },
    { s: "ETH", n: "Ethereum", b: "12.4500", usd: "$30,063.88", icon: "/coins/eth.svg" },
    { s: "SOL", n: "Solana", b: "142.3000", usd: "$14,164.54", icon: "/coins/sol.svg" },
    { s: "USDT", n: "Tether USD", b: "19,803.68", usd: "$19,803.68", icon: "/coins/usdt.svg" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 w-full">
        
        {/* Wallet Overview Header */}
        <div className="bg-[#0A0A0E] border border-white/10 p-8 rounded-3xl mb-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="text-xs font-mono font-bold text-white/40 uppercase tracking-widest mb-1">Total Estimated Balance</div>
              <div className="text-4xl md:text-5xl font-display font-black text-white">$128,940<span className="text-white/40 text-2xl">.22 USD</span></div>
              <div className="text-xs text-emerald-400 font-bold mt-2">● +$3,412.08 (+2.72%) 24h</div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="bg-primary hover:bg-primary-light text-white font-bold px-6 py-3 rounded-full text-sm shadow-[0_0_20px_rgba(176,38,255,0.4)] flex items-center gap-2">
                <ArrowDownLeft className="w-4 h-4" /> Deposit
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-6 py-3 rounded-full text-sm flex items-center gap-2">
                <ArrowUpRight className="w-4 h-4" /> Withdraw
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-6 py-3 rounded-full text-sm flex items-center gap-2">
                <RefreshCw className="w-4 h-4" /> Transfer
              </button>
            </div>
          </div>
        </div>

        {/* Asset Holdings */}
        <div className="bg-[#0A0A0E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <h2 className="text-lg font-bold text-white">Asset Balances</h2>
            <div className="text-xs text-white/40 font-mono">4 Assets Held</div>
          </div>

          <div className="divide-y divide-white/5">
            {assets.map(asset => (
              <div key={asset.s} className="p-6 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
                <div className="flex items-center gap-4">
                  <img src={asset.icon} className="w-10 h-10 rounded-full" alt={asset.s} />
                  <div>
                    <div className="font-bold text-base text-white">{asset.n}</div>
                    <div className="text-xs text-white/40 font-mono">{asset.s}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono font-bold text-base text-white">{asset.b} {asset.s}</div>
                  <div className="text-xs text-white/40 font-mono">≈ {asset.usd}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
