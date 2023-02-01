let myLeads = [];
let oldLeads = [];
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage);
if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads)
}

function render(leads)
{let listItems ="";
for(let i=0; i<leads.length; i++){
    // console.log(myLeads[i]);
    // ulEl.innerHTML += "<li>"+ myLeads[i] + "</li>"

    // listItems += "<li><a target='_blank' href='"+ myLeads[i]+"'>"+ myLeads[i] + "</a></li>"
    listItems += 
    `<li>
    <a target='_blank' href='${leads[i]}'>
    ${leads[i]}
    </a>
    </li>`;
    
    ulEl.innerHTML = listItems;

    // ulEl.innerHTML += "<li>"+ myLeads[i] + "</li>"

/*  // another way to do upper code 👆
    const li = document.createElement("li")
    li.textContent = myLeads[i]
    ulEl.append(li) */
}
}

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    // console.log(localStorage.getItem("myLeads"));
    
    
    })

tabBtn.addEventListener("click", function () {
    // console.log(tabs[0].url);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      console.log(tabs);
  
      myLeads.push(tabs[0].url);
      
      localStorage.setItem("myLeads", JSON.stringify(myLeads));
      render(myLeads);
    });
  });

deleteBtn.addEventListener("dblclick",function(){
    localStorage.clear()
    myLeads =[]
    render(myLeads)
    // console.log("doubled click");
    });





