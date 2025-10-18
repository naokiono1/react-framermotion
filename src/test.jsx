import { motion } from "motion/react"

const Test = () => {
    return (
        <div className="course">
            <motion.div
                style={box}
                initial={{ scale: 0.5, opacity: 0.5 }}
                transition={{ duration: 0.5 }}
                whileTap={{ opacity: 1, scale: 2 }}
                drag
            />
        </div >
    )
}

const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}

export default Test

