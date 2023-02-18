var i,j=0;
var container = document.getElementsByClassName("SlidePic");
var DotContainer = document.getElementsByClassName("btn");
var n=container.length;
// console.log(container);
for(i=1;i<n;i++){
 container[i].style.display="none";
 DotContainer[i].style.backgroundColor="white";
}
container[0].style.display="block";
DotContainer[0].style.backgroundColor="cornflowerblue";
const myTimeout = setInterval(Slider, 6000);
function Slider() {
    for(i=0;i<n;i++){
        if(container[i].style.display=="block"){
            container[i].style.display="none";
            DotContainer[i].style.backgroundColor="white";
            if(i==n-1){
                container[0].style.display="block";
                DotContainer[0].style.backgroundColor="cornflowerblue";
            }
            else{
                container[i+1].style.display="block";
                DotContainer[i+1].style.backgroundColor="cornflowerblue";
            }
            break
        }
    }
}
function slideWithDot(i){
    for(j=0;j<n;j++){
        container[j].style.display="none";
        DotContainer[j].style.backgroundColor="white";
    }
    container[i].style.display="block";
    DotContainer[i].style.backgroundColor="cornflowerblue";

}