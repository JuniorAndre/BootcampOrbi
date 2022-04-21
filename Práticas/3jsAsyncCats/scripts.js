const base_url = 'https://thatcopy.pw/catapi/rest'

const catBtn = document.getElementById('change-cat');

const getCats = async() => {
    try{
        const data = await fetch(base_url);
        const json = await data.json();
        return json.webpurl;
    }
    cathy(e){
        console.log(e.message);
    }
}

const loadImg = async() => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg)

loadImg();
