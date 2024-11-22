import React from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const footer = () => {
  return (
    <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1}}
    className="bg-lightYellow rounded-t-3xl"
    >
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-3 lg:max-w-[300px]">
            <img src={Logo} className="w-24" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <a href="#" className="inline-block mt-6 text-sm">
              Contact@Food.com
            </a>
          </div>
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">
                  <a href="#">Home</a>
                </li>
                <li className="footer-link">
                  <a href="#">About</a>
                </li>
                <li className="footer-link">
                  <a href="#">Pages</a>
                </li>
                <li className="footer-link">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">
                  <a href="#">Home</a>
                </li>
                <li className="footer-link">
                  <a href="#">About</a>
                </li>
                <li className="footer-link">
                  <a href="#">Pages</a>
                </li>
                <li className="footer-link">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Quick Links</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">
                  <a href="#">Home</a>
                </li>
                <li className="footer-link">
                  <a href="#">About</a>
                </li>
                <li className="footer-link">
                  <a href="#">Pages</a>
                </li>
                <li className="footer-link">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default footer;
