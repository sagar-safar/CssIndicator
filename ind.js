document.getElementById("item1").onmouseover = indicator1_over1;
document.getElementById("item1").onmouseout = indicator1_out1;

document.getElementById("item2").onmouseover = indicator1_over2;
document.getElementById("item2").onmouseout = indicator1_out2;

document.getElementById("item3").onmouseover = indicator1_over3;
document.getElementById("item3").onmouseout = indicator1_out3;

document.getElementById("item4").onmouseover = indicator1_over4;
document.getElementById("item4").onmouseout = indicator1_out4;

document.getElementById("item5").onmouseover = indicator1_over5;
document.getElementById("item5").onmouseout = indicator1_out5;



/* item1*/
function indicator1_over1(){
    const ele = document.getElementById("move");
    ele.style.left = "49px";
    ele.style.opacity = "1";

}

function indicator1_out1(){
    const ele = document.getElementById("move");
    
    ele.style.opacity = "0";

}

/* item2 */
function indicator1_over2(){
    const ele = document.getElementById("move");
    ele.style.left = "130px";
    ele.style.opacity = "1";

}



function indicator1_out2(){
    const ele = document.getElementById("move");
 
    ele.style.opacity = "0";

}
/* item3*/

function indicator1_over3(){
    const ele = document.getElementById("move");
    ele.style.left = "204px";
    ele.style.opacity = "1";

}

function indicator1_out3(){
    const ele = document.getElementById("move");
 
    ele.style.opacity = "0";

}
/* item4 */

function indicator1_over4(){
    const ele = document.getElementById("move");
    ele.style.left = "285px";
    ele.style.opacity = "1";

}

function indicator1_out4(){
    const ele = document.getElementById("move");
    
    ele.style.opacity = "0";

}

/* item5*/

function indicator1_over5(){
    const ele = document.getElementById("move");
    ele.style.left = "378px";
    ele.style.opacity = "1";

}

function indicator1_out5(){
    const ele = document.getElementById("move");

    ele.style.opacity = "0";

}


