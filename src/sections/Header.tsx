import ArrowIcon from "@/assets/arrow-right.svg"
import LogoIcon from "@/assets/logosaas.png"
import MenuIcon from "@/assets/menu.svg"
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="sticky top-0 backdrop-blur-sm z-20">
            <div className="bg-black flex justify-center items-center gap-3 text-sm text-white py-3 ">
                <p className="text-white/60 hidden md:block">Streamline your workflow and boost your productivity</p>
                <div className="inline-flex gap-1 items-center">
                    <p>Get started for free</p>
                    <ArrowIcon className="w-4 h-4 inline-flex justify-center items-center"/>
                </div>
            </div>
            <div className="py-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <Image src={LogoIcon} alt="Logo" width={40} height={40}/>
                        <MenuIcon className="h-5 w-5 md:hidden"/>
                        <nav className="hidden md:flex items-center gap-6 text-black/60">
                            <Link href="/">About</Link>
                            <Link href="/">Features</Link>
                            <Link href="/">Customer</Link>
                            <Link href="/">Update</Link>
                            <Link href="/">Help</Link>
                            <button className="btn btn-primary">Get for free</button>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
