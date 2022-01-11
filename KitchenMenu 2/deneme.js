const menu = [
    {
      id: 1,
      title: "Raspberry White Chocolate Cheesecake Bars",
      category: "dessert",
      price: 10.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2021/11/raspberry-white-chocolate-cheesecake-bars-fork-knife-swoon-01-380x380.jpg",
      desc: `Creamy raspberry white chocolate cheesecake bars with a sweet and salty, classic graham cracker crust, a rich white chocolate and vanilla cream cheese filling, and pretty swirls of raspberry jam on top. `,
    },
    {
      id: 2,
      title: "Wild Rice and Sausage Stuffed Peppers with Pesto",
      category: "food",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wild-rice-sausage-stuffed-peppers/",
      desc: `Easy wild rice and sausage stuffed peppers, with basil pesto and parmesan, are healthy, full of flavor, and make a wonderful weeknight dinner. `,
    },
    {
      id: 3,
      title: "Pumpkin Pie",
      category: "dessert",
      price: 8.99,
      img:
        "https://www.forkknifeswoon.com/perfect-pumpkin-pie-with-roasted-sugar-and-chai-spices/",
      desc: `Smooth and creamy, perfect pumpkin pie.`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "drink",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "drink",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Tomato, Bacon and Blue Cheese Skillet Pizza",
      category: "food",
      price: 9.99,
      img:
        "https://www.forkknifeswoon.com/tomato-bacon-blue-cheese-skillet-pizza/",
      desc: `It definitely produces a crispier crust than can often be achieved in a home oven, even with a pizza stone.`,
    },
    {
      id: 7,
      title: "One Bowl Spiced Gingerbread Muffins",
      category: "dessert",
      price: 15.99,
      img:
        "https://www.forkknifeswoon.com/one-bowl-spiced-gingerbread-muffins/",
      desc: `A simple, one bowl recipe for gingerbread muffins full of brown sugar, molasses, warming spices, and a hint of citrus. `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "drink",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Slow Cooker Turkey Chili",
      category: "food",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `This is flavorful chili a perfect cold-weather antidote.`,
    },
  ];


let icon = document.querySelector(".icon-container");
let menuSection = document.querySelector(".menu-section");


//buton tanımlandı
function createIconButton(buttonIconName) {
// let span = document.createElement("span") //span tag oluşturduk
// span.innerText = `<i class="fas fa-birthday-cake"></i>` ;
// icon.appendChild("span"); // span'ı icon-container div'ine child atadık
let btn = `<span> ${buttonIconName} </span>`
return btn;
}

//buton oluşturuldu
function addButton() {
icon.innerHTML = createIconButton(`<i class="fas fa-cookie-bite"></i>`) + " " 
+ createIconButton(`<i class="fas fa-coffee"></i>`) + " "
+ createIconButton(`<i class="fas fa-utensils"></i>`)+ " "
+ createIconButton(`<i class="fas fa-wine-glass-alt"></i>`);

document.querySelector(".fas fa-cookie-bite").addEventListener("click" , addDessertMenu);
document.querySelector(".fas fa-coffee").addEventListener("click" , addDrinkMenu);
document.querySelector(".fas fa-utensils").addEventListener("click" , addfoodMenu);
}
addButton();


//
function foodCreator(data) {
let item = `<div class="card mb-3" style="max-width: 540px;">
<div class="row g-0">
  <div class="col-md-4">
    <img src="${data.img}" class="img-fluid rounded-start" alt="${data.title}">
  </div>
  <div class="col-md-8">
    <div class="card-body">
      <h5 class="card-title">${data.title}</h5>
      <p class="card-text">${data.desc}</p>
      <p class="card-text"><small class="text-muted">${data.price}</small></p>
    </div>
  </div>
</div>
</div>
`
return item;
}

//yemek menu ekleme
function addfoodMenu() {
    menuSection.innerHTML = "";
    const foodMenu = menu.filter(x => x.category === "food")
    foodMenu.forEach(x => {
        menuSection.innerHTML += (" " + foodCreator(x))
    });

}

//tatlı menu ekleme
function addDessertMenu() {
    menuSection.innerHTML = "";
    const dessertMenu = menu.filter(x => x.category === "dessert")
    dessertMenu.forEach(x =>  {
        menuSection.innerHTML += (" " + foodCreator(x))
    });
}

// icecek menu ekleme
function addDrinkMenu() {
    menuSection.innerHTML = "";
     const drinkMenu = menu.filter(x => x.category === "drink")
     drinkMenu.forEach(x => {
        menuSection.innerHTML += (" " + foodCreator(x))
     });
}

