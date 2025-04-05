"use client";

import LogoIcon from "@/assets/logosaas.png"
import InstaIcon from "@/assets/social-insta.svg"
import LinkedinIcon from "@/assets/social-linkedin.svg"
import PinIcon from "@/assets/social-pin.svg"
import XIcon from "@/assets/social-x.svg"
import YouTubeIcon from "@/assets/social-youtube.svg"
import Image from "next/image"
import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
            <div className="flex flex-col items-center justify-center">
                <div
                    className="inline-flex relative before:content-[''] before:blur before:top-2 before:bottom-0 before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
                    <Image src={LogoIcon} alt="Logo" height={40} className="relative"/>
                </div>
                <nav className="flex flex-col md:justify-center md:flex-row gap-6 mt-6">
                    <Link href="/">About</Link>
                    <Link href="/">Features</Link>
                    <Link href="/">Customers</Link>
                    <Link href="/">Pricing</Link>
                    <Link href="/">Help</Link>
                    <Link href="/">Careers</Link>
                </nav>
                <div className="flex gap-3 mt-6">
                    <XIcon className="h-6 w-7 cursor-pointer hover:text-gray-400 transition-colors"/>
                    <InstaIcon className="h-6 w-7 cursor-pointer hover:text-gray-400 transition-colors"/>
                    <LinkedinIcon className="h-6 w-7 cursor-pointer hover:text-gray-400 transition-colors"/>
                    <PinIcon className="h-6 w-7 cursor-pointer hover:text-gray-400 transition-colors"/>
                    <YouTubeIcon className="h-6 w-7 cursor-pointer hover:text-gray-400 transition-colors"/>
                </div>
                <p className="mt-6">&copy; 2024 Mz Inc. All rights reserved</p>
            </div>
        </footer>
    );
};
