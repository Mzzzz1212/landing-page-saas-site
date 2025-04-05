import type {Metadata} from "next";
import {DM_Sans} from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";
import React from "react";

const dmSans = DM_Sans({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Saas Landing Page",
    description: "Built by Mz",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="relative scroll-smooth">
        <body className={twMerge(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        </body>
        </html>
    );
}
