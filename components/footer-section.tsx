"use client";

import { Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function FooterSection() {
  return (
    <footer className="w-full bg-[#edf2ff] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Footer Card */}
        <div className="bg-[#b1d9f7]/30 backdrop-blur-xl rounded-3xl p-10 md:p-16 shadow-lg border border-white/40">

          <div className="grid md:grid-cols-3 gap-12">
            {/* LEFT: Logo + Text + Social Icons */}
            <div className="space-y-6">
              {/* Logo + Name */}
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-black rounded-full" />
                <h2 className="text-2xl font-bold text-foreground">Dreelio</h2>
              </div>

              <p className="text-gray-700 leading-relaxed max-w-sm">
                Your favourite business management software. Built for early
                startup founders.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <button className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                  <Linkedin className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                  <Twitter className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* CENTER: Pages */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">PAGES</h3>
              <ul className="space-y-3 text-gray-700">
                <li><a href="#" className="hover:text-black">Home</a></li>
                <li><a href="#" className="hover:text-black">Features</a></li>
                <li><a href="#" className="hover:text-black">Pricing</a></li>
                <li><a href="#" className="hover:text-black">Blog</a></li>
              </ul>
            </div>

            {/* RIGHT: Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">INFORMATION</h3>
              <ul className="space-y-3 text-gray-700">
                <li><a href="#" className="hover:text-black">Contact</a></li>
                <li><a href="#" className="hover:text-black">Privacy</a></li>
                <li><a href="#" className="hover:text-black">Terms of use</a></li>
                <li><a href="#" className="hover:text-black">404</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 border-t border-gray-300"></div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-700 text-sm">
              © 2025 Dreelio. 
            </p>

          
          </div>
        </div>
      </div>
    </footer>
  );
}
