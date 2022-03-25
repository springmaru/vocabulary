
let words_1 = {"adage": {"ko-meaning" : "속담", "en-meaning" : "a proverb, wise saying", "synonym" : "maxim", "antonym" : ""},
"bonanza": {"ko-meaning" : "노다지", "en-meaning" : "a rich mass of ore in a mine; asdfujiasdjfoihsdofi", "synonyms" : "windfall", "antonym" : ""}
}

let key_1 = Object.keys(words_1)


function initiate(words,key_list){
    for (let i = 0; i++; i<=12){
        console.log("sibal");
    
        document.getElementById("voca{0}_komeaning".format(str(i+1))).innerHTML = words[key_list[0]]["ko-meaning"]
    }
    //document.getElementById("voca +_komeaning").innerHTML = words_1[key_1[0]]["ko-meaning"];
}


initiate(words_1, key_1)
