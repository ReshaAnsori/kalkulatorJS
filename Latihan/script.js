function Input(param)
{
    let mDisp = document.getElementById('main-display').value;
    if(mDisp == '0'){
        if(param === '.')
            document.getElementById('main-display').value += param;
        else
            document.getElementById('main-display').value = param;
    }
    else{
        if(mDisp.length < 11){
            document.getElementById('main-display').value += param;
        }
        else
            alert("max character : 11");
    }
}
function Remove()
{
    let mDisp = document.getElementById('main-display').value;
    let tamp = [];
    for(let i=0; i<mDisp.length; i++){
        tamp[i] = [mDisp[i]];
    }
    tamp.pop();
    mDisp = "";
    for(let i=0; i<tamp.length; i++){
        mDisp += tamp[i];
    }
    if(mDisp != "")
        document.getElementById('main-display').value = mDisp;
    else
        document.getElementById('main-display').value = 0;
}
function Clear()
{
    document.getElementById('main-display').value = 0;
    document.getElementById('history-display').value = 0;
    angka = [null];
}
function Convert(val)
{
    let cek = 0;
    for(let i=0; i<val.length; i++)
    {
        if(val[i] == '.')
        {
            cek++;
        }
    }
    if(cek > 0)
        val = parseFloat(val);
    else
        val = parseInt(val);
    return val;
}
function Operation(param){  
    let val = document.getElementById("main-display").value;
    val = parseFloat(val);
    let result;
    if(param == '%')
        result = val/100;
    else if(param == 'akar')
        result = Math.sqrt(val);
    else if(param == 'x2')
        result = val*val;
    else if(param == '1/x')
        result = 1/val;
    document.getElementById('history-display').value = result;
    document.getElementById("main-display").value = result;
}
function PlusMinus()
{
    let val = document.getElementById("main-display").value;
    val = Convert(val);
    if(val < 0)
        val *= -1;
    else
        val = -val;
    document.getElementById("main-display").value = val;
}
function Result()
{
    let val = document.getElementById('main-display').value;
    val = Convert(val);
    console.log(" sama dengan = "+ Number.isInteger(val));
    angka[2] = val;
    let hisDis = document.getElementById('history-display').value;
    hisDis = hisDis+val+'=';
    document.getElementById('history-display').value = hisDis;
    document.getElementById('main-display').value = CekAngka();
}
let angka = [];
function CekAngka(){
    // alert("fx-CekAngka = "+angka);
    if(angka.length > 2){
        if(angka[2] === 0 || angka[0] === 0){
            if(angka[1] == '*')
                angka[0] = angka[0] * angka[2];
            else if(angka[1] == '/')
                angka[0] = angka[0] / angka[2];
        }
        else if(angka[1] == '+')
            angka[0] = angka[0] + angka[2];
        else if(angka[1] == '-')
            angka[0] = angka[0] - angka[2];
        else if(angka[1] == '*')
            angka[0] = angka[0] * angka[2];
        else if(angka[1] == '/')
            angka[0] = angka[0] / angka[2];

        angka.pop();
        angka.pop();
    }   
    return angka[0]
}

function Ope2(param)
{
    let newNum = CekAngka();
    // console.log("cek newNum =  "+newNum+" => "+Number.isInteger(newNum));
    let val = document.getElementById('main-display').value;
    val = Convert(val);
    // console.log("cek val =  "+val+" => "+Number.isInteger(val));
    if(newNum == null || newNum == 0){
        angka[0] = val;
    }else{
        angka[2] = val;
        CekAngka();
    }
    angka[1] = param;
    document.getElementById("history-display").value = angka[0] + param;
    document.getElementById("main-display").value = 0;
}