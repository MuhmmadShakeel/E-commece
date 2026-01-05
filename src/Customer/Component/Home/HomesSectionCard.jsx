import React from 'react'
import  { useState } from "react";


const Dresses = [
  {
    name: "Notify",
    caption: "The most decent and trending frock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvHFJntpYzM4ZLOJZOvYVnFs5Ffb05OZUyQ&s",
  },
  {
    name: "Nike",
    caption: "The most decent and trending frock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRmPYgGlC6XujSjRgeB3yzYRsl5Ya4FUlig&s",
  },
  {
    name: "Gul Ahmed",
    caption: "The most decent and trending dress",
    img: "https://i.pinimg.com/736x/e1/b0/97/e1b097e11b0052d9a9abbd325f64e264.jpg",
  },
  {
    name: "gucci",
    caption: "The most decent and trending dress",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhGQ5tmyNl8NJlCtg8pp2hKBIeJ11VLIANsw&s",
  },
  {
    name: "cargor",
    caption: "The most decent and trending dress",
    img: "https://favela.gr/images/webp/detailed/131/3616535052512.webp",
  },
  {
    name: "potention",
    caption: "The most decent and trending dress",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2HWHtl25gNnCyY-5gcevCdmPqCbXI0rUPag&s",
  },
];

function HomesSectionCard() {
  const firstFour = Dresses.slice(0, 4);
  const secondFour = Dresses.slice(2, 6);

  const [showFirst, setShowFirst] = useState(true);

  return (
    <div className="max-w-6xl mx-auto p-4">

      {/* Buttons */}
      <div className="flex justify-between mb-6">
        <button
          onClick={() => setShowFirst(true)}
          className="bg-black text-white cursor-pointer px-4 py-2 rounded"
        >
          Left
        </button>
          <h1 className='font-extrabold text-3xl'>Men's Brand</h1>

        <button
          onClick={() => setShowFirst(false)}
          className="bg-black text-white cursor-pointer px-4 py-2 rounded"
        >
          Right
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(showFirst ? firstFour : secondFour).map((item, index) => (
          <div key={index} className="border rounded shadow">
            <img src={item.img} className="h-48 w-full object-cover" />
            <div className="p-3">
              <h3 className="font-bold">{item.name}</h3>
              <p className="text-sm">{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}



export default HomesSectionCard
