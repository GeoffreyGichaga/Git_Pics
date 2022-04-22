const authorizationKey ="563492ad6f91700001000001a8f71b5cd5a54494a9ccf2bb5df9ed5b"

const searchInput = document.getElementById("searchinput")
const searchButton = document.getElementById("searchbtn")
const displaySection = document.getElementById("displayProjects")
const displayImage = document.querySelectorAll(".projectsDisplay")


async function CuratedPhotos()
{
    const data = await fetch(`https://api.pexels.com/v1/curated?per_page=9`, 
    {
        method:"GET",
        headers:{
            Authorization:authorizationKey
        }
    }
    );
    
    const foundPics = await data.json();
    console.log(foundPics);
    foundPics.photos.forEach(foundPic =>{
        let column = document.createElement('div')
        column.className = 'mb-3 col-md-3 col-lg-4 col-sm-12'
        column.innerHTML = `<img src = ${foundPic.src.large}>`
        displaySection.appendChild(column) 

    })

  
}



async function searchingPhotos(value)
{
    let inputValue = searchInput.value;

    const data = await fetch(`https://api.pexels.com/v1/search?query=${inputValue}&per_page=9`, 
    {
        method:"GET",
        headers:{
            Authorization:authorizationKey
        }
    }
    );
    
    const foundPics = await data.json();
    console.log(foundPics);
    foundPics.photos.forEach(foundPic =>{
        let column2 = document.createElement('div')
        column2.className = 'mb-3 col-md-3 col-lg-4 col-sm-12'
        column2.innerHTML = `<img src = ${foundPic.src.large}>`
        displaySection.appendChild(column2) 

    })

  
}


function clearDisplay()
{
    displaySection.innerHTML = "";

}

searchButton.addEventListener('click',()=>{

    clearDisplay()

    let inputValue = searchInput.value;
    searchingPhotos(inputValue)


})