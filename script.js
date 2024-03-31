const products = [
  {
    pName: "Addicolor 3-Stripes",
    pDes: "Women's Originals",
    pGender: 2,
    pColor: ["#23ef45", "#000000", "#ff0000", "#ff00ff"],
    pCategory: "OutofStock",
    pPrice: 40000,
    pDiscount: 100,
    pRate: 5,
    pCode: "M102",
    pLsize: true,
    pMsize: true,
    pSsize: true,
    pStock: 9,
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
    pColor: ["#2192FF", "#9CFF2E", "#FDFF00", "#38E54D"],
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

init();

function init() {
  let catalogue = document.getElementById("container");
  for (const p of products) {
    catalogue.innerHTML += `
    <div class="shirt-catalogue">
        <p class="gender-class">F</p>
        <img src="./M101.jpg" alt="" class="shirt-image">
        <div class="content-container">
            <div class="shirt-infobar">
                <p class="shirt-name">${p.pName}</p>
                <div class="stock-status">${p.pCategory}</div>
                <div class="rating"><ion-icon name="star"></ion-icon> 5</div>
            </div>
            <p class="shirt-category">Women's Originals</p>
            <div class="color-size-stock">
                <div class="color-select">
                    <div class="green-color color-circles"></div>
                    <div class="black-color color-circles"></div>
                    <div class="red-color color-circles"></div>
                    <div class="pink-color color-circles"></div>
                </div>
                <div class="size-select">
                    <div class="large-size">L</div>
                    <div class="medium-size">M</div>
                    <div class="small-size">S</div>
                </div>
                <div class="available-stock">10 left</div>
            </div>
            <div class="price-info">
                <div class="original-price">46,000 MMK</div>
                <div class="discounted-price">0 MMK</div>
                <div class="discount-percentage">(100% off)</div>
            </div>
        </div>
    </div>`
    ;
  }
}