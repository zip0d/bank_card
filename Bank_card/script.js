let bank = document.querySelector('.bank')
let number = document.querySelector('.number')
let name = document.querySelector('.name')
let date = document.querySelector('.date')
let CVV = document.querySelector('.CVV')
let paymentPaym = document.querySelector('.payment')
let front = document.querySelector('.front')
let back = document.querySelector('.back')
let card = document.querySelector('.card')

let Card_bank = document.querySelector('.Card_bank')
let Card_number = document.querySelector('.Card_number')
let Card_CVV = document.querySelector('.Card_CVV')
let Card_name = document.querySelector('.Card_name')
let Card_date = document.querySelector('.Card_date')
let Card_type = document.querySelector('.Card_type')
let cards = document.querySelector('.cards')
let cardElements;

let bcg

bank.addEventListener("input", (e) => {
    Card_bank.textContent = e.target.value
    bcg = e.target.value
    switch(bcg){
        case "Сбер":
            bcg = "https://phonoteka.org/uploads/posts/2022-09/1663700003_19-phonoteka-org-p-zeleno-sinii-fon-krasivo-20.jpg"
            logo = "https://static.tildacdn.com/tild3834-3863-4434-b139-303965623164/sbr0.jpg"
            break;
            
        case "ВТБ":
            bcg = "https://phonoteka.org/uploads/posts/2022-09/1663656562_32-phonoteka-org-p-sine-belii-fon-vkontakte-37.png"
            logo = "https://papik.pro/uploads/posts/2021-11/1636093286_13-papik-pro-p-vtb-logotip-foto-13.png"
                break;
        case "Tinkoff":
            bcg = "https://catherineasquithgallery.com/uploads/posts/2021-02/1613119765_78-p-fon-cherno-zheltii-gradient-107.png"
            logo = "https://www.stenka24.ru/wp-content/uploads/2019/12/tinkoff-logo.png"
                break;
        case "QIWI":
            bcg = "https://catherineasquithgallery.com/uploads/posts/2021-02/1613073450_135-p-cherno-oranzhevii-fon-na-telefon-161.png"
            logo = "https://e7.pngegg.com/pngimages/28/92/png-clipart-qiwi-wallet-one-service-money-wallets-company-orange.png"
            break;
        case "Alpha":
            bcg = "https://catherineasquithgallery.com/uploads/posts/2021-02/1612926567_186-p-fon-abstrakt-krasnii-224.jpg"
            logo = "https://fastly.4sqi.net/img/general/600x600/73584641_GFyQBnvtq6jTLEqFpnhTDAtKeDi2f38I434KbKKuXGE.png"
            break;
            

    }
    front.style.backgroundImage = `url(${bcg})`
    back.style.backgroundImage = `url(${bcg})`
    Card_bank.style.backgroundImage = `url(${logo})`
})

let bcgPaym
paymentPaym.addEventListener("input", (e) => {
    bcgPaym = e.target.value
    switch(bcgPaym){
        case "VISA":
            bcgPaym = "https://www.freepnglogos.com/uploads/visa-logo-png-image-4.png"
                break;
        case "Mastercard":
            bcgPaym = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/MasterCard_1979_logo.svg/1548px-MasterCard_1979_logo.svg.png?20210606064737"
                break;
        case "Union":
            bcgPaym = "https://pngimage.net/wp-content/uploads/2018/06/union-pay-logo-png-1.png"
            break
        case "Мир":
            bcgPaym = "https://markandmary.ru/upload/images1/mir.svg"
            break
        case "Wise":
            bcgPaym = "https://www.ftassociation.org/wp-content/uploads/2021/02/member_logos_wise.png"
            break
        
    }
    Card_type.style.backgroundImage = `url(${bcgPaym})`
})

number.addEventListener("input", (e) => {
    Card_number.textContent = e.target.value
})

name.addEventListener("input", (e) => {
    Card_name.textContent = e.target.value.toUpperCase()
})

date.addEventListener("input", (e) => {
    Card_date.textContent = e.target.value
}) 

CVV.addEventListener("input", (e) => {
    Card_CVV.textContent = e.target.value
})

form = document.querySelector(".Card_Info")

form.addEventListener("reset", ()=>{
    front.style.backgroundImage = ''
    back.style.backgroundImage = ''
    Card_bank.style.backgroundImage = ''
    Card_bank.textContent = ''
    Card_date.textContent = ''
    Card_name.textContent = ''
    Card_CVV.textContent = ''
    Card_type.textContent = ''
    Card_number.textContent = ''
})


form.addEventListener('submit', e => {
    e.preventDefault()
    let arr = []
    for(let i = 0; i < form.elements.length; i++){
        let el = form.elements[i].value
        arr.push(el)
    }
    console.log(arr)
    cards.innerHTML += `
    <div class="card" style="background-image: url(${bcg});">
    <div class="Card_bank" style="background-image: url(${logo});"></div>
    <div class="Card_number">${arr[1]}</div>
    <div class="Card_name">${arr[2]}</div>
    <div class="Card_date">${arr[3]}</div>
    <div class="Card_CVV">${arr[4]}</div>
    <div class="Card_type"  style="background-image: url(${bcgPaym})"></div>
    </div>
    `

    Card_number.textContent = e.target.value
    Card_name.textContent = e.target.value
    Card_date.textContent = e.target.value
    Card_type.textContent = e.target.value
    Card_CVV.textContent = e.target.value
    card.style.backgroundImage = `none`
    Card_bank.style.backgroundImage = `none`
})
