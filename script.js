let currentcarID;

function fetchcars() 
{
    let body = document.getElementsByTagName("body")[0];
    let p = document.createElement('p');
    p.innerText = 'loading...';
    p.setAttribute('id', 'loading');
    body.appendChild(p);

    fetch('http://localhost:3007/cars',
    {
            method:'get'
    }   
    ).then(function(response)
    {
        response.json().then((data)=>
        {
            if(data.length) 
            {
                console.log(data);
                body.removeChild(p);
            }

            for(let i=0; i<data.length; i++) 
            {

                let br = document.createElement('br');
                body.appendChild(br);

                let image = document.createElement('img');
                image.setAttribute('src', data[i].img);
                image.style.width = "30%";
                image.style.height = "250px";
                image.style.marginLeft = "35%";
                image.style.marginRight = "35%";
                image.style.border = "solid yellow";
                image.style.borderRadius = "7px";
                image.id = "img";

                body.appendChild(image);

                let h2 = document.createElement('h2');
                h2.className = "text";
                h2.style.textAlign = "center";
                h2.innerText=data[i].name;
                body.appendChild(h2);

                let edit = document.createElement('button');
                edit.innerText = "Schimba detalii";
                edit.className = "buton_json";
                edit.style.width = "10%";
                edit.style.marginLeft = "40%";
                edit.onclick = function() 
                {
                    document.getElementById('name').value = data[i].name;
                    document.getElementById('url').value = data[i].img;
                    currentcarID = data[i].id;
                }
                body.appendChild(edit);

                let Delete = document.createElement('button');
                Delete.innerText = "Sterge";
                Delete.className = "buton_json";
                Delete.style.width = "10%";
                Delete.style.marginRight = "40%";
                Delete.onclick = function() 
                {
                    deletecar(data[i].id);
                }
                body.appendChild(Delete);

                let hr = document.createElement('hr');
                hr.className = "separator";
                body.appendChild(hr);

            }
        })
    })
}

function addcar() 
{
    let body = document.getElementsByTagName('body')[0];
    let name = document.getElementById('name').value;
    let image = document.getElementById('url').value;

    let newcar = 
    {
        name: name,
        img: image
    }

    fetch('http://localhost:3007/cars', 
        {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newcar)
        }).then(function(response) 
        {
            window.location.reload();
        })
}

function updatecar() 
{
    let name = document.getElementById('name').value;
    let image = document.getElementById('url').value;
    let newcar = {
        name: name,
        img: image
    }

    fetch('http://localhost:3007/cars/' + currentcarID, 
    {
        method: 'put',
        headers:  {'Content-Type': 'application/json'},
        body: JSON.stringify(newcar)
    }).then(function(response) 
    {
        window.location.reload();
    })
}

function deletecar(id) 
{
    let name = document.getElementById('name').value;
    let image = document.getElementById('url').value;

    fetch('http://localhost:3007/cars/' + id, 
    {
        method: 'delete'
    }).then(function(response) 
    {
        window.location.reload();
    })
}

fetchcars();