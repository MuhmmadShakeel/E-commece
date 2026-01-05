import React from "react";
import AliceCarousel from "react-alice-carousel";
import { motion } from "framer-motion";
import "react-alice-carousel/lib/alice-carousel.css";

const Dresses = [
  {
    name: "Women Frock",
    caption: "The most decent and trending frock",
    img: "https://i.pinimg.com/736x/66/c7/99/66c7995c1d0a994f3550852f4487cd09.jpg",
  },
  {
    name: "Women Frock",
    caption: "The most decent and trending frock",
    img: "https://i.pinimg.com/736x/06/cc/4d/06cc4d90b9ebfd32571558cd7cd14d02.jpg",
  },
  {
    name: "Men dress",
    caption: "The most decent and trending dress",
    img: "https://i.pinimg.com/736x/c6/aa/b3/c6aab36dd2991f36b9a7bfd9d9ac417f.jpg",
  },
];

function Header() {
  const items = Dresses.map((dress, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="px-3"
    >
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <img
          src={dress.img}
          alt={dress.name}
          className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-500"
        />

        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-gray-800">
            {dress.name}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            {dress.caption}
          </p>
        </div>
      </div>
    </motion.div>
  ));

  return (
    <div className="w-full p-12 bg-gray-100">
      <h2 className="text-3xl text-[#4F39F6] font-bold text-center mb-8">
        Trending Dresses
      </h2>

      <div className="max-w-7xl mx-auto">
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={2000}
          infinite
          disableButtonsControls={true}
          disableDotsControls={false}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
        />
      </div>
    </div>
  );
}
export default Header;
