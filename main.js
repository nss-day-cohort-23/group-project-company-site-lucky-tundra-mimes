kayakList = [
	{
  	name:"Mamba",
    price:"$879",
    description:"our lightest playboat",
    url:"ivana-cajina-363948.jpg"
  
  },
  {
  	name :"Zen",
    price:"$579",
    description:"great for beginners",
    url:"nitish-meena-111116.jpg"
  },
  {
  	name : "Angler",
    price : "$779",
    description: "for the seasoned sportsman",
    url: "prod_imgs/kayak3.jpg"
  },
  {
  	name : "Outback",
    price : "$1179",
    description: "the workhorse",
    url: "prod_imgs/kayak4.jpg"
  },
  {
  	name : "Barracuda",
    price : "$579",
    description: "versatile sit-on-top",
    url: "prod_imgs/kayak5.jpg"
  },
  {
  	name : "Kraken",
    price : "$479",
    description: "speedy and nimble",
    url: "prod_imgs/kayak6.jpg"
  },
  {
  	name : "Nomad",
    price : "$979",
    description: "rugged playboat",
    url: "prod_imgs/kayak7.jpg"
  },
  {
  	name : "Big Rig",
    price : "$1279",
    description: "extra stable and roomy",
    url: "prod_imgs/kayak8.jpg"
  }


];
function cardAssign() {
    let empty = "";
	for (var i=0; i < kayakList.length; i++) {
        let productName = `<div class="card"><p>name: ${kayakList[i].name}</p><p>price: 	${kayakList[i].price}</p><p>description: ${kayakList[i].description}</p><img src=${kayakList[i].url}></div>`;
        empty += productName;
        console.log('this is each card',empty);
    };
    console.log('this is your complete HTML',empty);
    document.querySelector(".container").innerHTML = empty;
};
cardAssign();