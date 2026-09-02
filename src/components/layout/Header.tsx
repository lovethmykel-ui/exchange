"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X, ChevronDown, Shield, RefreshCw, BarChart2, Users, Bot } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-primary-light p-[1px] shadow-[0_0_20px_rgba(176,38,255,0.4)]">
            <div className="w-full h-full bg-[#050505] rounded-[11px] flex items-center justify-center font-display font-black text-xl text-primary group-hover:scale-105 transition-transform">
              OK
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            OK<span className="text-primary">NEXUS</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#swap" className="text-sm text-white/70 hover:text-white transition-colors font-medium">Instant Swap</Link>
          <Link href="#trading" className="text-sm text-white/70 hover:text-white transition-colors font-medium">Trading Platform</Link>
          <Link href="#escrow" className="text-sm text-white/70 hover:text-white transition-colors font-medium">P2P Escrow</Link>
          <Link href="#polymarket" className="text-sm text-white/70 hover:text-white transition-colors font-medium flex items-center gap-1.5">
            AI Prediction <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full border border-primary/40">NEW</span>
          </Link>
          <Link href="#security" className="text-sm text-white/70 hover:text-white transition-colors font-medium">Security</Link>
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm text-white/80 hover:text-white font-medium px-4 py-2">
            Log In
          </button>
          <button className="bg-primary hover:bg-primary-light text-white text-sm font-bold px-6 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(176,38,255,0.4)]">
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white/80 hover:text-white"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A0A0E] border-b border-white/10 px-6 py-6 space-y-4">
          <Link 
            href="#swap" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-white/80 hover:text-white py-2"
          >
            Instant Swap
          </Link>
          <Link 
            href="#trading" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-white/80 hover:text-white py-2"
          >
            Trading Platform
          </Link>
          <Link 
            href="#escrow" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-white/80 hover:text-white py-2"
          >
            P2P Escrow
          </Link>
          <Link 
            href="#polymarket" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-white/80 hover:text-white py-2"
          >
            Polymarket AI Agent
          </Link>
          <Link 
            href="#security" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-white/80 hover:text-white py-2"
          >
            Security & Trust
          </Link>
          <div className="pt-4 flex flex-col gap-3">
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 rounded-xl">
              Log In
            </button>
            <button className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 rounded-xl shadow-[0_0_20px_rgba(176,38,255,0.4)]">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
