"use strict"

var pasaulioSalys = [
    {
      saliesPavadinimas: "Ispanija",
      valstybesPlotas: 505990, 
      gyventojuSkaicius: 47.45 
    },
    {
      saliesPavadinimas: "Italija",
      valstybesPlotas: 301230, 
      gyventojuSkaicius: 60.32 
    },
    {
      saliesPavadinimas: "Graikija",
      valstybesPlotas: 131957, 
      gyventojuSkaicius: 10.68 
    },
    {
      saliesPavadinimas: "Indija",
      valstybesPlotas: 3287263, 
      gyventojuSkaicius: 1.38
    },
    {
      saliesPavadinimas: "Prancūzija",
      valstybesPlotas: 551695, 
      gyventojuSkaicius: 67.41 
    }    
]
        // I variantas
// function salys(saliesPavadinimas, valstybesPlotas, gyventojuSkaicius){
//    var plotasVienamGyventojui = valstybesPlotas / gyventojuSkaicius 

//    console.log(`Šalis: ${saliesPavadinimas}, joje gyvena ${gyventojuSkaicius}mln. gyventojų. Valstybės plotas: ${valstybesPlotas}km2, plotas, tenkantis vienam gyventojui: ${plotasVienamGyventojui.toFixed(2)}m2`)
// }

// for(var x of pasaulioSalys){
//     salys(x.saliesPavadinimas, x.valstybesPlotas, x.gyventojuSkaicius)
// }
        // II variantas
    // for(var i = 0; i < pasaulioSalys.length; i++){
    // var valstybesPlotas = Number(valstybesPlotas)
    // var gyventojuSkaicius = Number(gyventojuSkaicius)
    // var plotasVienamGyventojui = [i].valstybesPlotas / [i].gyventojuSkaicius

    // console.log(`Šalis: ${[i].saliesPavadinimas}, joje gyvena ${[i]. gyventojuSkaicius}mln. gyventojų. Valstybės plotas: ${[i]. valstybesPlotas}km2, plotas, tenkantis vienam gyventojui: ${plotasVienamGyventojui.toFixed(2)}m2`)
    // console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")       
// }
            // III variantas
    for(var x of pasaulioSalys){
    // var valstybesPlotas = Number(valstybesPlotas)
    // var gyventojuSkaicius = Number(gyventojuSkaicius)
    var plotasVienamGyventojui = x.valstybesPlotas / x.gyventojuSkaicius

    console.log(`Šalis: ${x.saliesPavadinimas}, joje gyvena ${x. gyventojuSkaicius}mln. gyventojų. Valstybės plotas: ${x. valstybesPlotas}km2, plotas, tenkantis vienam gyventojui: ${plotasVienamGyventojui.toFixed(2)}m2`)
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")       
}
