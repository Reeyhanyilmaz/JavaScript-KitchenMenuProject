const menu = [
    {
      id: 1,
      title: "Raspberry White Chocolate Cheesecake Bars",
      category: "dessert",
      price: 10.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2021/11/raspberry-white-chocolate-cheesecake-bars-fork-knife-swoon-01-380x380.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
    },
    {
      id: 2,
      title: "Wild Rice and Sausage Stuffed Peppers with Pesto",
      category: "food",
      price: 17.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/09/Easy_Wild_Rice_Sausage_Stuffed_Peppers_Fork_Knife_Swoon_01.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 3,
      title: "Pumpkin Pie",
      category: "dessert",
      price: 8.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2018/11/perfect-pumpkin-pie-roasted-sugar-chai-spice-fork-knife-swoon-01-380x380.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 4,
      title: "Blackberry, Farro and Arugula Salad",
      category: "salad",
      price: 12.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2013/07/20130714-BlackberryFarroSalad2-ThumbWEB-330x330.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 5,
      title: "Berry Watermelon Fruit Salad",
      category: "salad",
      price: 11.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2015/10/DSC9388_Berry_Watermelon_Fruit_Salad-380x380.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 6,
      title: "Tomato, Bacon and Blue Cheese Skillet Pizza",
      category: "food",
      price: 18.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/09/20140917-Fork_Knife_Swoon_Tomato_Bacon_Blue_Cheese_Skillet_Pizza_WEB_01-605x806.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 7,
      title: "One Bowl Spiced Gingerbread Muffins",
      category: "dessert",
      price: 15.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2016/11/One_Bowl_Pumpkin_Gingerbread_Muffins_Fork_Knife_Swoon_03-380x380.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 8,
      title: "A Healthier Broccoli Salad",
      category: "salad",
      price: 12.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2016/03/DSC6714-Fork_Knife_Swoon_Quick_Healthy_Broccoli_Salad_with_Almonds_Raisins_Sesame_Lemon_Tahini_Dressing_Thumb-300x300.jpg",
      desc: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
      id: 9,
      title: "Slow Cooker Turkey Chili",
      category: "chicken",
      price: 23.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2013/02/TurkeyChili-TextWEB.jpg",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    },
    {
        id: 10,
        title: "Whole Roasted Chicken with Lemons and Thyme",
        category: "chicken",
        price: 20.99,
        img:
          "https://www.forkknifeswoon.com/wp-content/uploads/2012/10/WholeRoastChicken-ThumbWEB1-330x330.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        id: 11,
        title: "Thai-Spiced Chicken Meatballs with Red Pepper Curry Sauce",
        category: "chicken",
        price: 21.99,
        img:
          "https://www.forkknifeswoon.com/wp-content/uploads/2013/06/ThaiSpicedChickenMeatballs-ThumbWEB6-330x330.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        id: 12,
        title: "Spicy Baked Korean Teriyaki Chicken Wings",
        category: "chicken",
        price: 18.99,
        img:
          "https://www.forkknifeswoon.com/wp-content/uploads/2016/10/Fork_Knife_Swoon_Spicy_Baked_Korean_Teriyaki_Chicken_Wings_01-300x300.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      },
      {
        id: 13,
        title: "Sage & Brown Butter Pasta with Hazelnuts",
        category: "food",
        price: 16.99,
        img:
          "https://www.forkknifeswoon.com/wp-content/uploads/2015/11/DSC3679-Fork_Knife_Swoon_Sage_Brown_Butter_Pasta_Hazelnuts_Thumb-380x380.jpg",
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
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
icon.innerHTML = createIconButton(`<i class="fas fa-carrot salata"></i>`) + " "
+ createIconButton(`<i class="fas fa-utensils yemek"></i>`)+ " "
+ createIconButton(`<i class="fas fa-drumstick-bite tavuk"></i>`)+ " "
+ createIconButton(`<i class="fas fa-cookie-bite tatlı"></i>`);


document.querySelector(".salata").addEventListener("click" , addSaladMenu);
document.querySelector(".yemek").addEventListener("click" , addfoodMenu);
document.querySelector(".tavuk").addEventListener("click" , addChickenMenu);
document.querySelector(".tatlı").addEventListener("click" , addDessertMenu);
}
addButton();


//
function foodCreator(data) {
let item = `<div class="card mb-3 col-lg-6 col-sm-12" style="max-width: 540px;">
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

// salata menu ekleme
function addSaladMenu() {
    menuSection.innerHTML = "";
     const drinkMenu = menu.filter(x => x.category === "salad")
     drinkMenu.forEach(x => {
        menuSection.innerHTML += (" " + foodCreator(x))
     });
}

//yemek menu ekleme
function addfoodMenu() {
    menuSection.innerHTML = "";
    const foodMenu = menu.filter(x => x.category === "food")
    foodMenu.forEach(x => {
        menuSection.innerHTML += (" " + foodCreator(x))
    });
}    

//tavuk menu ekleme
function addChickenMenu () {
    menuSection.innerHTML = "";
    const dessertMenu = menu.filter(x => x.category === "chicken")
    dessertMenu.forEach(x =>  {
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


function loadedPage() {
  menuSection.innerHTML = `<h2> About </h2>
  <p class="about1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
  <p class="about" > <u>Phone:</u> 0000 111 22 </p>
  <p class="about"> <u>Adress:</u> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
  <div class"about-pictures-div">
  <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXdpwmfnY4BP35wgYRqokdUmnVogsiEi1Dg&usqp=CAU" alt="#">
  </div>`;
}
window.addEventListener('load',loadedPage) // sayfa yüklendiğinde hangi sayfanın acılmasını istedigimiz