//Populate the divs into the master container
//using the number ultimately given by user
function makeDivs(nbr) {
    let s = 1;
    let d = 2;
    let idCounter =  1;
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
            /*if (y % 2 === 0 && d % 2 === 0) {
                newDiv.classList.add('slave');
            }
            else {
                newDiv.classList.add('alt');
            }*/
            //newDiv.innerHTML = 'This is a new div!';
            newDiv.setAttribute("id",idCounter);
            mstr.appendChild(newDiv);
            x += 1;
            y += 1;
            idCounter += 1;
            //console.log("The value of x is " + x);
            //console.log("The value of y is " + y);
        }
    s +=1;
    d +=1;
    }
    //console.log('Complete');
}

//Build array of div IDs where the coloring pattern
//needs to be reversed
function popArray(nbr) {
    let breakCol = [1];
    let iterLim = nbr - 1;
    for (let i = 1; i <= iterLim; i++) {
        nextBrk = (nbr * i) + 1;
        breakCol.push(nextBrk);
    }
    //console.log(breakCol);
    return breakCol;
}

//Function to apply primary pattern via
//class assignment
function colorPrimary(startCol,len) {
    let endPt = startCol + len - 1;
    for (let i = startCol; i <= endPt; i++) {
        let modNow = document.getElementById(i);
        //console.log(modNow);
        if (i % 2 ===0) {
            modNow.classList.add("slave");
        }
        else {
            modNow.classList.add("alt");
        }
    }
}

//Function to apply alternate pattern via
//class assignment
function colorAlt(startCol,len) {
    let endPt = startCol + len - 1;
    for (let i = startCol; i <= endPt; i++) {
        let modNow = document.getElementById(i);
        //console.log(modNow);
        if (i % 2 ===0) {
            modNow.classList.add("alt");
        }
        else {
            modNow.classList.add("slave");
        }
    }
}

//This function controls which pattern is applied
//to which column of divs via the pattern-applying
//functions above
function colorDivs (arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let startCol = arr[i];
        if (i % 2 === 0) {
            colorPrimary(startCol,len);
        }
        else {
            colorAlt(startCol,len);
        }
    }
}

function clearDivs () {
    let allSlaves = document.querySelectorAll(".slave");
    let allAlt = document.querySelectorAll(".alt");
    let slaveArray = Array.from(allSlaves);
    let altArray = Array.from(allAlt);
    //console.log(slaveArray);
    //return slaveArray;
    //let mstrDiv = document.querySelectorAll(".master");
    //mstrDiv.Child
    for (let i = 0; i < slaveArray.length; i++) {
        slaveArray[i].remove();
        altArray[i].remove();
    }
}

makeDivs(16);
colorDivs(popArray(16));
//clearDivs();