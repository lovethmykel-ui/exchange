"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { 
  ArrowUpDown, RefreshCw, Zap, ShieldCheck, 
  Sparkles, Lock 
} from "lucide-react";

export function CinematicSwapScene() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [payAmount, setPayAmount] = useState("2.5");
  const [timer, setTimer] = useState(5);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  // Smooth spring physics for fluid tilt
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), { stiffness: 220, damping: 22 });
  const scale = useSpring(1, { stiffness: 300, damping: 25 });

  // Handle Mouse Move over card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized [-0.5, 0.5]
    const currentX = (e.clientX - rect.left) / width - 0.5;
    const currentY = (e.clientY - rect.top) / height - 0.5;
    
    mouseX.set(currentX);
    mouseY.set(currentY);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => {
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    scale.set(1);
  };

  // Exchange Rate: 1 ETH = 0.0348 BTC (or inverse)
  const ethToBtcRate = 0.03482;
  const btcToEthRate = 28.719;

  const rate = isFlipped ? btcToEthRate : ethToBtcRate;
  const paySymbol = isFlipped ? "BTC" : "ETH";
  const getSymbol = isFlipped ? "ETH" : "BTC";
  const payName = isFlipped ? "Bitcoin" : "Ethereum";
  const getName = isFlipped ? "Ethereum" : "Bitcoin";
  const payIcon = isFlipped ? "/coins/btc.svg" : "/coins/eth.svg";
  const getIcon = isFlipped ? "/coins/eth.svg" : "/coins/btc.svg";

  const numPay = parseFloat(payAmount) || 0;
  const getAmount = (numPay * rate).toFixed(isFlipped ? 3 : 5);
  const payUsd = (numPay * (isFlipped ? 77160 : 2685)).toLocaleString(undefined, { maximumFractionDigits: 2 });
  const getUsd = (parseFloat(getAmount) * (isFlipped ? 2685 : 77160)).toLocaleString(undefined, { maximumFractionDigits: 2 });

  // Countdown timer for live rate refresh
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          setIsRefreshing(true);
          setTimeout(() => setIsRefreshing(false), 600);
          return 5;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSwapDirection = () => {
    setIsFlipped(!isFlipped);
    if (isFlipped) {
      setPayAmount("2.5");
    } else {
      setPayAmount("0.087");
    }
  };

  return (
    <div className="relative w-full max-w-[540px] mx-auto min-h-[640px] flex flex-col items-center justify-center p-4 perspective-[1600px]">
      
      {/* === BACKGROUND CYBERNETIC VORTEX & GLOWS === */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[450px] h-[450px] bg-primary/25 rounded-full blur-[130px] mix-blend-screen animate-pulse" />
        <div className="w-[320px] h-[320px] bg-secondary/15 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      {/* === ROTATING HOLOGRAPHIC RINGS (Top & Bottom Pedestals) === */}
      <div className="absolute top-2 w-[85%] h-[70px] rounded-[100%] border border-primary/20 bg-primary/5 transform rotate-x-[75deg] pointer-events-none -z-10" />
      <div className="absolute bottom-2 w-[95%] h-[110px] rounded-[100%] border-[2px] border-primary/40 bg-gradient-to-b from-primary/10 to-transparent shadow-[0_0_60px_rgba(176,38,255,0.4)] transform rotate-x-[75deg] pointer-events-none -z-10 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }} 
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="w-[90%] h-[90%] rounded-[100%] border border-primary/40 border-dashed"
        />
      </div>

      {/* === 3D TILT WRAPPER WITH GROWING ANIMATED BORDER === */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d"
        }}
        className="relative w-full rounded-[2.6rem] p-[2.5px] transition-shadow duration-500 cursor-pointer group"
      >
        {/* === GROWING / ROTATING NEON CONIC BORDER === */}
        <div className="absolute -inset-[3px] rounded-[2.7rem] bg-gradient-to-r from-primary via-purple-500 to-primary-light opacity-60 group-hover:opacity-100 blur-[6px] group-hover:blur-[14px] transition-all duration-500 -z-10 animate-pulse" />
        
        {/* Animated Rotating Conic Light Beam for Growing Border */}
        <div className="absolute -inset-[2px] rounded-[2.65rem] overflow-hidden pointer-events-none -z-10">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_280deg,#B026FF_320deg,#FFFFFF_360deg)] opacity-80 group-hover:opacity-100"
          />
        </div>

        {/* === MAIN 3D HOLOGRAPHIC GLASS CARD BODY === */}
        <div className="relative w-full rounded-[2.5rem] bg-[#07070B]/95 border border-white/15 p-6 md:p-8 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,0.9),0_0_50px_rgba(176,38,255,0.25)] flex flex-col gap-4 overflow-hidden">
          
          {/* Mouse Spotlight Follow Effect */}
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"
            style={{
              background: useTransform(
                [spotlightX, spotlightY],
                ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(176, 38, 255, 0.22), transparent 70%)`
              )
            }}
          />

          {/* Top Header Controls & Rate Lock Bar */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#10B981] animate-ping" />
              <span className="text-xs font-mono font-bold text-white/90 tracking-wider">LIVE RATE ENGINE</span>
            </div>

            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-mono text-white/70 shadow-inner">
              <RefreshCw className={`w-3.5 h-3.5 text-primary ${isRefreshing ? "animate-spin text-primary-light" : ""}`} />
              <span>Refreshes in <strong className="text-white">{timer}s</strong></span>
            </div>
          </div>

          {/* === CARD 1: YOU PAY === */}
          <motion.div 
            layout
            style={{ transform: "translateZ(30px)" }}
            className="relative rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 p-5 group/pay hover:border-primary/60 transition-all duration-300 shadow-md relative z-10"
          >
            <div className="flex items-center justify-between mb-3 text-xs text-white/50 font-bold uppercase tracking-wider">
              <span>You Pay</span>
              <span>Balance: <strong className="text-white/80">14.82 {paySymbol}</strong></span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <input 
                type="text"
                value={payAmount}
                onChange={(e) => setPayAmount(e.target.value)}
                className="bg-transparent text-3xl md:text-4xl font-display font-black text-white focus:outline-none w-full tabular-nums tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                placeholder="0.0"
              />

              {/* Token Selector Pill */}
              <div className="flex items-center gap-2 bg-black/70 border border-white/20 px-4 py-2.5 rounded-2xl shrink-0 shadow-[0_0_25px_rgba(0,0,0,0.6)] group-hover/pay:border-primary/40 transition-colors">
                <img src={payIcon} className="w-7 h-7 rounded-full drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" alt={paySymbol} />
                <div className="flex flex-col text-left">
                  <span className="text-white font-black text-base leading-none">{paySymbol}</span>
                  <span className="text-[10px] text-white/40 leading-none mt-1">{payName}</span>
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between text-xs text-white/40 font-mono">
              <span>≈ ${payUsd} USD</span>
              <span className="text-primary-light font-bold cursor-pointer hover:underline" onClick={() => setPayAmount("14.82")}>MAX</span>
            </div>
          </motion.div>

          {/* === CENTRAL INTERACTIVE SWAP PULSE TRIGGER === */}
          <div className="relative flex items-center justify-center my-[-12px] z-30" style={{ transform: "translateZ(50px)" }}>
            
            {/* Animated Glowing Circuit Laser Paths (SVG) */}
            <svg className="absolute w-full h-16 pointer-events-none overflow-visible -z-10">
              <defs>
                <linearGradient id="laserGradTilt" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#B026FF" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              <motion.path 
                d="M 40 30 Q 270 -5 500 30" 
                fill="none" 
                stroke="url(#laserGradTilt)" 
                strokeWidth="2.5"
                strokeDasharray="12 24"
                animate={{ strokeDashoffset: [0, -72] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
              <motion.path 
                d="M 40 30 Q 270 65 500 30" 
                fill="none" 
                stroke="url(#laserGradTilt)" 
                strokeWidth="2.5"
                strokeDasharray="12 24"
                animate={{ strokeDashoffset: [0, 72] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Interactive Trigger Button */}
            <motion.button 
              whileHover={{ scale: 1.2, rotate: 180 }}
              whileTap={{ scale: 0.85 }}
              onClick={handleSwapDirection}
              className="w-14 h-14 p-3.5 rounded-full bg-gradient-to-tr from-primary via-[#8A2BE2] to-primary-light text-white shadow-[0_0_35px_rgba(176,38,255,0.9),inset_0_0_12px_rgba(255,255,255,0.7)] border-2 border-white/50 flex items-center justify-center cursor-pointer transition-transform"
              title="Click to Switch Direction"
            >
              <ArrowUpDown className="w-5 h-5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]" />
            </motion.button>
          </div>

          {/* === CARD 2: YOU GET === */}
          <motion.div 
            layout
            style={{ transform: "translateZ(30px)" }}
            className="relative rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 p-5 group/get hover:border-primary/60 transition-all duration-300 shadow-md relative z-10"
          >
            <div className="flex items-center justify-between mb-3 text-xs text-white/50 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-primary-light font-bold">
                <Sparkles className="w-3.5 h-3.5 text-primary" /> You Get (Guaranteed)
              </span>
              <span className="text-emerald-400 text-[11px] font-bold tracking-wide">0% Slippage Locked</span>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-3xl md:text-4xl font-display font-black text-white tabular-nums tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                {getAmount}
              </div>

              {/* Token Selector Pill */}
              <div className="flex items-center gap-2 bg-black/70 border border-white/20 px-4 py-2.5 rounded-2xl shrink-0 shadow-[0_0_25px_rgba(0,0,0,0.6)] group-hover/get:border-primary/40 transition-colors">
                <img src={getIcon} className="w-7 h-7 rounded-full drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" alt={getSymbol} />
                <div className="flex flex-col text-left">
                  <span className="text-white font-black text-base leading-none">{getSymbol}</span>
                  <span className="text-[10px] text-white/40 leading-none mt-1">{getName}</span>
                </div>
              </div>
            </div>

            <div className="mt-2 flex items-center justify-between text-xs text-white/40 font-mono">
              <span>≈ ${getUsd} USD</span>
              <span className="text-emerald-400 font-bold">Best Route ⚡</span>
            </div>
          </motion.div>

          {/* === EXECUTION METRICS BREAKDOWN === */}
          <div className="bg-black/50 rounded-xl p-3.5 border border-white/5 space-y-2 text-xs text-white/60 relative z-10" style={{ transform: "translateZ(20px)" }}>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1"><Zap className="w-3.5 h-3.5 text-amber-400" /> Guaranteed Rate:</span>
              <span className="font-mono text-white font-bold">1 {paySymbol} = {rate.toFixed(5)} {getSymbol}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-primary" /> Network Fee:</span>
              <span className="font-mono text-emerald-400 font-bold">$0.00 (Zero Protocol Fee)</span>
            </div>
          </div>

          {/* === GLOWING SWAP BUTTON === */}
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{ transform: "translateZ(40px)" }}
            className="w-full bg-gradient-to-r from-primary via-[#9B30FF] to-primary hover:opacity-95 text-white font-black text-base py-4 rounded-full shadow-[0_0_35px_rgba(176,38,255,0.6),inset_0_0_15px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2 cursor-pointer transition-all uppercase tracking-wider relative z-10"
          >
            <Lock className="w-4 h-4" /> Swap {paySymbol} to {getSymbol} Instantly
          </motion.button>
        </div>
      </motion.div>

    </div>
  );
}
