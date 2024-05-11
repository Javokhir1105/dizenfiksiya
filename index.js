const kirish = document.querySelector(".nav__button")
const header2 = document.querySelector(".header2")
const x = document.querySelector(".hidden")

kirish.addEventListener("click", (e) =>{
    header2.style.display = "block"
})

x.addEventListener("click", (e) =>{
    header2.style.display = "none"
})

function changelanguage(lang){
    location.hash = lang;
    location.reload();
}
let language = {
    rus: {
        welcome: "Служба дезинфекции",
        infor:"Наша компания, работающая уже много лет, нами довольна.",
        button1:"связь",
        h1:"Наши преимущества",
        skilh2:"Быстрое обслуживание",
        skillp:"Наша компания, работающая уже много лет, нами довольна.",
        skilh3:"Наши опытные специалисты",
        skilp1:"Наша компания, работающая уже много лет, нами довольна.",
        skilh4:"Когда вам будет удобно",
        skilp2:"Наша компания, работающая уже много лет, нами довольна.",
        menuh1:"Считай клапан и вредных насекомых больше нет!!!",
        menup:"Наша компания, работающая уже много лет, нами довольна."
    },
    ozb:{
       welcome:"Dizinfeksiya xizmati",
       infor: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       button1:"bog'lanish",
       h1:"Afzalliklarimiz",
       skilh2:"Tezda xizmat ko’rsatish",
       skillp:"Bizning ko’p yillardan beri o'z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       skilh3:"Yetuk mutahasislarimiz",
       skilp1:"Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       skilh4:"Sizga maqul vaqtda",
       skilp2:"Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       menuh1:"Klapa va zararli hashorot endi yo’q deb hisoblang !!!",
       menup:"Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun"
    }
}

if(window.location.hash == "#rus"){
    h1content.textContent = language.rus.welcome;
    pcontent.textContent = language.rus.infor;
    button1.textContent = language.rus.button1;
    skilh1.textContent = language.rus.h1;
    skilh2.textContent = language.rus.skilh2;
    skillp.textContent = language.rus.skillp;
    skilh3.textContent = language.rus.skilh3;
    skilp1.textContent = language.rus.skilp1;    
    skilh4.textContent = language.rus.skilh4;
    skilp2.textContent = language.rus.skilp2;
    menuh1.textContent = language.rus.menuh1;
    menup.textContent = language.rus.menup;
}
else{
    h1content.textContent = language.ozb.welcome;
    pcontent.textContent = language.ozb.infor;
    button1.textContent = language.ozb.button1;
    skilh2.textContent = language.ozb.skilh2;
    skilh1.textContent = language.ozb.h1;
    skillp.textContent = language.ozb.skillp;
    skilh3.textContent = language.ozb.skilh3;
    skilp1.textContent = language.ozb.skilp1;    
    skilh4.textContent = language.ozb.skilh4;
    skilp2.textContent = language.ozb.skilp2;
    menuh1.textContent = language.ozb.menuh1;
    menup.textContent = language.ozb.menup;
}
