const tabNames = ['Zoning','Utilities','Services','Town Hall','Finances','Specialization','Settings']

function initGame() {
    //HTML Generation
    //Zoning Tab
    for(let i = 0; i < tabNames.length; i++) {
        addHTML('navBar',`<button id="navButton${i}">${tabNames[i]}</button>`)
        DOMCacheGetOrSet(`navButton${i}`).addEventListener('click',() => switchTab(i))
    }
    DOMCacheGetOrSet(`residentialZoneInfoText`).innerText = `\t($)($$)($$$)\n`+`(LD)\t0\t0\t0\n`+`(MD)\t0\t0\t0\n`+`(HD)\t0\t0\t0`
    DOMCacheGetOrSet(`commercialZoneInfoText`).innerText = `\t($)($$)($$$)\n`+`(LD)\t0\t0\t0\n`+`(MD)\t0\t0\t0\n`+`(HD)\t0\t0\t0`
    DOMCacheGetOrSet(`industrialZoneInfoText`).innerText = `\t(LT)(MT)(HT)\n`+`(LD)\t0\t0\t0\n`+`(MD)\t0\t0\t0\n`+`(HD)\t0\t0\t0`
    //Utilities Tab
    //Services Tab
    //Town Hall Tab
    //Finances Tab
    //Specialization Tab
    //Advising Tab
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        });
    } 
    //Settings Tab
    DOMCacheGetOrSet('saveButton').addEventListener('click', () => save())
    DOMCacheGetOrSet('exportButton').addEventListener('click',() => exportSave())
    DOMCacheGetOrSet('importButton').addEventListener('click', () => createInput('Import Save Data',"",importSave))
    DOMCacheGetOrSet('deleteButton').addEventListener('click', () => deleteSave())
}

function updateGame() {

}

function calculateOfflineProgress() {

}

function switchTab(id) {
    for(let i = 0; i < tabNames.length; i++) {
        DOMCacheGetOrSet(`${(tabNames[i].replace(/\s+/g,'')).toLowerCase()}Tab`).style.display = id === i ? 'block' : 'none'
        DOMCacheGetOrSet(`navButton${i}`).classList = id === i ? 'selected' : 'normal'
    }
    data.currentTab = id
}

//Start Up
window.onload = function() {
    load()
    initGame()
    calculateOfflineProgress()
    switchTab(data.currentTab)

    DOMCacheGetOrSet('currentVersionText').innerText = `Current Version: ${getDefaultData().currentVersion}`
}
//50ms Updates
window.setInterval(() => updateGame(), 50);
//30s Auto Save
window.setInterval(() => save(),30000)