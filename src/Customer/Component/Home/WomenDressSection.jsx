import React from 'react'
import  { useState } from "react";


const Dresses = [
  {
    name: "Notify",
    caption: "The most decent and trending frock",
    img: "https://i5.walmartimages.com/seo/IDALL-Summer-Dresses-Maxi-Dresses-Fashion-Casual-Women-V-Neck-Short-Sleeve-Long-Floral-Print-Slim-A-Line-Dress-Long-Dresses-Hawaiian-Dresses-Modest-D_9601cc93-d0ef-45a3-adbb-2cebf09181ea.a10704fc8dd5c356ab89926d0c31a725.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF",
  },
  {
    name: "Nike",
    caption: "The most decent and trending frock",
    img: "https://pk.sapphireonline.pk/dw/image/v2/BKSB_PRD/on/demandware.static/-/Sites-sapphire-master-catalog/default/dwe1ce6a36/images/23Oct2025/WEST/WTOP25V80005_999_2.JPG?sw=1000&sh=1200",
  },
  {
    name: "Gul Ahmed",
    caption: "The most decent and trending dress",
    img: "https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_SScQt69fgXuoB9PYUDMXrT2xC3a9fedXmZnKBwML.jpg",
  },
  {
    name: "gucci",
    caption: "The most decent and trending dress",
    img: "https://ellena.pk/cdn/shop/files/4G1-80-319WHe.webp?v=1736332256&width=750",
  },
  {
    name: "cargor",
    caption: "The most decent and trending dress",
    img: "https://thehouseofrare.com/cdn/shop/files/NUMANMULTI_1_HM_grande.webp?v=1761827526",
  },
  {
    name: "potention",
    caption: "The most decent and trending dress",
    img: "https://img.sosimply.com/cdn-cgi/image/w=2724,q=90,f=auto/original/32978.jpg",
  },
];

function  WomenDressSection() {
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
          <h1 className='font-extrabold text-3xl'>Women's Brand</h1>

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



export default  WomenDressSection
