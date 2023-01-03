// let make a song program




function song() {
    let Nb = prompt("How many bottles do you want ?:")
    

    if (Nb < 1) {
        console.log("we can have bottles less than 1")
      
    }else{

    let cpt = 1
    while (Nb > 0) {
        console.log(Nb + " " + "bottles"+ " of beer")
        console.log("take " ,cpt," around",(cpt === 1 ? "it" : "them"))
        Nb-= cpt
        cpt++
    }

    }
    console.log("nothing at all !")
}


song()