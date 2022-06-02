
var tabel = document.querySelector(".tabel_poze");

for(let i = 0; i < 6; i++)
{
    var poza = document.createElement("div");
    poza.className = "poza";
    tabel.appendChild(poza);

}

var poze = document.getElementsByClassName("poza");

poze[0].style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/8/81/Ferrari_288_GTO_%281%29.JPG')";

poze[1].style.backgroundImage = "url('https://static.automarket.ro/img/auto_resized/db/article/064/881/697893l-900x0-w-69295eee.jpg')";

poze[2].style.backgroundImage = "url('https://imboldn.com/wp-content/uploads/2019/07/1995-Ferrari-F50-main.jpg')";

poze[3].style.backgroundImage = "url('https://images6.alphacoders.com/362/thumb-1920-362415.jpg')";

poze[4].style.backgroundImage = "url('https://assets.auto-expert.md/assets/upload/blog/18451/CrOY7GS5H8fCu5VdzprHfGaSKD0NF1hxsXMns7eL.jpeg')";

poze[5].style.backgroundImage = "url('https://static.automarket.ro/img/auto_resized/db/model/003/232/748617l-1000x640-b-63708cdc.jpg')";

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

});


