//تعداد محصولات قابل نمایش در هر صفحه
let listOfLaptop = 8;



//سازنده آبجکت هر محصول
function Product(img, brand, name, ram) {
  this.proImage = img;
  this.proBrand = brand;
  this.proName = name;
  this.proRam = ram;
}

//تابع ساخت المان در html
function addElement(brand, divClass) {

//brand:متغیر برند محصول مورد استفاده در فیلترینگ
//divClass: متغیر متناظر با storeText 

//ساخت المان تصویر
  let immage = document.createElement("img");

  //اعمل اتریبیوت به تصویر
  immage.setAttribute("src", brand.proImage);
  immage.setAttribute("style", "width:80%;height:100px");

  //انتصاب تصویر به دیو متناظر با آن
  divClass.appendChild(immage);

  let nameProduct = document.createElement("p");
  nameProduct.style.fontWeight = "bold";
  let textName = document.createTextNode(brand.proName);
  nameProduct.appendChild(textName);
  divClass.appendChild(nameProduct);

  let brandProduct = document.createElement("p");
  let textbrand = document.createTextNode(brand.proBrand);
  brandProduct.appendChild(textbrand);
  divClass.appendChild(brandProduct);

  let ramProduct = document.createElement("p");
  let textRam = document.createTextNode(brand.proRam);
  ramProduct.appendChild(textRam);
  divClass.appendChild(ramProduct);
}

//ساخت آرایه متشکل از اطلاعات محصولات
var myBrandList = [];
myBrandList.push(new Product("../images/lenovo1.jpg","Lenovo","AX150","Ram: 16Gb"));
myBrandList.push(new Product("../images/acer2.jpg", "Acer", "Az180", "Ram: 12Gb"));
myBrandList.push(new Product("../images/lenovo3.jpg","Lenovo","ABook80","Ram: 8Gb"));
myBrandList.push(new Product("../images/apple1.jpg","Apple","MacBook-2017","Ram: 8Gb"));
myBrandList.push(new Product("../images/acer1.jpg","Acer","Patriot120","Ram: 12Gb"));
myBrandList.push(new Product("../images/apple3.jpg","Apple","MacBook-2021","Ram: 12Gb"));
myBrandList.push(new Product("../images/asus1.jpg", "ASUS", "G-Book", "Ram: 16Gb"));
myBrandList.push(new Product("../images/apple2.jpg","Apple","MacBook-2020","Ram: 16Gb"));
myBrandList.push(new Product("../images/asus2.jpg", "ASUS", "ZenBook", "Ram: 4Gb"));
myBrandList.push(new Product("../images/asus3.jpg", "ASUS", "N-Series", "Ram: 12Gb"));
myBrandList.push(new Product("../images/lenovo2.jpg","Lenovo","GBook120","Ram: 12Gb"));
myBrandList.push(new Product("../images/acer4.jpg","Acer","Panter500","Ram: 12Gb"));
myBrandList.push(new Product("../images/asus4.jpg", "ASUS", "P-series", "Ram: 4Gb"));
myBrandList.push(new Product("../images/lenovo4.jpg","Lenovo","GB120","Ram: 12Gb"));
myBrandList.push(new Product("../images/asus5.jpg", "ASUS", "K-Book", "Ram: 6Gb"));
myBrandList.push(new Product("../images/acer5.jpg","Acer","Panter700","Ram: 12Gb"));


//تابع فیلترینگ
function filterBrand(brand){

  //brand: ورودی متناظر با برند محصول

  //ذخیره سازی برند جهت فیلترینگ برای انتقال به صفحه مربوطه 
  localStorage.setItem("brand",brand);

  //باز کردن صفحه فیلترینگ
  window.open("filter.html", "_self");
}

//ذخیره سازی لیست محصولات
localStorage.setItem("myListOfBrand",JSON.stringify(myBrandList));

//ذخیره سازی تعداد محصولات هر صفحه
localStorage.setItem("listOfLaptop",listOfLaptop);

//تعیین حداکثر تعداد عکس های موجود در صفحه به جهت نمایش
let minOfRange = Math.min(listOfLaptop,myBrandList.length);


//   آرایه متشکل از  دیوها متناظر با محصولات هر صفحه
var storeText =[];
for (let index = 0; index < minOfRange; index++) {

    //انتقال دیوها به آرایه
    storeText.push(document.getElementsByClassName("storeText")[index]);
    addElement(myBrandList[index],storeText[index]);
}

let btn = document.createElement('button');
let btnText = btn.createTextNode('1');

let btnNum = Math.floor((myBrandList.length-1)/listOfLaptop)+1;
console.log(btnNum);

function nextPage(numOfPage) {
  localStorage.setItem("numOfPage",numOfPage);
  window.open("page2.html", "_self");
}