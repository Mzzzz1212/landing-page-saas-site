"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png"
import springImage from "@/assets/spring.png"
import Image from "next/image";
import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

export const CallToAction = () => {

    const sectionRef = useRef(null)
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    })
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])

    return (
        <section className="py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip">
            <div className="container">
                <div className="section-heading relative">
                    <h2 className="heading mt-5">Sign up for free today</h2>
                    <p className="description mt-5">Celebrate the joy of accomplishment today with an app designed to
                        track
                        your progress and
                        motivate your efforts.</p>
                    <motion.img src={starImage.src} alt="Star Image" width={360}
                                className="absolute -left-[350px] -top-[137px] transition" style={{translateY}}/>
                    <motion.img src={springImage.src} alt="Spring Image" width={360}
                                className="absolute -right-[331px] -top-[19px] transition" style={{translateY}}/>
                    <div className="flex justify-center gap-2 mt-10">
                        <button className="btn btn-primary">Get for free</button>
                        <button className="btn btn-text gap-1 group transition-all duration-300 ease-in-out">
                            <span>Learn more</span>
                            <ArrowIcon
                                className="h-5 w-5 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
