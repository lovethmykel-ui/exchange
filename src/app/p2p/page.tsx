"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Shield, ShieldCheck, CheckCircle2, Search, Filter, Lock } from "lucide-react";

export default function P2PPage() {
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");

  const offers = [
    { trader: "NexusKing_Trader", orders: "1,420 orders", rate: "99.8%", crypto: "USDT", price: "₦1,485.50", available: "14,500 USDT", limit: "₦50,000 - ₦2,000,000", payment: "Bank Transfer" },
    { trader: "CryptoVault_VIP", orders: "892 orders", rate: "100%", crypto: "USDT", price: "₦1,486.00", available: "32,000 USDT", limit: "₦100,000 - ₦5,000,000", payment: "Kuda / OPay" },
    { trader: "AlphaEscrow_NG", orders: "3,110 orders", rate: "99.4%", crypto: "USDT", price: "₦1,487.20", available: "8,200 USDT", limit: "₦20,000 - ₦1,200,000", payment: "Bank Transfer" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 w-full">
        
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-wider mb-2">
            <Shield className="w-4 h-4" /> 100% Smart Contract Escrow
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-black tracking-tight mb-3">
            P2P <span className="text-primary">Escrow Marketplace</span>
          </h1>
          <p className="text-white/50 text-sm max-w-xl">
            Buy and sell crypto directly with verified peers. Assets remain locked in escrow until payment is confirmed.
          </p>
        </div>

        {/* Action Toggle */}
        <div className="flex items-center gap-4 mb-8 bg-[#0A0A0E] border border-white/10 p-2 rounded-2xl w-fit">
          <button 
            onClick={() => setTradeType("buy")} 
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${tradeType === "buy" ? "bg-emerald-500 text-white shadow" : "text-white/50 hover:text-white"}`}
          >
            Buy Crypto
          </button>
          <button 
            onClick={() => setTradeType("sell")} 
            className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${tradeType === "sell" ? "bg-rose-500 text-white shadow" : "text-white/50 hover:text-white"}`}
          >
            Sell Crypto
          </button>
        </div>

        {/* Offers List */}
        <div className="bg-[#0A0A0E] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white/[0.02] border-b border-white/10 text-xs text-white/40 uppercase font-mono">
                <tr>
                  <th className="py-4 px-6">Advertiser</th>
                  <th className="py-4 px-6">Price</th>
                  <th className="py-4 px-6">Available / Limit</th>
                  <th className="py-4 px-6">Payment Method</th>
                  <th className="py-4 px-6 text-right">Trade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {offers.map((offer, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                    <td className="py-4 px-6">
                      <div className="font-bold text-white flex items-center gap-1.5">
                        {offer.trader}
                        <ShieldCheck className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-xs text-white/40">{offer.orders} | {offer.rate} completion</div>
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-base text-white">{offer.price}</td>
                    <td className="py-4 px-6 text-xs">
                      <div className="font-mono text-white/80">{offer.available}</div>
                      <div className="text-white/40 mt-0.5">{offer.limit}</div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium text-white/70">
                        {offer.payment}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className={`font-bold px-6 py-2 rounded-full text-xs transition-all shadow-md ${tradeType === "buy" ? "bg-emerald-500 hover:bg-emerald-400 text-white" : "bg-rose-500 hover:bg-rose-400 text-white"}`}>
                        {tradeType === "buy" ? "Buy USDT" : "Sell USDT"}
                      </button>
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
