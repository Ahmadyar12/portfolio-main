import { type } from "@testing-library/user-event/dist/type"
import { animate, easeOut } from "framer-motion"

const variants = {
    lefttoright: {
        hidden: { x: -10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1, ease: "easeOut"
            },
        },
    },
    Righttoleft: {
        hidden: { x: 10, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1, ease: "easeOut"
            },
        },
    },
    insideAnimation: {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1, ease: "easeOut"
            },
        }
    },
    bottonAnimation: {
        hidden: { y: 10, opacity: 0 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1, ease: "easeOut"
            }
        }
    }
}

export default variants