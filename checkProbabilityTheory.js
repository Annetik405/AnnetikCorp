function checkProbabilityTheory(count){
    let chetnie = 0;
    let nechetnie = 0;

    for (let i = 0; i< count; i++){
     let randomNumber = Math.round(Math.random()*900)+100;; // naiti functiu random number
       console.log(randomNumber);
        if (randomNumber % 2 === 0) {
            chetnie++;
        } else {
            nechetnie++;
        }
    }
    let total = chetnie + nechetnie;
    let chetniePercentage = (chetnie / total) * 100;
    let nechetniePercentage = (nechetnie / total) * 100;

    console.log("nechetnie % " + nechetniePercentage , "chetnie % " +  chetniePercentage , "и общее количество " + total);
}
checkProbabilityTheory(10);