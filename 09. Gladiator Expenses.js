function gladiatorExpenses(lostFights,helmetPrice,swordPrice,shieldPrice,armorPrice) {



    let brokenHelmet = 0;
    let brokenSword = 0;
    let brokenShield = 0;
    let brokenArmor = 0;


    for (let i = 1; i <= lostFights; i++) {

        if (i % 2 == 0) {
            brokenHelmet++;
        } 
         if (i % 3 == 0){
            brokenSword++;
        }
         if (i % 2 == 0 && i % 3 == 0) {
            brokenShield++;
        }
    }

        brokenArmor = Math.floor(brokenShield / 2);

     let sum = (brokenHelmet * helmetPrice) + (brokenArmor * armorPrice) + (brokenShield * shieldPrice) + (brokenSword * swordPrice); 

    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);


}
gladiatorExpenses(7,2,3,4,5)