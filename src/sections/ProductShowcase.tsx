"use client";

import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image";
import {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";

export const ProductShowcase = () => {

    const sectionRef = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target: sectionRef,
            offset: ['start end', 'end start'],
        }
    );
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

    return (
        <section className="bg-gradient-to-b from-[#FFFFFF] py-24 to-[#D2DCFF] overflow-x-clip">
            <div className="container">
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag">Boost your productivity</div>
                    </div>
                    <h2 className="heading mt-5">A
                        more effective way to track progress</h2>
                    <p className="description mt-5">Effortlessly
                        turn your idea into a fully functional, responsive, SaaS website in just minutes with
                        this template.</p>
                </div>
                <div className="relative">
                    <Image src={productImage} alt="Product Image" className="mt-10"/>
                    <motion.img src={pyramidImage.src} alt="Pyramid Image" width={262} height={262}
                                className="hidden md:block absolute transition -right-36 -top-32"
                                style={{translateY}}/>
                    <motion.img src={tubeImage.src} alt="Tube Image" height={248} width={248}
                                className="hidden md:block absolute transition bottom-24 -left-36"
                                style={{translateY}}/>
                </div>
            </div>
        </section>
    );
};
