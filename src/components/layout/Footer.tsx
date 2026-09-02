import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-12 relative overflow-hidden text-white/70">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-primary-light p-[1px] shadow-[0_0_15px_rgba(176,38,255,0.4)]">
                <div className="w-full h-full bg-[#050505] rounded-[11px] flex items-center justify-center font-display font-black text-lg text-primary">
                  OK
                </div>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                OK<span className="text-primary">NEXUS</span>
              </span>
            </Link>
            <p className="text-sm text-white/50 max-w-sm leading-relaxed">
              The next-generation digital asset exchange platform. Trade crypto, instant swap assets, and deploy intelligent prediction market AI agents.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-white/60 font-mono">Systems Operational // 99.99% Uptime</span>
            </div>
          </div>

          {/* Column 1: Products */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Products</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link href="#swap" className="hover:text-primary transition-colors">Instant Swap</Link></li>
              <li><Link href="#trading" className="hover:text-primary transition-colors">Spot Trading</Link></li>
              <li><Link href="#escrow" className="hover:text-primary transition-colors">P2P Escrow</Link></li>
              <li><Link href="#polymarket" className="hover:text-primary transition-colors">AI Prediction Agent</Link></li>
              <li><span className="text-white/30">Crypto Cards (Soon)</span></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Resources</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><Link href="#faq" className="hover:text-primary transition-colors">Help Center & FAQ</Link></li>
              <li><Link href="#security" className="hover:text-primary transition-colors">Security Architecture</Link></li>
              <li><a href="https://lordicon.com" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Animated Icons</a></li>
              <li><span className="text-white/30">API Documentation</span></li>
              <li><span className="text-white/30">Proof of Reserves</span></li>
            </ul>
          </div>

          {/* Column 3: Legal & Community */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Compliance</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li><span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">AML & KYC Policy</span></li>
              <li><span className="hover:text-primary transition-colors cursor-pointer">Risk Disclosure</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© 2026 OKNexus Exchange Ltd. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <span>ISO/IEC 27001 Certified</span>
            <span>SOC 2 Type II Audited</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
