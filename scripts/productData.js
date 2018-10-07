/*
* This is our data
*/
dogProducts = [
  {
    img: "dog1.jpg",
    title: "WEB MASTER™ HARNESS",
    desc:"secure, reflective, multi-use",
    price: "$59.95",
    link: "detail.html"
  },
  {
    img: "dog2.jpg",
    title: "WEB MASTER PRO™ HARNESS",
    desc:"professional harness",
    price: "$99.95",
    link: "products.html"
  },
  {
    img: "dog3.jpg",
    title: "HI & LIGHT™ HARNESS",
    desc:"lightweight, low-profile",
    price: "$124.95",
    link: "products.html"
  },
  {
    img: "dog4.jpg",
    title: "DOUBLEBACK™ HARNESS",
    desc:"strength-rated safety harness",
    price: "$99.95",
    link: "products.html"
  },
  {
    img: "dog5.jpg",
    title: "LOAD UP™ HARNESS",
    desc:"vehicle restraint harness",
    price: "$79.95",
    link: "products.html"
  },
  {
    img: "dog6.jpg",
    title: "OMNIJORE™ JORING SYSTEM",
    desc:"dog powered joring system",
    price: "$169.95",
    link: "products.html"
  }
];

/*
* This function is called once the DOM loads
*/
function loadPage() {
  let contentArea = document.getElementsByClassName("contentArea")[0]

  dogProducts.forEach(item => {
    let div = buildItem(item)
    contentArea.appendChild(div)
  })
}

/*
* this function dynamically creates divs to display
* the data
*/
function buildItem(data) {
  let imgSrc = data.img
  let title = data.title
  let desc = data.desc
  let price = data.price
  let link = data.link

  let itemBlock = document.createElement("div")
  itemBlock.classList.add("itemBlock")

  let productImage = document.createElement("div")
  productImage.classList.add("productImage")
  productImage.style.backgroundImage = 'url("img/' + imgSrc + '")'
  var a = document.createElement('a')
  a.href = link
  a.appendChild(productImage)
  itemBlock.appendChild(a)

  let productTitle = document.createElement("div")
  productTitle.textContent = title
  productTitle.classList.add("productTitle")
  itemBlock.appendChild(productTitle)

  let productDesc = document.createElement("div")
  productDesc.textContent = desc
  productDesc.classList.add("productDesc")
  itemBlock.appendChild(productDesc)

  let productPrice = document.createElement("div")
  productPrice.textContent = price
  productPrice.classList.add("productPrice")
  itemBlock.appendChild(productPrice)

  return itemBlock
}
