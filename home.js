


const cardContainer=document.querySelector(".cards")


const projects = [
{
id: 1,
title: "Corporate Dashboard System",
description: "Pellentesque habitant morbi tristique senectus et netus.",
category: "Web design",
isFeatured: false,
date: "2024",
tags: ["HTML", "CSS", "JavaScript"],
image: "portfolio-2.webp",

},
{
id: 2,
title: "Smart Finance Application",
description: "Maecenas tempus tellus eget condimentum rhoncus.",
category: "Mobile App",
isFeatured: true,
date: "2024",
tags: ["Flutter", "Dart", "Firebase"],
image: "portfolio-4.webp",
},
{
id: 3,
title: "Fashion Label Identity",
description: "Donec quam felis ultricies nec pellentesque pretium.",
category: "branding",
isFeatured: false,
date: "2023",
tags: ["Photoshop", "Illustrator"],
image: "portfolio-6.webp",
},
];

 projects.forEach(card => {

    cardContainer.innerHTML +=` <div class=" container bg-white w-full h-full rounded-2xl relative   ">
                <div class=" relative ">
                <img src="${card.image}" class="rounded-t-2xl  " alt="">
                <div class=" absolute inset-0 bg-black/30 rounded-t-2xl opacity-0 hover:opacity-100  transition duration-300 flex justify-center items-end gap-4 pb-6 ">
                    <button class=" w-12 h-12 rounded-full  bg-white hover:bg-blue-600    ">+</button>
                    <button class="w-12 h-12 rounded-full  bg-white hover:bg-blue-600  ">+</button>
                </div>
               <span class=" font-medium uppercase text-blue-500 absolute top-5 left-5 bg-white px-3 py-2 rounded-[20em] z-10 shadow-lg shadow-black-400">${card.category}</span>
                </div>
                <div class="p-5">
                    <h3 class="font-bold text-lg pb-2">${card.title}</h3>
                    <p class=" text-gray-500   ">${card.description}</p>
                    <p class="after:content-[''] after:block after:w-full after:h-0.5 after:bg-gray-100 after:mt-2 pt-3"></p>
                </div>

                <div class="px-5 pb-4 flex justify-between ">
                <div class=" pb-4 flex gap-1">
                    <span class="text-blue-600 bg-blue-100 rounded-[20em] py-1 px-3 text-[12px]">${card.isFeatured ? "Featured" : ""}</span>
                </div> 
                <p class="text-gray-400 font-bold">2024</p>
                </div>
               <div class="flex gap-3 p-3">
              ${card.tags.map(tag => ` 
    <span class="text-blue-600 bg-blue-100 rounded-full py-1 px-3 text-xs ">
        ${tag}
    </span>
    
    
  `  ).join("")}</div>




</div>`
 })


 






