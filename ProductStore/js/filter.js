var myBrandList = JSON.parse(localStorage.getItem("myListOfBrand"));
var brandName = localStorage.getItem("brand");
let filtered = myBrandList.filter(item => item.proBrand ==brandName);
console.log(filtered);

var storeText =[];
storeText.push(document.getElementsByClassName("storeText")[0]);
storeText.push(document.getElementsByClassName("storeText")[1]);
storeText.push(document.getElementsByClassName("storeText")[2]);
storeText.push(document.getElementsByClassName("storeText")[3]);
storeText.push(document.getElementsByClassName("storeText")[4]);
storeText.push(document.getElementsByClassName("storeText")[5]);
storeText.push(document.getElementsByClassName("storeText")[6]);
storeText.push(document.getElementsByClassName("storeText")[7]);

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


  for (let index = 0; index < filtered.length; index++) {
      addElement(filtered[index],storeText[index]);
  }

  function nextPage(numOfPage) {
  localStorage.setItem("numOfPage",numOfPage);
    window.open("page2.html", "_self");
  }

  function prevPage(numOfPage) {
  localStorage.setItem("numOfPage",numOfPage);
    window.open("home.html", "_self");
  }