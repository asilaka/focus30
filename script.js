const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.onclick = () => {
    menu.classList.toggle('open')
}




const modalBtn = document.querySelector('#modalBtn')
const closeBtn = document.querySelector('#closeBtn')
const modal = document.querySelector('.modal')


modalBtn.onclick = () => {
    modal.classList.add('open-modal')
}



closeBtn.onclick = () => {
    modal.classList.remove('open-modal')
}

modal.onclick = (e) => {

    console.log(e.target);

    if(!e.target.closest('.modal__box')) {
        modal.classList.remove('open-modal')
    }
}

const catalog = [
    {
        img:'https://st.depositphotos.com/1472772/2580/i/450/depositphotos_25800529-stock-photo-atom.jpg',
        name: '3D Soft Curves',
        Comment:'Esther Howard',
        description: 'Current Bid',
        price: 0.24,
    },
    
    {
        img:'https://defy.vc/wp-content/uploads/2021/12/NFTCo-Unblocked_Hero.jpg',
        name: 'The mystery of the black square',
        Comment:'Jenny Wilson',
        description: 'Current Bid',
        price: 0.82,
    },
    
    {
        img:'https://www.provincialhomeliving.com.au/media/mf_webp/jpg/media/wysiwyg/Homepage/Pantone-24-1-2.webp',
        name: 'Pink Cloud ',
      Comment:'Floyd Miles',
        description: 'Current Bid',
        price: 0.3,
    },

    {
        img:'https://ramonka.ru/wp-content/uploads/2024/01/milad-fakurian-370x247.jpg',
        name: '3D Ethereum',
      Comment:'Jane Cooper',
        description: 'Current Bid',
        price: 0.12,
    },

    {
        img:'https://cdn.skillbox.pro/academgen/blocks/about_course/xl/CuXasKUFgcxMs3T6eB2xGXeT5LlUI8901hHgVP4D.webp',
        name: '3D Soft Curves',
      Comment:'Esther Howard',
        description: 'Current Bid',
        price: 0.84,
    },

    {
        img:'https://rus-stroydom.ru/img/blueman.jpg',
        name: '3D Soft Curves',
      Comment:'Esther Howard',
        description: 'Current Bid',
        price: 1.0,
    },

    {
        img:'https://i.pinimg.com/736x/33/d9/0c/33d90c76e6783bd8313a0a595bd8ec15.jpg',
        name: 'Красная шапочка',
      Comment:'Esther Howard',
        description: 'Current Bid',
        price: 0.56,
    },

    {
        img:'https://habrastorage.org/r/w780q1/getpro/habr/upload_files/84b/6d6/84d/84b6d684d4892364f3497269542c05e9.jpg',
        name: 'Красная шапочка',
      Comment:'Esther Howard',
        description: 'Current Bid',
        price: 0.1,
    },

    {
        img:'https://intrigue.dating/wp-content/cache/thumb/2b/92322bde9cfd82b_900x600.jpg',
        name: 'Красная шапочка',
      Comment:'Esther Howard',
        description: 'Current Bid',
        price: 0.34,
    },

    {
        img:'https://images.wallpaperscraft.ru/image/single/glaz_zrachok_figury_171963_225x300.jpg',
        name: 'Красная шапочка',
      Comment:'Esther Howard',
        description: 'Current Bid',
        price: 6.0,
    }
]



const card2 = document.querySelector('.wrapper');

catalog.forEach(card => {
    card2.innerHTML += `
         <div class="card">
        <img src="${card.img}" >
        <h1>${card.name}</h1>
        <p>c${card.description}</p>
        <p>${card.Comment}</p>
        <h4>${card.price}</h4>
      </div>
    `
})