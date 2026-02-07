function hideAll(){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
}

function showDashboard(){hideAll();dashboardPage.classList.add("active");}
function showIssues(){hideAll();issuesPage.classList.add("active");}
function showHistory(){hideAll();historyPage.classList.add("active");loadHistory();}
function logout(){hideAll();registerPage.classList.add("active");}

function submitIssue(){
    const issue={
        name:name.value,
        contact:contact.value,
        type:issueType.value,
        location:location.value,
        date:new Date().toLocaleString()
    };

    let data=JSON.parse(localStorage.getItem("issues"))||[];
    data.push(issue);
    localStorage.setItem("issues",JSON.stringify(data));

    hideAll();
    successPage.classList.add("active");
}

function loadHistory(){
    historyList.innerHTML="";
    let data=JSON.parse(localStorage.getItem("issues"))||[];

    if(data.length===0){
        historyList.innerHTML="<p>No issues yet</p>";
        return;
    }

    data.forEach((i,idx)=>{
        historyList.innerHTML+=`
        <div>
            <b>${idx+1}. ${i.type}</b><br>
            📍 ${i.location}<br>
            📞 ${i.contact}<br>
            🕒 ${i.date}
        </div>`;
    });
}

/* Hadapsar Locations */
const areas=[
    "Magarpatta","Amanora","Gadital","Sasane Nagar",
    "SP Infocity","Hadapsar Gaon","Kalepadal","Fursungi"
];

location.addEventListener("focus",()=>{
    suggestions.innerHTML="";
    areas.forEach(a=>{
        let d=document.createElement("div");
        d.innerText=a;
        d.onclick=()=>{location.value=a;suggestions.innerHTML="";}
        suggestions.appendChild(d);
    });
});
