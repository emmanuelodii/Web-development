let number= 1;
        let no = document.getElementById("number");
        const add=()=>{
        no.innerText = number++;
         if(number >10){
            let aboveText = "9+"
           let above = document.querySelector("#number").innerHTML= aboveText;
        above.style.color='green'}


    }