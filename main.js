kayakList = [
	{
  	name:"fsdfs",
    price:"2",
    description:"a kayak",
    url:"junk.com"
  
  },
  {
  	name :"s",
    price:"3",
    description:"a kayak",
    url:"junk.com"
  },
  {
  	name : "t",
    price : "6",
    description: "b kayak",
    url: "url.com"
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