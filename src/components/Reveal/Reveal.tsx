import React, {useRef, useEffect, useState} from "react"
import {motion, useInView, useAnimation} from "framer-motion"
import s from './Reveal.module.css'

interface Props {
    children: JSX.Element;
    width?: "fit-content" | "100%";
    delay?: number;
}

const Reveal = ({children, width = "fit-content", delay = 0.25}: Props) => {

    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const [style, setStyle] = useState(`${s.reveal_relative} ${s.reveal_hidden}`)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.set("hidden")
            mainControls.start("visible")
            setTimeout(() => {
                setStyle(`${s.reveal_relative}`)
            }, 750)
        }
    }, [isInView])

    return (
        <div ref={ref} style={{width}} className={style}>
        <motion.div
        variants={{
            hidden: {opacity: 0, y: "20%"},
            visible: {opacity: 1, y: 0},
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
        >{children}</motion.div>
        </div>
    )
};

export default Reveal;
