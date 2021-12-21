function convertToRoman(num) {
    let zton=['I','II','III','IV','V','VI','VII','VIII','IX']
    let ttot=['X','XX','XXX','XL','L','LX','LXX','LXXX','XC']
    let htot=['C','CC','CCC','CD','D','DC','DCC','DCCC','CM']
    let mtto=['M','MM','MMM','MMMM','MMMMM','MMMMMM','MMMMMMM','MMMMMMMM','MMMMMMMMM']
    let k=String(num).split('');
    let roman=[];
    if(k.length==4){
        roman=[mtto[k[0]-1],htot[k[1]-1],ttot[k[2]-1],zton[k[3]-1]];
    }
    else if(k.length==3){
        roman=[htot[k[0]-1],ttot[k[1]-1],zton[k[2]-1]];
    }
    else if(k.length==2){
        roman=[ttot[k[0]-1],zton[k[1]-1]];
    }
    else {
        roman=[zton[k[0]-1]];
    }

    let newrom=roman.filter((e)=>e!==undefined).join('');
    return newrom
   }
   
   console.log(convertToRoman(686))