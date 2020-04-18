function makeDivs(nbr) {
    let s = 1;
    let d = 2;
    for (let n = 0; n < nbr; n++) {
    
        let x = 1;
        let y = 2;
        for (let i = 0; i < nbr; i++) {
            let mstr = document.querySelector(".master");
            //console.log(mstr);
            let newDiv = document.createElement('div');
            //newDiv.classList.add('slave');
            newDiv.style.gridColumnStart = s;
            newDiv.style.gridColumnEnd = d;
            newDiv.style.gridRowStart = x;
            newDiv.style.gridRowEnd = y;
            if (d % 2 === 0 && x %2 >0) {
                newDiv.classList.add('slave');
            }
            else {
                newDiv.classList.add('alt');
            }
            //newDiv.innerHTML = 'This is a new div!';
            mstr.appendChild(newDiv);
            x += 1;
            y += 1;
            //console.log("The value of x is " + x);
            //console.log("The value of y is " + y);
        }
    s +=1;
    d +=1;
    }
    console.log('Complete');
}

makeDivs(16);

/*
let a = document.querySelector("#mainDiv");
let p = document.querySelector(".p1");
let mstrClass = document.getElementsByTagName("div");
console.log(a);
console.log(p);
console.log(mstrClass);
*/