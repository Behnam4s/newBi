let numOfPage =parseInt(localStorage.getItem("numOfPage"));
console.log(numOfPage);
var listOfLaptop = localStorage.getItem("listOfLaptop");
var myBrandList = JSON.parse(localStorage.getItem("myListOfBrand"));
var storeText =[];

// var myBrandList = [];
// myBrandList.push(new Product("../images/asus2.jpg", "ASUS", "ZenBook", "Ram: 4Gb"));
// myBrandList.push(new Product("../images/asus3.jpg", "ASUS", "N-series", "Ram: 12Gb"));
// myBrandList.push(new Product("../images/lenovo2.jpg","Lenovo","GBook120","Ram: 12Gb"));
// myBrandList.push(new Product("../images/acer4.jpg","Acer","Panter500","Ram: 12Gb"));
// myBrandList.push(new Product("../images/asus4.jpg", "ASUS", "P-series", "Ram: 4Gb"));
// myBrandList.push(new Product("../images/lenovo4.jpg","Lenovo","GB120","Ram: 12Gb"));
// myBrandList.push(new Product("../images/asus5.jpg", "ASUS", "K-Book", "Ram: 6Gb"));
// myBrandList.push(new Product("../images/acer5.jpg","Acer","Panter700","Ram: 12Gb"));

let minOfRange = Math.min(listOfLaptop,myBrandList.length);
for (let index = 0; index < minOfRange; index++) {
    storeText.push(document.getElementsByClassName("storeText")[index]);
    addElement(myBrandList[index+(listOfLaptop*(numOfPage-1))],storeText[index]);
}

function Product(img, brand, name, ram) {
  this.proImage = img;
  this.proBrand = brand;
  this.proName = name;
  this.proRam = ram;
}

function filterBrand(brand){
  localStorage.setItem("brand",brand);
  window.open("filter.html", "_self");
}

function addElement(brand, divClass) {
  let immage = document.createElement("img");
  immage.setAttribute("src", brand.proImage);
  immage.setAttribute("style", "width:80%;height:100px");
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

localStorage.setItem("myListOfBrand",JSON.stringify(myBrandList));

function prevPage(numOfPage) {
  localStorage.setItem("numOfPage",numOfPage);
  window.open("home.html", "_self");
}