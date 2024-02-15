
function main(){
    for(var i =1;i<6;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}

main()

function main1(){
    for(let i =1;i<6;i++){
        setTimeout(()=>{
            console.log(i)
        },i*1000)
    }
}

main1()