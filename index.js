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
        herobutton:"связь",
        h1:"Наши преимущества",
        skilh2:"Быстрое обслуживание",
        skillp:"Наша компания, работающая уже много лет, нами довольна.",
        skilh3:"Наши опытные специалисты",
        skilp1:"Наша компания, работающая уже много лет, нами довольна.",
        skilh4:"Когда вам будет удобно",
        skilp2:"Наша компания, работающая уже много лет, нами довольна.",
        menuh1:"Считай клапан и вредных насекомых больше нет!!!",
        menup:"Наша компания, работающая уже много лет, нами довольна.",
        navl1:"услуга",
        navl2:"о нас",
        navl3:"Чзв",
        navl4:"контакт",
        cenh1:"услуга",
        cenh2:"Базовые концепты",
        cenh3:"Оьрта",
        cenh4:"высокий",
        cenp:"Эти уроки помогут вам получить более высокий ранг.",
        cenp1:"С теоретическими знаниями",
        cenp2:"16 уроков",
        cenp3:"Теоретические и практические знания",
        cenp4:"23 уроков",
        cenp5:"Практические знания",
        cenp6:"16 уроков",
        reah2:"Многие люди доверяют нам на протяжении многих лет",
        endh2:"Оставьте свою информацию",
        endp:"Многие люди доверяют нам на протяжении многих лет",
    },
    ozb:{
       welcome:"Dizinfeksiya xizmati",
       infor: "Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       herobutton:"bog'lanish",
       h1:"Afzalliklarimiz",
       skilh2:"Tezda xizmat ko’rsatish",
       skillp:"Bizning ko’p yillardan beri o'z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       skilh3:"Yetuk mutahasislarimiz",
       skilp1:"Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       skilh4:"Sizga maqul vaqtda",
       skilp2:"Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       menuh1:"Klapa va zararli hashorot endi yo’q deb hisoblang !!!",
       menup:"Bizning ko’p yillardan beri o’z faoliyatini olib kelayotgan kompaniyamiz Mijozlarimiz bizdan mamnun",
       navl1:"service",
       navl2:"about",
       navl3:"FAQ",
       navl4:"contact",
       cenh1:"service",
       cenh2:"Boshlang'ich tushunchalar",
       cenh3:"O'rta",
       cenh4:"yuqori",
       cenp:"Bu darsliklari sizning yuqori daraja olishingizga yordam beradi",
       cenp1:"Nazariy bilimlar",
       cenp2:"16 dars",
       cenp3:"Nazariy va amaliy bilimlar",
       cenp4:"23 dars",
       cenp5:"Amaliy bilimlar",
       cenp6:"16 dars",
       reah2:"Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar talaygina",
       endh2:"Malumotlaringizni qoldiring",
       endp:"Bizga ko'p yillardan beri kompaniyamizga ishonch bildirganlar talaygina",
    }
}

if(window.location.hash == "#rus"){
    h1content.textContent = language.rus.welcome;
    pcontent.textContent = language.rus.infor;
    herobutton.textContent = language.rus.herobutton;
    skilh1.textContent = language.rus.h1;
    skilh2.textContent = language.rus.skilh2;
    skillp.textContent = language.rus.skillp;
    skilh3.textContent = language.rus.skilh3;
    skilp1.textContent = language.rus.skilp1;    
    skilh4.textContent = language.rus.skilh4;
    skilp2.textContent = language.rus.skilp2;
    menuh1.textContent = language.rus.menuh1;
    menup.textContent = language.rus.menup;
    navl1.textContent = language.rus.navl1;
    navl2.textContent = language.rus.navl2;
    navl3.textContent = language.rus.navl3;
    navl4.textContent = language.rus.navl4;
    cenh1.textContent = language.rus.cenh1;
    cenh2.textContent = language.rus.cenh2;
    cenh3.textContent = language.rus.cenh3;
    cenh4.textContent = language.rus.cenh4;
    cenp.textContent = language.rus.cenp;
    cenp1.textContent = language.rus.cenp1;
    cenp2.textContent = language.rus.cenp2;
    cenp3.textContent = language.rus.cenp3;
    cenp4.textContent = language.rus.cenp4;
    cenp5.textContent = language.rus.cenp5;
    cenp6.textContent = language.rus.cenp6;
    reah2.textContent = language.rus.reah2;
    endh2.textContent = language.rus.endh2;
    endp.textContent = language.rus.endp;
    herobutton1.textContent = language.rus.herobutton;
    herobutton2.textContent = language.rus.herobutton;
}
else{
    h1content.textContent = language.ozb.welcome;
    pcontent.textContent = language.ozb.infor;
    herobutton.textContent = language.ozb.herobutton;
    skilh2.textContent = language.ozb.skilh2;
    skilh1.textContent = language.ozb.h1;
    skillp.textContent = language.ozb.skillp;
    skilh3.textContent = language.ozb.skilh3;
    skilp1.textContent = language.ozb.skilp1;    
    skilh4.textContent = language.ozb.skilh4;
    skilp2.textContent = language.ozb.skilp2;
    menuh1.textContent = language.ozb.menuh1;
    menup.textContent = language.ozb.menup;
    navl1.textContent = language.ozb.navl1;
    navl2.textContent = language.ozb.navl2;
    navl3.textContent = language.ozb.navl3;
    navl4.textContent = language.ozb.navl4;
    cenh1.textContent = language.ozb.cenh1;
    cenh2.textContent = language.ozb.cenh2;
    cenh3.textContent = language.ozb.cenh3;
    cenh4.textContent = language.ozb.cenh4;
    cenp.textContent = language.ozb.cenp;
    cenp1.textContent = language.ozb.cenp1;
    cenp2.textContent = language.ozb.cenp2;
    cenp3.textContent = language.ozb.cenp3;
    cenp4.textContent = language.ozb.cenp4;
    cenp5.textContent = language.ozb.cenp5;
    cenp6.textContent = language.ozb.cenp6;
    reah2.textContent = language.ozb.reah2;
    endh2.textContent = language.ozb.endh2;
    endp.textContent = language.ozb.endp;
    herobutton1.textContent = language.ozb.herobutton;
    herobutton2.textContent = language.ozb.herobutton;
}

const form = document.getElementById('telegramform');
form.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message =  `ism ${name} \ntelefon ${phone}`;
    sendtotelegram(message)
})
function sendtotelegram(message){
    const token ="6757145376:AAHSqi6W4lT7vqtPXltbUDLl7drJytYTylo";
    const chat_id = 2055583199;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const params = {
        chat_id: chat_id,
        text: message
    }
fetch(url,{
    method:'POST',
    headers: {
        'Content-Type':'application/json',},
    body: JSON.stringify(params)
})
.then((response)=>response.json())
.then((res)=>{
    alert("Yuborildi")
})
.catch((error)=>{
    console.log("Error",error);
})
}

