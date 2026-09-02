"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { 
  ArrowRight, Shield, ShieldCheck, Lock, Activity, 
  CheckCircle2, Star, ArrowLeftRight, ChevronDown, 
  ChevronUp, Sparkles, TrendingUp, Cpu, Bot
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";
import TradingSimulation from "@/components/ui/TradingSimulation";
import { CinematicSwapScene } from "@/components/ui/CinematicSwapScene";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How does the Instant Swap rate guarantee work?",
      a: "Our smart liquidity aggregator routes across top decentralized and OTC pools with locked quotes. Once you confirm, your execution rate is 100% guaranteed with 0% hidden slippage."
    },
    {
      q: "Is OKNexus P2P escrow truly decentralized?",
      a: "Yes. When a buyer initiates a trade, the seller's crypto is locked in a multi-signature smart contract escrow. Funds are automatically released only after cryptographic or verified fiat payment confirmation."
    },
    {
      q: "How does the Polymarket AI Prediction Agent work?",
      a: "Our AI trading agent scans real-time news sentiment, volume flow, and prediction market probability deltas 24/7 to execute automated high-probability position entries."
    },
    {
      q: "What security measures protect user funds?",
      a: "Over 95% of digital assets are held in air-gapped, multi-signature cold storage audited under SOC 2 Type II and ISO/IEC 27001 standards with zero historical security breaches."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] flex flex-col selection:bg-primary/30 relative overflow-x-hidden">
      <Header />
      
      <main className="flex-1 w-full relative z-10 pt-20">
        
        {/* === HERO SECTION === */}
        <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-16 md:py-28 flex flex-col items-center justify-center text-center">
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[700px] h-[350px] md:h-[400px] bg-primary/20 rounded-full blur-[100px] md:blur-[140px] -z-10 pointer-events-none" />

          {/* Announcement Pill */}
          <ScrollReveal delay={0.1} direction="up">
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-4 py-1.5 rounded-full text-xs font-semibold text-primary mb-8 shadow-[0_0_20px_rgba(176,38,255,0.3)]">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Now Serving 500,000+ Global Traders
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="up">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5rem] font-display font-black text-white leading-[1.1] tracking-tight mb-6">
              The exchange that<br />
              connects you to the<br />
              <span className="text-primary font-black drop-shadow-[0_0_25px_rgba(176,38,255,0.6)]">future of finance</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3} direction="up">
            <p className="text-base sm:text-lg md:text-xl text-white/60 mb-10 max-w-2xl leading-relaxed mx-auto">
              Buy, sell, swap, and trade digital assets on one unified, high-speed platform with live market data, escrow-protected P2P, and real on-chain custody.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.4} direction="up" className="w-full flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <button className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(176,38,255,0.5)]">
                Start Trading <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/5 border border-white/15 hover:bg-white/10 text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 duration-200">
                Explore Markets
              </button>
            </div>
          </ScrollReveal>
          
          {/* Trust Badges under Hero CTA */}
          <ScrollReveal delay={0.5} direction="up">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 text-xs sm:text-sm text-white/60 font-medium">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> Bank-Grade Cold Storage</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> &lt; 5s Instant Execution</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> 24/7 VIP Support</div>
            </div>
          </ScrollReveal>

          {/* Floating Market Card */}
          <ScrollReveal delay={0.6} direction="up" className="w-full max-w-3xl mt-14 relative z-30">
            <div className="p-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
              <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center bg-[#07070B]/90 backdrop-blur-2xl rounded-3xl text-left">
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-white/50 uppercase tracking-widest font-bold">Live Portfolio Balance</span>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-2">$128,940<span className="text-white/40 text-2xl">.22</span></div>
                  <div className="text-emerald-400 font-bold text-sm flex items-center gap-1.5 mb-6">
                    <TrendingUp className="w-4 h-4" /> +$3,412.08 (+2.72%) today
                  </div>
                  <div className="flex gap-2">
                    {['1H', '1D', '1W', '1M', '1Y'].map((t, i) => (
                      <div key={t} className={`px-3 py-1 rounded-full text-xs font-bold cursor-pointer ${i === 1 ? 'bg-primary text-white shadow-[0_0_10px_rgba(176,38,255,0.5)]' : 'text-white/40 hover:text-white'}`}>{t}</div>
                    ))}
                  </div>
                </div>
                
                <div className="w-full md:w-[1px] h-[1px] md:h-44 bg-white/10" />

                <div className="flex-1 w-full flex flex-col gap-3">
                  {[ 
                    { s: 'BTC', n: 'Bitcoin', p: '$77,161.30', c: '+1.80%', icon: '/coins/btc.svg' },
                    { s: 'ETH', n: 'Ethereum', p: '$2,414.77', c: '+2.12%', icon: '/coins/eth.svg' },
                    { s: 'SOL', n: 'Solana', p: '$99.54', c: '+3.35%', icon: '/coins/sol.svg' },
                    { s: 'BNB', n: 'BNB Chain', p: '$685.03', c: '+0.10%', icon: '/coins/bnb.svg' }
                  ].map(coin => (
                    <div key={coin.s} className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-2 rounded-xl transition-colors">
                      <div className="flex items-center gap-3">
                        <img src={coin.icon} className="w-8 h-8 rounded-full shadow-lg" alt={coin.s} />
                        <div>
                          <div className="text-sm font-bold text-white group-hover:text-primary transition-colors">{coin.s}/USDT</div>
                          <div className="text-[11px] text-white/40">{coin.n}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-white">{coin.p}</div>
                        <div className="text-xs text-emerald-400 font-bold">{coin.c}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* === STATS & TRUST METRICS (Jeroid 4-Column Ribbon) === */}
        <section className="border-y border-white/10 bg-[#0A0A0E]/80 backdrop-blur-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none" />
          <ScrollReveal delay={0.1}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              <div className="flex flex-col items-center justify-center text-center px-4 pt-4 lg:pt-0">
                <div className="font-display font-black text-3xl md:text-4xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(176,38,255,0.4)]">500K+</div>
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">Active Traders</div>
                <div className="text-[11px] text-white/40 mt-0.5">Across 120+ countries</div>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-4 pt-4 lg:pt-0">
                <div className="font-display font-black text-3xl md:text-4xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(176,38,255,0.4)]">$1.8B+</div>
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">Total Volume Settled</div>
                <div className="text-[11px] text-white/40 mt-0.5">100% on-chain & verified</div>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-4 pt-4 lg:pt-0">
                <div className="font-display font-black text-3xl md:text-4xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(176,38,255,0.4)]">100%</div>
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">Escrow Guaranteed</div>
                <div className="text-[11px] text-white/40 mt-0.5">Zero counterparty risk</div>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-4 pt-4 lg:pt-0">
                <div className="font-display font-black text-3xl md:text-4xl text-white tracking-tight drop-shadow-[0_0_15px_rgba(176,38,255,0.4)]">0</div>
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mt-1">Security Breaches</div>
                <div className="text-[11px] text-white/40 mt-0.5">Bank-grade cold custody</div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* === ASSETS CHIPS SECTION === */}
        <section className="py-20 border-b border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Trade the assets that <span className="text-primary font-bold drop-shadow-[0_0_15px_rgba(176,38,255,0.5)]">actually matter</span>
              </h2>
              <p className="text-white/50 text-sm mb-10 max-w-xl mx-auto">Every market is priced live, second by second, so you always trade on real numbers.</p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-4xl mx-auto mb-8">
                {[
                  { s: 'BTC', icon: '/coins/btc.svg' },
                  { s: 'ETH', icon: '/coins/eth.svg' },
                  { s: 'SOL', icon: '/coins/sol.svg' },
                  { s: 'BNB', icon: '/coins/bnb.svg' },
                  { s: 'USDT', icon: '/coins/usdt.svg' },
                  { s: 'USDC', icon: '/coins/usdc.svg' }
                ].map(coin => (
                  <div key={coin.s} className="flex items-center gap-3 bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 px-5 py-2.5 rounded-full cursor-pointer transition-all hover:scale-105 shadow-sm group">
                    <img src={coin.icon} className="w-5 h-5 rounded-full" alt={coin.s} />
                    <span className="text-white font-bold text-sm group-hover:text-primary transition-colors">{coin.s}</span>
                  </div>
                ))}
              </div>
              <button className="text-primary hover:text-primary-light font-bold text-sm flex items-center gap-2 mx-auto transition-colors group">
                Browse all 250+ markets <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </ScrollReveal>
          </div>
        </section>

        {/* === INSTANT SWAP SECTION (3D TILT ANIMATED SWAP CARD) === */}
        <section id="swap" className="bg-[#050505] border-t border-white/5 py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] -z-10 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: 3D Currency Swap Terminal */}
            <div className="w-full lg:w-1/2 relative z-10">
              <ScrollReveal delay={0.2} direction="right">
                <CinematicSwapScene />
              </ScrollReveal>
            </div>

            {/* Right: Copy & CTA */}
            <div className="w-full lg:w-1/2 relative z-20">
              <ScrollReveal delay={0.1} direction="up">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-6">
                  <ArrowLeftRight className="w-4 h-4" /> Instant Swap
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 tracking-tight">
                  Swap any two assets in <span className="text-primary font-bold drop-shadow-[0_0_15px_rgba(176,38,255,0.5)]">one tap</span>
                </h2>
                <p className="text-base sm:text-lg text-white/50 mb-8 leading-relaxed max-w-lg">
                  Convert between assets at a locked, transparent rate that refreshes every few seconds. No order books to read — just choose, review the quote, and confirm.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(176,38,255,0.4)]">
                    Swap Now <ArrowRight className="w-5 h-5" />
                  </button>
                  <button className="bg-transparent border border-white/20 hover:bg-white/5 text-white font-bold py-4 px-8 rounded-full transition-all">
                    View Supported Pairs
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* === TRADING PLATFORM SECTION === */}
        <section id="trading" className="bg-[#050505] border-y border-white/5 py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/4 w-[700px] h-[300px] bg-primary/10 rounded-full blur-[150px] -z-10" />
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <ScrollReveal delay={0.1} direction="up">
                <div className="bg-white/10 text-white/70 text-xs px-3 py-1 rounded-full w-fit mb-6 font-semibold uppercase tracking-wider border border-white/10">Built for Traders</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6 tracking-tight">
                  Powerful.<br/>
                  Intuitive.<br/>
                  <span className="text-primary font-bold drop-shadow-[0_0_15px_rgba(176,38,255,0.5)]">Professional.</span>
                </h2>
                <div className="flex flex-col gap-3 mb-8 text-white/80 text-sm sm:text-base">
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Advanced TradingView Pro Charts</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Real-time Depth & Live Order Book</div>
                  <div className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /> Sub-millisecond Execution Latency</div>
                </div>
                <button className="bg-primary hover:bg-primary-light text-white font-bold py-3.5 px-8 rounded-full transition-all hover:scale-105 active:scale-95 duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(176,38,255,0.4)]">
                  Launch Trading Desk <ArrowRight className="w-4 h-4" />
                </button>
              </ScrollReveal>
            </div>
            
            <div className="flex-1 w-full max-w-xl">
              <ScrollReveal delay={0.3} direction="left">
                <TradingSimulation />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* === P2P ESCROW SECTION === */}
        <section id="escrow" className="max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <ScrollReveal delay={0.1} direction="up">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-6">
                  <Shield className="w-4 h-4" /> Ironclad Escrow
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
                  Trade Directly.<br/><span className="text-primary font-bold drop-shadow-[0_0_15px_rgba(176,38,255,0.5)]">Zero Risk.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/50 mb-8 leading-relaxed max-w-lg">
                  Our intelligent escrow smart contracts lock crypto assets the moment a trade is opened. Funds are only released when payment is cryptographically verified, ensuring 100% protection for both parties.
                </p>
                <button className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(176,38,255,0.4)]">
                  Enter P2P Marketplace <ArrowRight className="w-5 h-5" />
                </button>
              </ScrollReveal>
            </div>

            {/* Escrow Visual Module */}
            <div className="lg:w-1/2 w-full order-2 lg:order-1">
              <ScrollReveal delay={0.2} direction="right">
                <div className="p-6 md:p-8 rounded-3xl bg-[#0A0A0E] border border-white/10 shadow-[0_0_50px_rgba(176,38,255,0.15)] space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-white/80">ESCROW ORDER #8942</span>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs px-3 py-1 rounded-full font-bold">FUNDS LOCKED</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <div className="text-xs text-white/40 mb-1">Buyer (You)</div>
                      <div className="font-bold text-white text-base">Send $25,000 USD</div>
                      <div className="text-[11px] text-primary mt-2">Wire Transfer / Bank</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                      <div className="text-xs text-white/40 mb-1">Seller Escrow</div>
                      <div className="font-bold text-white text-base">0.324 BTC Locked</div>
                      <div className="text-[11px] text-emerald-400 mt-2">Verified Contract</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-primary/10 border border-primary/30 flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-xs text-white/80 leading-relaxed">
                      Assets cannot be withdrawn by seller until you confirm receipt of payment.
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* === POLYMARKET AI AGENT SECTION === */}
        <section id="polymarket" className="bg-[#050505] border-t border-white/5 py-24 md:py-32 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-1 z-20">
              <ScrollReveal delay={0.1} direction="up">
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-6">
                  <Bot className="w-4 h-4" /> AI Prediction Markets
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] mb-6 tracking-tight">
                  Predict the Unpredictable.<br/><span className="text-primary font-bold drop-shadow-[0_0_15px_rgba(176,38,255,0.5)]">Automated.</span>
                </h2>
                <p className="text-base sm:text-lg text-white/50 mb-8 leading-relaxed max-w-lg">
                  Deploy our intelligent Polymarket Trading Agent to analyze global sentiment, monitor breaking news, and execute high-probability prediction market positions automatically.
                </p>
                <button className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-8 rounded-full transition-all hover:scale-105 active:scale-95 duration-200 flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(176,38,255,0.4)]">
                  Deploy Agent Now <ArrowRight className="w-5 h-5" />
                </button>
              </ScrollReveal>
            </div>

            <div className="lg:w-1/2 w-full order-2">
              <ScrollReveal delay={0.2} direction="left">
                <div className="p-6 md:p-8 rounded-3xl bg-[#0A0A0E] border border-primary/30 shadow-[0_0_60px_rgba(176,38,255,0.25)] space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-primary">POLYMARKET AGENT // ACTIVE</span>
                    <span className="text-xs font-mono text-emerald-400 font-bold">WIN RATE: 82.4%</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Will Spot ETH ETF reach $10B inflows?</div>
                      <div className="text-xs text-white/40 mt-0.5">Confidence: 91.2% • Volume: $14.2M</div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">BUY YES @ 68¢</span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-bold text-white">Fed cuts interest rate by 50bps in Q3?</div>
                      <div className="text-xs text-white/40 mt-0.5">Confidence: 87.5% • Volume: $48.8M</div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full">BUY YES @ 74¢</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* === 3-STEP ONBOARDING FUNNEL === */}
        <section className="bg-[#050505] border-t border-white/5 py-24 md:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <ScrollReveal delay={0.1} direction="up">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight">
                  Start trading in <span className="text-primary font-bold drop-shadow-[0_0_15px_rgba(176,38,255,0.5)]">3 simple steps</span>
                </h2>
                <p className="text-white/50 text-base">Get from zero to active trading in less than 3 minutes with zero paperwork.</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={0.1} direction="up">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center font-display font-black text-xl text-primary mb-6 shadow-[0_0_15px_rgba(176,38,255,0.3)]">
                    01
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Create Free Account</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">Connect your Web3 wallet or sign up in 30 seconds with instant verification.</p>
                  <div className="flex items-center gap-2 text-xs text-primary font-bold"><CheckCircle2 className="w-4 h-4" /> &lt; 30s Instant Setup</div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="up">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center font-display font-black text-xl text-primary mb-6 shadow-[0_0_15px_rgba(176,38,255,0.3)]">
                    02
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Deposit or Lock Quote</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">Fund via crypto or fiat. Access real-time quotes with 0% hidden spreads.</p>
                  <div className="flex items-center gap-2 text-xs text-primary font-bold"><CheckCircle2 className="w-4 h-4" /> Zero Hidden Spread</div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3} direction="up">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-primary/50 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center font-display font-black text-xl text-primary mb-6 shadow-[0_0_15px_rgba(176,38,255,0.3)]">
                    03
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Trade & Settle Securely</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">Execute spot trades, swaps, or P2P deals with 100% smart contract escrow.</p>
                  <div className="flex items-center gap-2 text-xs text-primary font-bold"><CheckCircle2 className="w-4 h-4" /> 100% Protected</div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* === FAQ ACCORDION === */}
        <section id="faq" className="max-w-4xl mx-auto px-4 md:px-8 py-24 md:py-32">
          <ScrollReveal delay={0.1} direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-white/50 text-sm">Everything you need to know about OKNexus exchange security and trading.</p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-2xl bg-white/[0.02] border border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between font-bold text-white hover:text-primary transition-colors text-sm sm:text-base"
                >
                  <span>{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-white/40 shrink-0" />}
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* === FINAL CALL TO ACTION === */}
        <section className="bg-gradient-to-b from-transparent to-primary/10 border-t border-white/5 py-24 text-center relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 md:px-8">
            <ScrollReveal delay={0.1} direction="up">
              <h2 className="text-4xl md:text-6xl font-display font-black text-white mb-6">
                Ready to trade with <span className="text-primary font-black drop-shadow-[0_0_20px_rgba(176,38,255,0.6)]">zero limits?</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 max-w-xl mx-auto">
                Join 500,000+ traders experiencing instant swaps, P2P escrow protection, and autonomous AI agents.
              </p>
              <button className="bg-primary hover:bg-primary-light text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 active:scale-95 duration-200 shadow-[0_0_35px_rgba(176,38,255,0.6)] text-base">
                Create Free Account
              </button>
            </ScrollReveal>
          </div>
        </section>

      </main>
    </div>
  );
}
