"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Search, TrendingUp, TrendingDown, ArrowUpDown, Star, Filter } from "lucide-react";
import Link from "next/link";

export default function MarketsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const coins = [
    { s: "BTC", n: "Bitcoin", p: "$77,161.30", c: "+1.80%", isUp: true, v: "$28.4B", m: "$1.52T", icon: "/coins/btc.svg" },
    { s: "ETH", n: "Ethereum", p: "$2,414.77", c: "+2.12%", isUp: true, v: "$14.8B", m: "$290.4B", icon: "/coins/eth.svg" },
    { s: "SOL", n: "Solana", p: "$99.54", c: "+3.35%", isUp: true, v: "$4.1B", m: "$46.2B", icon: "/coins/sol.svg" },
    { s: "BNB", n: "BNB", p: "$685.03", c: "+0.10%", isUp: true, v: "$1.2B", m: "$98.7B", icon: "/coins/bnb.svg" },
    { s: "USDT", n: "Tether USD", p: "$1.00", c: "+0.01%", isUp: true, v: "$52.1B", m: "$120.5B", icon: "/coins/usdt.svg" },
    { s: "USDC", n: "USD Coin", p: "$1.00", c: "-0.01%", isUp: false, v: "$6.8B", m: "$35.4B", icon: "/coins/usdc.svg" },
  ];

  const filtered = coins.filter(c => 
    c.s.toLowerCase().includes(search.toLowerCase()) || 
    c.n.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 w-full">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-2">
              Cryptocurrency <span className="text-primary">Markets</span>
            </h1>
            <p className="text-white/50 text-sm">Real-time prices, volume, and depth across all verified trading pairs.</p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search coin name or symbol..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full pl-11 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-primary/50"
            />
          </div>
        </div>

        {/* Markets Table */}
        <div className="bg-[#0A0A0E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.02] border-b border-white/10 text-xs text-white/40 uppercase font-mono">
                <tr>
                  <th className="py-4 px-6">Asset</th>
                  <th className="py-4 px-6">Price</th>
                  <th className="py-4 px-6">24h Change</th>
                  <th className="py-4 px-6 hidden sm:table-cell">24h Volume</th>
                  <th className="py-4 px-6 hidden md:table-cell">Market Cap</th>
                  <th className="py-4 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filtered.map(coin => (
                  <tr key={coin.s} className="hover:bg-white/[0.03] transition-colors group">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img src={coin.icon} className="w-8 h-8 rounded-full" alt={coin.s} />
                        <div>
                          <div className="font-bold text-white group-hover:text-primary transition-colors">{coin.s}</div>
                          <div className="text-xs text-white/40">{coin.n}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-white">{coin.p}</td>
                    <td className="py-4 px-6 font-mono font-bold">
                      <span className={`inline-flex items-center gap-1 ${coin.isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {coin.isUp ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                        {coin.c}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-mono text-white/60 hidden sm:table-cell">{coin.v}</td>
                    <td className="py-4 px-6 font-mono text-white/60 hidden md:table-cell">{coin.m}</td>
                    <td className="py-4 px-6 text-right">
                      <Link 
                        href="/trade" 
                        className="inline-block bg-primary/20 hover:bg-primary text-primary hover:text-white border border-primary/40 font-bold px-4 py-1.5 rounded-full text-xs transition-all"
                      >
                        Trade
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}
