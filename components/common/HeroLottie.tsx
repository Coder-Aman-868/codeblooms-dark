"use client"

import React, { useEffect, useRef } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import starsRain from "./../../public/assets/lotties/starsRain.json"

const HeroLottie = () => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        lottieRef.current?.setSpeed(0.5);
    }, []);

    return (
        <Lottie
            lottieRef={lottieRef}
            animationData={starsRain}
            loop
            autoplay
            className="min-w-300 w-full h-full object-cover"
        />
    )
}

export default HeroLottie
