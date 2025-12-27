// 🌙 Tema
document.getElementById("themeToggle").onclick = () => {
document.body.classList.toggle("dark");
};

// 👤 İsim
function saveName(){
const name=document.getElementById("nameInput").value;
localStorage.setItem("userName",name);
document.getElementById("welcome").innerText="Hoş geldin "+name;
}
if(localStorage.getItem("userName")){
document.getElementById("welcome").innerText=
"Hoş geldin "+localStorage.getItem("userName");
}

// 👁️ Sayaç
let count=localStorage.getItem("counter")||0;
count++;
localStorage.setItem("counter",count);
document.getElementById("counter").innerText=count;

// 🧮 Karbon Hesabı
function calculateCarbon(){
const km=document.getElementById("km").value*0.21*365;
const elec=document.getElementById("electric").value*0.43*12;
const total=(km+elec).toFixed(2);
const trees=Math.ceil(total/22);

document.getElementById("carbonResult").innerText=
`Yıllık CO₂: ${total} kg | Dengelenmesi için ${trees} ağaç gerekir`;

drawChart(km,elec);
}

// 📊 Grafik
function drawChart(km,elec){
const c=document.getElementById("chart");
const ctx=c.getContext("2d");
ctx.clearRect(0,0,300,200);
ctx.fillStyle="green";
ctx.fillRect(50,200-km/10,50,km/10);
ctx.fillStyle="blue";
ctx.fillRect(150,200-elec/10,50,elec/10);
}

// 🗺 Harita
const cities=[
{name:"İstanbul",lat:41,lon:29,carbon:120},
{name:"Ankara",lat:39.9,lon:32.8,carbon:90},
{name:"İzmir",lat:38.4,lon:27.1,carbon:80},
{name:"Adana",lat:37,lon:35.3,carbon:70},
{name:"Bursa",lat:40.2,lon:29.1,carbon:75}
];

const today=new Date().getDate();
const city=cities[today%cities.length];

const map=L.map("map").setView([39,35],6);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

cities.forEach(c=>{
L.marker([c.lat,c.lon])
.addTo(map)
.bindPopup(`${c.name}<br>Karbon: ${c.carbon} Mt`);
});

document.getElementById("cityInfo").innerText=
`Bugün öne çıkan şehir: ${city.name}`;
