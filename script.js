const products = [
  {
    pName: "Addicolor 3-Stripes",
    pDes: "Women's Originals",
    pGender: 3,
    pColor: ["#23ef45", "#000000", "#ff0000", "#ff00ff"],
    pCategory: "OutofStock",
    pPrice: 40000,
    pDiscount: -22100,
    pRate: 5,
    pCode: "M101",
    pLsize: true,
    pMsize: true,
    pSsize: true,
    pStock: -2,
    pPhoto: "M101.jpg",
  },
  {
    pName: "Fresh Stretch Oxford Shirt",
    pDes: "Men's Fresh Stretch Oxford Shirt",
    pGender: 2,
    pColor: ["#060047", "#B3005E", "#FF5F9E"],
    pCategory: "Popular",
    pPrice: 100000,
    pDiscount: 2,
    pRate: 3.8,
    pCode: "M102",
    pLsize: true,
    pMsize: true,
    pSsize: true,
    pStock: 14,
    pPhoto: "M102.jpg",
  },
  {
    pName: "Printed Tee",
    pDes: "Women's Altitude Printed Tee",
    pGender: 1,
    pColor: ["#C0EEE4", "#FFCAC8"],
    pCategory: "Popular",
    pPrice: 25000,
    pDiscount: 7,
    pRate: 5,
    pCode: "M103",
    pLsize: false,
    pMsize: false,
    pSsize: true,
    pStock: 20,
    pPhoto: "M103.jpg",
  },
  {
    pName: "BASKETBALL TREFOIL JERSEY",
    pDes: "Men's BASKETBALL TREFOIL JERSEY",
    pGender: 1,
    pColor: ["#2192FF", "#9CFF2E", "#FDFF00", "#38E54D", "blue","aqua","orange","red"],
    pCategory: "Sale",
    pPrice: 40000,
    pDiscount: 20,
    pRate: 3.5,
    pCode: "M104",
    pLsize: false,
    pMsize: true,
    pSsize: false,
    pStock: 5,
    pPhoto: "M104.jpg",
  },
];

window.onload = init() //initialize on load

function init() {
  let catalogue = document.getElementById("container");
  for (const p of products) { // print out the provided template literal under the container that was assigned
    catalogue.innerHTML += 
    `<div class="shirt-catalogue">
        <p id="gender" class="gender-class">${genderCheck(p.pGender)}</p>
        <div class="shirt-container"><img src="${p.pCode}.jpg" alt="" class="shirt-image"></div>
        <div class="content-container">
            <div class="shirt-infobar">
                <p class="shirt-name">${p.pName}</p>
                <div class="stock-status">${p.pCategory}</div>
                <div class="rating"><ion-icon name="star"></ion-icon> ${ratingCheck(p.pRate)} </div>
            </div>
            <p class="shirt-category">${p.pDes}</p>
            <div class="color-size-stock">
                <div class="color-select">
                    <div class="first-color color-circles" style="background-color:${p.pColor[0]}"></div>
                    <div class="second-color color-circles" style="background-color:${p.pColor[1]}"></div>
                    <div class="third-color color-circles" style="background-color:${p.pColor[2]}"></div>
                    <div class="fourth-color color-circles" style="background-color:${p.pColor[3]}"></div>
                    <div class="fifth-color color-circles" style="background-color:${p.pColor[4]}"></div>
                    <div class="sixth-color color-circles" style="background-color:${p.pColor[5]}"></div>
                    <div class="seventh-color color-circles" style="background-color:${p.pColor[6]}"></div>
                    <div class="eighth-color color-circles" style="background-color:${p.pColor[7]}"></div>
                </div>
                <div class="size-select">
                    <div class="large-size">L</div>
                    <div class="medium-size">M</div>
                    <div class="small-size">S</div>
                </div>
                <div class="available-stock">${stockCheck(p.pStock)} left</div>
            </div>
            <div class="price-info">
                <div class="original-price">${p.pPrice} MMK</div>
                <div class="discounted-price">${discountCheck(p.pPrice - p.pPrice * (p.pDiscount / 100))}</div>
                <div class="discount-percentage">(${percentageCheck(p.pDiscount)}% off)</div>
            </div>
        </div>
    </div>`;
  }
}
function stockCheck(stock) {
  if (stock >= 1) { 
    return stock // return value only if its bigger than 1
  }
    return "None"
} 
function discountCheck(discount) { //return value only ifs its not bigger than 100k
  if(discount >= 100000) {
    return "Price Error"
  }
  return discount + " MMK"
}
function percentageCheck(percentage) { //controls the value to not exceeds 100 and no less than 0
  if (percentage >= 1 && percentage <= 100) {
    return percentage
  }
    return "0"
}
function genderCheck(gender) { //return the gender status based on the value provided from the object
  if (gender == 1) {
    return "F"
  }
  else if(gender == 2){
    return "M"
  }
    return "M/F"
}
function ratingCheck(rating){ //controls the return value to never go lower than 1 and higher than 5
  if (rating >= 5) {
    return "5"
  }
  else if (rating <= 0) {
    return "1"
  }
    return rating
}