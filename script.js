const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-content'),
    smooth: true
});


var songs =[
    {pic:'/css photo/card1img.png', cardTitle:'Top-50 Global', cardInfo:'Your daily update of most track'},
    {pic:'/css photo/card2img.png', cardTitle:'Top-50 Global', cardInfo:'Your daily update of most track'},
    {pic:'/css photo/card3img.png', cardTitle:'Top-50 Global', cardInfo:'Your daily update of most track'},
    {pic:'/css photo/card4img.png', cardTitle:'Top-50 Global', cardInfo:'Your daily update of most track'},
    {pic:'/css photo/card5img.png', cardTitle:'Top-50 Global', cardInfo:'Your daily update of most track'},
    {pic:'/css photo/card1img.png', cardTitle:'Top-50 Global', cardInfo:'Your daily update of most track'},
    {pic:'/css photo/card2img.png', cardTitle:'Top-50 Global', cardInfo:'Your daily update of most track'}
]

function cardCreater(){
    var clutter ="";
    songs.forEach(function(obj){
        clutter+=`<div class="card">
        <img src="${obj.pic}" alt="NA">
        <p class="card-title">${obj.cardTitle}</p>
        <p class="card-info">${obj.cardInfo}</p>
    </div>`
 
})
document.querySelector('.card-container').innerHTML=clutter;
}
cardCreater();