let gallery = [
    {
        houseimg: '1',
        houseName: 'Micredo Luxury Apartment (5-Bedroom), Ikeja',
        houseprice: '$500,000'
    },
    {
        houseimg: '2',
        houseName: 'Albas Country Home, Ikate',
        houseprice: '$1,100,000'
    },
    {
        houseimg: '3',
        houseName: 'Feroxa Maisonnetes, Ijora',
        houseprice: '$800,000'
    },
    {
        houseimg: '4',
        houseName: 'The Albeit Mansion (6-Bedroom), Ikoyi',
        houseprice: '$1,000,000'
    },
    {
        houseimg: '5',
        houseName: 'Cambifa Luxury Home, Ibadan',
        houseprice: '$900,000'
    },
    {
        houseimg: '6',
        houseName: 'San-Siro Luxury Home, VGC',
        houseprice: '$800,000'
    },
    {
        houseimg: '7',
        houseName: 'The Branson Mansions, Ikoyi',
        houseprice: '$1,500,000'
    },
    {
        houseimg: '8',
        houseName: 'Macpherson Estates, Ikoyi',
        houseprice: '$1,200,000'
    },
    {
        houseimg: '9',
        houseName: 'Tamedo Apartments (5-Bedroom), Ikeja',
        houseprice: '$600,000'
    },
    {
        houseimg: '10',
        houseName: 'Krosbon Luxury Home (4-Bedroom), Lekki',
        houseprice: '$750,000'
    },
    {
        houseimg: '11',
        houseName: 'The Mecerinido Luxury Mansion, VI',
        houseprice: '$1,550,000'
    },
    {
        houseimg: '12',
        houseName: 'Meceredo Luxury Apartment (5-Bedroom), Ikate',
        houseprice: '$550,000'
    },
    
]
let gallerySect = document.getElementById('gallery-section');
let html = "";
gallery.forEach(e => {
    html += `
        <div class="col-12 col-md-4 col-lg-4 mb-4" id="gallery-section">
            <a href="#" class="text-decoration-none">
                <img src="img/${e.houseimg}.jpg" alt="" class="gallery-img img-fluid">
                <div class="bg-secondary ps-3 poppins-nav text-white shadow-gal py-2">
                    <p class="sm-text">${e.houseName}</p>
                    <div class="d-flex justify-content-between me-2">
                        <p class="fs-6">${e.houseprice}</p>
                        <button class="btn btn-warning sm-text text-white">see more</button>
                    </div>
                </div>
            </a>
        </div>
    
    `
    console.log(e)

    gallerySect.innerHTML = html
})