
let iCurrentClue = document.getElementById("clueOne");
iCurrentClue.style.backgroundColor = "#569DAA";
let iCurrentSelectedID = 1;

let iClueOneCounter = 1;
let iClueTwoCounter = 1;
let iClueThreeCounter = 1;

const iClueOneMax = 5;
const iClueTwoMax = 5;
const iClueThreeMax = 5;

const iAnimationDuration = 500;

document.getElementById("keyboard-cont").addEventListener("click", (e) =>
{
    const target = e.target
    
    if (!target.classList.contains("keyboard-button")) 
    {
        return
    }
    let key = target.textContent

    if (key === "Del") 
    {
        key = "Backspace"
    } 

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
});


document.addEventListener("keyup", (e) => 
{   
    console.log(e);
    if(e.key.length === 1 && e.key.toLowerCase().match(/[a-z]/gi))
    {
        if(iCurrentSelectedID===1)
        {
            document.getElementById(iCurrentSelectedID + "-" + iClueOneCounter).innerText = e.key;
            console.log(iCurrentSelectedID + "-" + iClueOneCounter)
            if(iClueOneCounter < iClueOneMax)
            {
                iClueOneCounter++;
            }
                
        }
        else if(iCurrentSelectedID===2)
        {
            document.getElementById(iCurrentSelectedID + "-" + iClueTwoCounter).innerText = e.key;
            console.log(iCurrentSelectedID + "-" + iClueTwoCounter)
            if(iClueTwoCounter < iClueTwoMax)
            {
                iClueTwoCounter++;
            }
            
        }
        else if(iCurrentSelectedID===3)
        {
            document.getElementById(iCurrentSelectedID + "-" + iClueThreeCounter).innerText = e.key;
            console.log(iCurrentSelectedID + "-" + iClueThreeCounter);
            if (iClueThreeCounter < iClueThreeMax)
            {
                iClueThreeCounter++;
            }
        } 
    }
    else if(e.key==="Backspace")
    {
        if(iCurrentSelectedID===1 && iClueOneCounter > 0)
        {
            console.log(iCurrentSelectedID + "-" + iClueOneCounter);
            document.getElementById(iCurrentSelectedID + "-" + iClueOneCounter).innerText = " ";
            if(iClueOneCounter>1)
            {
                iClueOneCounter--;
            }
            
        }
        else if(iCurrentSelectedID===2 && iClueTwoCounter > 0)
        {
            console.log(iCurrentSelectedID + "-" + iClueTwoCounter);
            document.getElementById(iCurrentSelectedID + "-" + iClueTwoCounter).innerText = " ";
            if(iClueTwoCounter>1)
            {
                iClueTwoCounter--;
            }
        }
        else if(iCurrentSelectedID===3 && iClueThreeCounter >0)
        {
            console.log(iCurrentSelectedID + "-" + iClueThreeCounter);
            document.getElementById(iCurrentSelectedID + "-" + iClueThreeCounter).innerText = " ";
            if(iClueThreeCounter>1)
            {
                iClueThreeCounter--;
            }
        } 
    }
    else if(e.key="Enter")
    {
        console.log("IN Enter");
        for(i=1;i<=3;i++)
        {
            for(j=1;j<=iClueOneMax;j++)
            {
                document.getElementById(i + "-" + j).classList.add("animated");
                document.getElementById(i + "-" + j).style.animationDelay = '${(j * iAnimationDuration)/2}ms';
            }
        }
        setTimeout(()=>
        {
            resetAnimation();
        },3 * iAnimationDuration);
        
    }
    
});

function resetAnimation()
{
    console.log("IN REMOVE");
    for(i=1;i<=3;i++)
    {
        for(j=1;j<=iClueOneMax;j++)
        {
            document.getElementById(i + "-" + j).classList.remove("animated");
        }
    }
}

function clueOneClicked()
{
    iCurrentClue.style.backgroundColor = "white";
    iCurrentClue = document.getElementById("clueOne");
    document.getElementById("clueOne").style.backgroundColor="#569DAA";
    iCurrentSelectedID = 1;
}
function clueTwoClicked()
{
    iCurrentClue.style.backgroundColor = "white";
    iCurrentClue = document.getElementById("clueTwo");
    document.getElementById("clueTwo").style.backgroundColor="#569DAA";
    iCurrentSelectedID = 2;
}
function clueThreeClicked()
{
    iCurrentClue.style.backgroundColor = "white";
    iCurrentClue = document.getElementById("clueThree");
    document.getElementById("clueThree").style.backgroundColor="#569DAA";
    iCurrentSelectedID = 3;
}
function letterClicked()
{

}