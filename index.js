const sleep = (n) => new Promise(resolve => setTimeout(resolve, n));
var i = 0, j = 0;
var stopper = false;
const speed = parseInt(location.href.split("#")[1]) || 100;
var content;

function stop(){
    stopper = !stopper;
    write();
}

function init(){
    console.log(list.split('\n'))
    list.split('\n').forEach((line,index)=>{
        if(index==0) return;
        var item = line.split(",");
        var div = document.createElement('div');
        div.innerHTML = `${item[15]} ${item[16]} : ${item[1]}`.split('').map(c=>{return c=='"'?'':c}).join('');
        div.setAttribute('id', item[0]);
        div.setAttribute('onclick', `link(${item[0].split('').map(c=>{return c=='"'?'':c}).join('')})`)
        document.body.appendChild(div);
    })
}

function link(id){
    let data;
    $(function(){
        $.ajax({
            url: `http://pubserver2.herokuapp.com/api/v0.1/books/${id}/content?format=html`,
            type: "GET",
            origin: "*",
            success: function(res) {
                data = $($(res)).text();
                localStorage.setItem("data", data);
            }
        });
    });

    document.body.innerHTML = `
        <div style="background:rgba(0,0,0,0);margin:-5vw 0 0 -5vw;position:fixed;width:100vw;height:100vh;" onclick="stop()"></div>
        <div id="0" class="moji"></div>
    `;

    (async()=>{
        await sleep(3000);
        write();
    })();
}

function write(){
    (async()=>{
        if(!content) content = localStorage.getItem("data").split('\n');
        while(i<content.length&&!stopper){
            while(j<content[i].length&&!stopper){
                document.getElementById(i).innerHTML = content[i].slice(0,j+1);
                // document.getElementById(i).insertAdjacentHTML("beforeend",content[i][j]);
                document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight;
                await sleep(speed);
                j=(j+1)|0;
            }
            if(!stopper){
                i=(i+1)|0;
                j=0;
                var div = document.createElement("div");
                div.setAttribute("id", String(i));
                div.setAttribute("class", "moji");
                document.body.insertBefore(div,document.getElementById(String(i-1)).nextSibling);
            }
        }
    })();
}

window.addEventListener("DOMContentLoaded", init);
