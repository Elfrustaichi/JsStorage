let id=1;




const addBtn=document.querySelectorAll("span");
addBtn.forEach((e)=>{
    e.addEventListener("click",(e)=>{
        if(e.target.className=="giraffe-add"){
        let itemObjectGiraffe={
            itemName:"Giraffe",
            itemPrice:"31,69$",
            itemImg:"./assets/img/giraffe.jpg"
        }
        localStorage.setItem(`${id} Giraffe`,JSON.stringify(itemObjectGiraffe));
        id+=1;

    }
    else if(e.target.className=="elephant-add"){
        let itemObjectElephant={
            itemName:"Elephant",
            itemPrice:"111.22$",
            itemImg:"./assets/img/elephant.jpg"
        }
        localStorage.setItem(`${id} Elephant`,JSON.stringify(itemObjectElephant));
        id+=1;

    }
    else if(e.target.className=="dog-add"){
        let itemObjectDog={
            itemName:"Dog",
            itemPrice:"33.33$",
            itemImg:"./assets/img/dog.jpg"
        }
        localStorage.setItem(`${id} Dog`,JSON.stringify(itemObjectDog));
        id+=1;

    }
    else if(e.target.className=="cat-add"){
        let itemObjectCat={
             itemName:"Cat",
            itemPrice:"1.22$",
            itemImg:"./assets/img/cat.jpg"
        }
        localStorage.setItem(`${id} Cat`,JSON.stringify(itemObjectCat));
        id+=1;
    }
   
  

})
    

})



