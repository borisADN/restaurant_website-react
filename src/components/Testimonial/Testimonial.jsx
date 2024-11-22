import React from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";


const Testimonial = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.p
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="text-xl font-serif relative z-10"
            >
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              numquam enim perferendis magnam impedit consequatur sapiente
              labore necessitatibus quod aut temporibus laborum rem, dolore
              ipsam minus neque. Accusamus, ad repudiandae vero incidunt
              asperiores sapiente dignissimos ducimus sed facere delectus itaque
              inventore magnam commodi quas amet, architecto doloribus!
              Delectus, placeat quidem."
            </motion.p>
            <div className="flex items-center gap-3 ">
              <motion.img
                variants={SlideUp(0.8)}
                initial="hidden"
                whileInView="show"
                src= "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                className="w-14 h-14 rounded-full object-cover"
                alt=""
              />
            </div>
            <motion.div
              variants={SlideUp(1.2)}
              initial="hidden"
              whileInView="show"
            >
              <h2 className="text-2xl font-bold">Jemma Simmons</h2>
              <p className="text-sm">Serveuse</p>
            </motion.div>
            {/* <motion.h1
              variants={SlideUp(0.5)}
              initial="hidden"
              whileInView="show"
              className="text-6xl uppercase font-semibold font-league"
            >
              Le Meilleur restaurant de Lome
            </motion.h1>
            <motion.p
              variants={SlideUp(1.3)}
              initial="hidden"
              whileInView="show"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
              ratione velit sequi aliquam.
            </motion.p>
            <motion.button
              variants={SlideUp(1.6)}
              initial="hidden"
              whileInView="show"
              className="btn-primary"
            >
              Order Now
            </motion.button> */}
          </div>
          {/* image section */}
          <div className="relative">
            <motion.img
              initial={{
                opacity: 0,
                x: -100,
                y: 100
              }}
              whileHover={{
                scale: 1.1,
                rotate: 15,
                x: 50,
                y: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: { duration: 0.5 }
              }}
              src={BannerPng}
              alt=""
              className="relative z-10 w-full lg:max-w-[280px] img-shadow"
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[50%] right-[50%] transform translate-x-[50%] translate-y-[-50%] h-[320px] w-[320px]  bg-lightYellow rounded-full"
            />
          </div>
          {/* text section */}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
