import React from "react";
import MySpline from "./RoboSpline"; // ✅ Import your new Spline component
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
            {/* ✅ Background video */}
            <video
                autoPlay
                muted
                loop
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
            >
                <source src="galaxy.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* ✅ Blackhole video overlay */}
            <video
                autoPlay
                muted
                loop
                style={{
                    position: "absolute",
                    top: -390,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: 0.4,
                    zIndex: 1,
                }}
            >
                <source src="blackhole.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="spline-container">
                <MySpline />
            </div>


            {/* ✅ Text on left side */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 3,
                }}
            >
                <h2 style={{fontSize: "4.5rem",margin: 0,}}
                className="text-secondary text-[17px]  tracking-wider"
                >
                    Hi,<br />My Name is Rushikesh
                </h2>
                <h6
                    style={{
                        marginTop: "20px",
                        fontSize: "1.5rem",
                        letterSpacing: "2px",
                        fontWeight: 400,
                    }}
                    className="fade-slide-up-delay"
                >
                    Front-end Developer | UI/UX Designer
                </h6>
            </div>


            {/* ✅ Animated scroll-down indicator */}
            <div
                style={{
                    position: "absolute",
                    bottom: 22,
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 4,
                }}
            >
                <a href="#about">
                    <div
                        style={{
                            width: "45px",
                            height: "70px",
                            borderRadius: "24px",
                            border: "4px solid white",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "start",
                            padding: "8px",
                        }}
                    >
                        <motion.div
                            animate={{ y: [1, 30, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                            style={{
                                width: "10px",
                                height: "10px",
                                borderRadius: "50%",
                                backgroundColor: "white",
                                marginBottom: "10px",
                            }}
                        />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Hero;
