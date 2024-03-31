const products = [
  {
    pName: "Addicolor 3-Stripes",
    pDes: "Women's Originals",
    pGender: 2,
    pColor: ["#23ef45", "#000000", "#ff0000", "#ff00ff"],
    pCategory: "OutofStock",
    pPrice: 40000,
    pDiscount: 200,
    pRate: 5,
    pCode: "M101",
    pLsize: true,
    pMsize: true,
    pSsize: true,
    pStock: 0,
    pPhoto: "M101.jpg",
  },
  {
    pName: "Fresh Stretch Oxford Shirt",
    pDes: "Men's Fresh Stretch Oxford Shirt",
    pGender: 1,
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
    pColor: [
      "#2192FF",
      "#9CFF2E",
      "#FDFF00",
      "#38E54D",
      "blue",
      "aqua",
      "orange",
    ],
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

window.onload = init();

function init() {
  let catalogue = document.getElementById("container");
  for (const p of products) {
    catalogue.innerHTML += `<div class="shirt-catalogue">
        <p id="gender" class="gender-class">${p.pGender}</p>
        <div class="shirt-container"><img src="${
          p.pCode
        }.jpg" alt="" class="shirt-image"></div>
        <div class="content-container">
            <div class="shirt-infobar">
                <p class="shirt-name">${p.pName}</p>
                <div class="stock-status">${p.pCategory}</div>
                <div class="rating"><ion-icon name="star"></ion-icon> ${
                  p.pRate
                } </div>
            </div>
            <p class="shirt-category">${p.pDes}</p>
            <div class="color-size-stock">
                <div class="color-select">
                    <div id="firstColor" class="color-circles" style="background-color:${
                      p.pColor[0]
                    }"></div>
                    <div id="secondColor" class="color-circles" style="background-color:${
                      p.pColor[1]
                    }"></div>
                    <div id="thirdColor" class="color-circles" style="background-color:${
                      p.pColor[2]
                    }"></div>
                    <div id="fourthColor" class="color-circles" style="background-color:${
                      p.pColor[3]
                    }"></div>
                    <div id="fifthColor" class="color-circles" style="background-color:${
                      p.pColor[4]
                    }"></div>
                    <div id="sixthColor" class="color-circles" style="background-color:${
                      p.pColor[5]
                    }"></div>
                    <div id="seventhColor" class="color-circles" style="background-color:${
                      p.pColor[6]
                    }"></div>
                </div>
                <div class="size-select">
                    <div id="largeSize">${p.pLsize}L</div>
                    <div id="medium-size">M</div>
                    <div id="small-size">S</div>
                </div>
                <div class="available-stock">${stockCheck(p.pStock)} left</div>
            </div>
            <div class="price-info">
                <div class="original-price">${p.pPrice} MMK</div>
                <div class="discounted-price">${p.pPrice - p.pPrice * (p.pDiscount / 100)} MMK</div>
                <div class="discount-percentage">(${discountCheck(
                  p.pDiscount
                ) + "% off"})</div>
            </div>
        </div>
    </div>`;
  }
}
function stockCheck(stock) {
  if (stock >= 1) {
    return stock;
  } else {
    return "None";
  }
}
function discountCheck(discount) {
  if (discount >= 1 && discount <= 100) {
    return discount;
  } else {
    return "0";
  }
}
