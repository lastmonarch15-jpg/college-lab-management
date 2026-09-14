let pcs =
JSON.parse(localStorage.getItem("pcs")) || [];

function showPCs(){
    let list =
    document.getElementById("pcList");

    list.innerHTML="";

    pcs.forEach(pc=>{
        list.innerHTML += `<li>${pc}</li>`;
    });
}

function addPC(){
    let pc =
    document.getElementById("pc").value;

    pcs.push(pc);

    localStorage.setItem(
        "pcs",
        JSON.stringify(pcs)
    );

    showPCs();
}

showPCs();
