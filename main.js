kayakList = [
	{
  	name:"Mamba",
    price:"$879",
    description:"our lightest playboat",
    url:"images/kayak1.jpg"
  
  },
  {
  	name :"Zen",
    price:"$579",
    description:"great for beginners",
    url:"images/kayak2.jpg"
  },
  {
  	name : "Angler",
    price : "$779",
    description: "for the seasoned sportsman",
    url: "images/kayak3.jpg"
  },
  {
  	name : "Outback",
    price : "$1179",
    description: "the workhorse",
    url: "images/kayak4.jpg"
  },
  {
  	name : "Barracuda",
    price : "$579",
    description: "versatile sit-on-top",
    url: "images/kayak5.jpg"
  },
  {
  	name : "Kraken",
    price : "$479",
    description: "speedy and nimble",
    url: "images/kayak6.jpg"
  },
  {
  	name : "Nomad",
    price : "$979",
    description: "rugged playboat",
    url: "images/kayak7.jpg"
  },
  {
  	name : "Big Rig",
    price : "$1279",
    description: "extra stable and roomy",
    url: "images/kayak8.jpg"
  }


];
function cardAssign() {
    let empty = "";
	for (var i=0; i < kayakList.length; i++) {
        let productName = `<div class="card"><p>name: ${kayakList[i].name}</p><p>price: 	${kayakList[i].price}</p><p>description: ${kayakList[i].description}</p><p>url:${kayakList.url}</p></div>`;
        empty += productName;
        console.log('this is each card',empty);
    };
    console.log('this is your complete HTML',empty);
    document.querySelector(".container").innerHTML = empty;
};
cardAssign();