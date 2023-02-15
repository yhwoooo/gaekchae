const changeFocus1 = ()=> {
    const phone1 = document.getElementById("phone1").value 
    if(phone1.length===3){
        document.getElementById("phone2").focus()
    }
}
const changeFocus2 = ()=> {
    const phone2 = document.getElementById("phone2").value 
    if(phone2.length===4){
        document.getElementById("phone3").focus()
    }
}
const changeFocus3 = ()=> {
    const phone1 = document.getElementById("phone1").value
    const phone2 = document.getElementById("phone2").value
    const phone3 = document.getElementById("phone3").value
    if(phone1.length===3 && phone2.length===4 && phone3.length===4){
        document.getElementById("token__button").style = "background-color: #0068FF; color: #FFFFFF; cursor: pointer;"
        document.getElementById("token__button").removeAttribute("disabled")
    }
}
function getToken(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("token").innerText = token

    document.getElementById("token__button").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("token__button").setAttribute("disabled", "true")
    document.getElementById("token__timer__confirm__button").style="background-color: #0068FF; color: #FFFFFF; cursor: pointer;"
    document.getElementById("token__timer__confirm__button").removeAttribute("disabled")
    getTokenTimer()
}

let interval;
function getTokenTimer(){
    let timer = 180
    interval = setInterval(() => {
        if(timer >= 0){
            const minutes = Math.floor(timer / 60)
            const seconds = timer % 60

            document.getElementById("token__timer").innerText = minutes + ":" + String(seconds).padStart(2, "0")
            timer -= 1
        } else {
            document.getElementById("token").innerText = "000000"
            document.getElementById("token__button").style = ""
            document.getElementById("token__button").setAttribute("disabled", "true")

            document.getElementById("token__timer").innerText = "3:00"
            document.getElementById("token__timer__confirm__button").style = ""
            document.getElementById("token__timer__confirm__button").setAttribute("disabled", "true")

            clearInterval(interval)
        }
    }, 1000)
}
function getTokenTimerConfirm(){
    clearInterval(interval)
    document.getElementById("token__timer__confirm__button").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("token__timer__confirm__button").setAttribute("disabled","true")
    document.getElementById("token__timer__confirm__button").innerText = "인증완료"
    alert("인증이 완료되었습니다.")

    document.getElementById("signup__button").style = "background-color: #FFFFFF; color: #0068FF; border: 1px solid #0068FF ;cursor: pointer;"
    document.getElementById("signup__button").removeAttribute("disabled")
}

function clickButton1(){
    if(document.getElementById("category1").style === "color: #FFFFFF;"){
        document.getElementById("category1").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category1").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton2(){
    if(document.getElementById("category2").style === "color: #FFFFFF;"){
        document.getElementById("category2").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category2").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton3(){
    if(document.getElementById("category3").style === "color: #FFFFFF;"){
        document.getElementById("category3").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category3").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton4(){
    if(document.getElementById("category4").style === "color: #FFFFFF;"){
        document.getElementById("category4").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category4").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton5(){
    if(document.getElementById("category5").style === "color: #FFFFFF;"){
        document.getElementById("category5").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category5").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton6(){
    if(document.getElementById("category6").style === "color: #FFFFFF;"){
        document.getElementById("category6").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category6").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton7(){
    if(document.getElementById("category7").style === "color: #FFFFFF;"){
        document.getElementById("category7").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category7").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton8(){
    if(document.getElementById("category8").style === "color: #FFFFFF;"){
        document.getElementById("category8").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category8").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton9(){
    if(document.getElementById("category9").style === "color: #FFFFFF;"){
        document.getElementById("category9").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category9").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton10(){
    if(document.getElementById("category10").style === "color: #FFFFFF;"){
        document.getElementById("category10").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category10").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton11(){
    if(document.getElementById("category11").style === "color: #FFFFFF;"){
        document.getElementById("category11").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category11").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton12(){
    if(document.getElementById("category12").style === "color: #FFFFFF;"){
        document.getElementById("category12").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category12").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}
function clickButton13(){
    if(document.getElementById("category13").style === "color: #FFFFFF;"){
        document.getElementById("category13").style = "color: #797979; border: 1px solid #D2D2D2;"
    } else {
        document.getElementById("category13").style = "background-color: #2051C2; color: #FFFFFF;"
    }
    return false;
}

function signup(){
    const email = document.getElementById("email").value
    const writer = document.getElementById("writer").value
    const password1 = document.getElementById("password1").value
    const password2 = document.getElementById("password2").value
    const location = document.getElementById("location").value
    const genderWoman = document.getElementById("gender__woman").checked
    const genderMan = document.getElementById("gender__man").checked
    const nickname = document.getElementById("nickname").value
    const yy = document.getElementById("yy").value
    const mm = document.getElementById("mm").value
    const dd = document.getElementById("dd").value

    let isValid = true
    if(email.includes("@") === false) {
        document.getElementById("error__email").innerText = "이메일이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__email").innerText = ""
    }

    if(writer === "") {
        document.getElementById("error__writer").innerText = "이름이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__writer").innerText = ""
    }

    if(password1 === ""){
        document.getElementById("error__password1").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__password1").innerText = ""
    }

    if(password2 === ""){
        document.getElementById("error__password2").innerText = "비밀번호를 입력해 주세요."
        isValid = false
    } else {
        document.getElementById("error__password2").innerText = ""
    }

    if(password1 !== password2) {
        document.getElementById("error__password1").innerText = "비밀번호가 일치하지 않습니다."
        document.getElementById("error__password2").innerText = "비밀번호가 일치하지 않습니다."
        isValid = false
    }

    if(nickname === ""){
        document.getElementById("error__nickname").innerText = "닉네임이 올바르지 않습니다."
        isValid = false
    } else {
        document.getElementById("error__nickname").innerText = ""
    }

    if(genderWoman === false && genderMan === false){
        document.getElementById("error__gender").innerText = "성별을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__gender").innerText = ""
    }

    if(location !== "종로구" && location !== "중구" && location !== "성동구" && location !== "용산구" && location !== "성북구" && location !== "동대문구" && location !== "광진구" && 
    location !== "중랑구" && location !== "노원구" && location !== "도봉구" && location !== "강북구" && location !== "은평구" && location !== "서대문구" && location !== "마포구" && 
    location !== "강서구" && location !== "양천구" && location !== "구로구" && location !== "영등포구" && location !== "금천구" && location !== "동작구" && location !== "관악구" && 
    location !== "서초구" && location !== "강남구" && location !== "송파구" && location !== "강동구"){
        document.getElementById("error__location").innerText = "지역을 선택해 주세요."
        isValid = false
    } else {
        document.getElementById("error__location").innerText = ""
    }

    if(isValid === true){
        alert("코드캠프 가입을 축하합니다.")
        document.signup__form.submit()
        
    }
}