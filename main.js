console.log("loaded!")
const levelup = require('levelup');
const leveljs = require('level-js');
const db = levelup(leveljs('testdb',{valueEncoding: 'json'}));

const countScore = document.getElementById("count")

db.get("count",(err,value)=>{
    countScore.innerText = (value || 0);
})

function counter(){
    db.get("count",{asBuffer:false},(err,value)=>{
        let count = value || 0;
        count = parseInt(count);
        db.put("count",count+1,err=>{
            if(err){
                console.error(err);
            }else{
                console.log(`Count: ${count}`);
                countScore.innerText = count
            }
        })
    })
}

const someButton = document.getElementById("some-button");
someButton.addEventListener("click",counter);
