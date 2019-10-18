const sleep = (n) => new Promise(resolve => setTimeout(resolve, n));
var i = 0, j = 0;
var stopper = false;
const speed = parseInt(location.href.split("#")[1]) || 100;

function stop(){
    stopper = !stopper;
    init();
}

function init(){
    hoge();
}

function hoge(){
    let data;
    $(function(){
        $.ajax({
            // url: "https://weathernews.jp/onebox/35.68/139.77/temp=c",
            url: "https://www.aozora.gr.jp/index_pages/sakuhin_a1.html",
            type: "GET",
            origin: "*",
            // headers: {
            //     ':authority:': "www.aozora.gr.jp",
            //     ':method:': 'GET',
            // },
            success: function(res) {
                //weather-now__cont
                data = $($(res)).text();
                // wet = data[77].getElementsByClassName("weather-now__cont")[0].innerText.split("\n").map(s=>{
                //     return s.split("").filter(c=>{
                //         if(c!=" "&&c!="　") return c;
                //     }).join("");
                // });
                // wet.pop();
                // wet.pop();
                // wet.reverse().pop();
                // wet.pop();
                // wet.pop();
                // wet.reverse();
                localStorage.setItem("data", data);
                // console.log(wet)
            }
        });
    });
    console.log(localStorage.getItem("data"))

    // (async()=>{
    //     while(i<content.length&&!stopper){
    //         while(j<content[i].length&&!stopper){
    //             document.getElementById(i).innerHTML = content[i].slice(0,j+1);
    //             // document.getElementById(i).insertAdjacentHTML("beforeend",content[i][j]);
    //             document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
    //             await sleep(speed);
    //             j=(j+1)|0;
    //         }
    //         if(!stopper){
    //             i=(i+1)|0;
    //             j=0;
    //             var div = document.createElement("div");
    //             div.setAttribute("id", String(i));
    //             div.setAttribute("class", "moji");
    //             document.body.insertBefore(div,document.getElementById(String(i-1)).nextSibling);
    //         }
    //     }
    // })();
}

window.addEventListener("DOMContentLoaded", init);
