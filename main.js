kayakList = [
	{
  	name:"Mamba",
    price:"$879",
    description:"Our lightest playboat",
    url:"kayak1.jpg"
  
  },
  {
  	name :"Zen",
    price:"$579",
    description:"Great for beginners",
    url:"kayak2.jpg"
  },
  {
  	name : "Angler",
    price : "$779",
    description: "For the seasoned sportsman",
    url: "kayak3.jpg"
  },
  {
  	name : "Outback",
    price : "$1179",
    description: "The workhorse",
    url: "kayak4.jpg"
  },
  {
  	name : "Barracuda",
    price : "$579",
    description: "Versatile sit-on-top",
    url: "kayak5.jpg"
  },
  {
  	name : "Kraken",
    price : "$479",
    description: "Speedy and nimble",
    url: "kayak6.jpg"
  },
  {
  	name : "Nomad",
    price : "$979",
    description: "Rugged playboat",
    url: "kayak7.jpg"
  },
  {
  	name : "Big Rig",
    price : "$1279",
    description: "Extra stable and roomy",
    url: "kayak8.jpg"
  }


];
function cardAssign() {
    let empty = "";
	for (var i=0; i < kayakList.length; i++) {
        let productName = `<div class="card"><p>Name: ${kayakList[i].name}</p><p>Price: 	${kayakList[i].price}</p><p>Description: ${kayakList[i].description}</p><img src=${kayakList[i].url} alt="kayak product"></div>`;
        empty += productName;
        console.log('this is each card',empty);
    };
    console.log('this is your complete HTML',empty);
    document.querySelector(".container").innerHTML = empty;
};
cardAssign();