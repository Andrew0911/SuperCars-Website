
var tabel = document.querySelector(".tabel_poze");

for(let i = 0; i < 6; i++)
{
    var poza = document.createElement("div");
    poza.className = "poza";
    tabel.appendChild(poza);

}

var poze = document.getElementsByClassName("poza");

poze[0].style.backgroundImage = "url('https://www.hdcarwallpapers.com/walls/2017_lamborghini_aventador_s_4k-HD.jpg')";

poze[1].style.backgroundImage = "url('https://www.lambocars.com/wp-content/uploads/2020/12/lamborghini_veneno_rosso_1.jpg')";

poze[2].style.backgroundImage = "url('https://static.automarket.ro/v5/img/auto_resized/db/model/003/867/277121l-1000x637-b-a9d067ce.jpg')";

poze[3].style.backgroundImage = "url('https://static.automarket.ro/img/auto_resized/db/article/075/841/446854l-1000x640-b-7529cab2.jpg')";

poze[4].style.backgroundImage = "url('https://data.1freewallpapers.com/download/hennessey-lamborghini-urus-hpe750-2020-4k-cars-1920x1440.jpg')";

poze[5].style.backgroundImage = "url('https://wallpaperaccess.com/full/489375.jpg')";

for(poza of poze)
{
    poza.onclick = function()
    {
        this.remove();
        if(poze.length == 0)
        {
            alert("Nu mai exista elemente de sters !");
        }
    }
}

var counter = 0;
var start = 0;

document.body.addEventListener('keypress', function(event)
{
    if(event.key == " ")
    {
        for(let i = 0 ; i < poze.length; i++)
        {
            if(poze[i].style.border == "solid yellow")
                poze[i].style.border = "none";
            else
                poze[i].style.border = "solid yellow";
        }
    }
    else if(event.key == "1")
    {
        counter ++;
        var t = setInterval(function()
        {
            if(counter % 2 == 1)
            {
                poze[start].style.border = "solid red 3px";
                start++;
            }
            else
            {
                clearInterval(t);
            }

        }, 1000);
    }

});


