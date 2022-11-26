
// 회원 탈퇴
const secessionFrm = document.getElementById("secessionFrm");
if(secessionFrm != null){
    secessionFrm.addEventListener("submit",(e)=>{
    
        const agree = document.getElementById("agree");
        if(!agree.checked){
            alert("탈퇴를 원하신다면 약관에 동의해주세요.");
            e.preventDefault();
            return;
        }

        const memberPw = document.getElementById("memberPw");
        if(memberPw.value.trim().length == 0){
            alert("비밀번호를 입력해주세요.");
            memberPw.focus();
            e.preventDefault();
            return;
        }

        if(!confirm("정말 탈퇴하시겠습니까?")){
            alert("탈퇴가 취소되었습니다.");
            e.preventDefault();
            return;
        }
    });
}

// 비밀번호 변경
const changePwFrm = document.getElementById("changePwFrm");
if(changePwFrm != null){

    const currentPw = document.getElementById("currentPw");
    const newPw = document.getElementById("newPw");
    const newPwConfirm = document.getElementById("newPwConfirm");
    const pwConfirm = document.getElementById("pwConfirm");

    const checkpw = {
        "newPw" : false,
        "newPwConfirm" : false
    }

    changePwFrm.addEventListener("submit", (e)=>{

        if(currentPw.value.trim().length==0){
            alert("현재 비밀번호를 작성해주세요.");
            currentPw.focus();
            e.preventDefault();
            return;
        }
        if(newPw.value.trim().length==0){
            alert("새 비밀번호를 작성해주세요.");
                newPw.focus();
                e.preventDefault();
                return;
        }
        if(newPwConfirm.value.trim().length==0){
            alert("새 비밀번호 확인을 작성해주세요.");
                newPwConfirm.focus();
                e.preventDefault();
                return;
        }
        for(let key in checkpw){
            if(!checkpw[key]){
                switch(key){
                    case "newPw" : alert("새 비밀번호가 유효하지 않습니다."); break;
                    case "newPwConfirm" : alert("새 비밀번호 확인이 유효하지 않습니다."); break;
                }
                document.getElementById(key).focus();
                e.preventDefault();
                return;
            }
        }
    })
    
    currentPw.addEventListener("input",()=>{
        if(currentPw.value.trim().length==0){
            alert("현재 비밀번호를 작성해주세요.");
            currentPw.focus();
            e.preventDefault();
            return;
        }
        

    })

    

    pwConfirm.classList.remove("confirm", "error");
    
    newPw.addEventListener("input",()=>{

            const regEx = /^[\w!@#-_]{8,20}$/;
            if(regEx.test(newPw.value)){
                checkpw.newPw = true;
    
                if(newPwConfirm.value.trim().length == 0){
                    pwConfirm.innerText="유효한 비밀번호입니다.";
                    pwConfirm.classList.add("confirm");
                    pwConfirm.classList.remove("error");
                    e.preventDefault();
                    return;
                }else{
                    if(newPw.value == newPwConfirm.value){
                        checkpw.newPwConfirm=true;
                        pwConfirm.innerText="비밀번호가 일치합니다.";
                        pwConfirm.classList.add("confirm");
                        pwConfirm.classList.remove("error");
                    }else{
                        checkpw.newPwConfirm=false;
                        pwConfirm.innerText="비밀번호가 일치하지 않습니다.";
                        pwConfirm.classList.remove("confirm");
                        pwConfirm.classList.add("error");
                    }
                }
            }else{
                pwConfirm.innerText="유효하지 않는 비밀번호입니다.";
                pwConfirm.classList.add("error");
                pwConfirm.classList.remove("confirm");
                checkpw.newPw=false;
            }
    });
        
    newPwConfirm.addEventListener("input", ()=>{

        if(checkpw.newPw){

            if(newPw.value == newPwConfirm.value){
                pwConfirm.innerText="비밀번호가 일치합니다.";
                pwConfirm.classList.remove("error");
                pwConfirm.classList.add("confirm");
                checkpw.newPwConfirm=true;
            }else{
                pwConfirm.innerText="비밀번호가 일치하지 않습니다.";
                pwConfirm.classList.add("error");
                pwConfirm.classList.remove("confirm");
                checkpw.newPwConfirm=false;
            }
        }else{
            checkpw.newPwConfirm=false;
        }
    })
};



// 프로필 이미지 수정
const profile = document.getElementById("profile");

if(profile != null){

    const profileImg = document.getElementById("profile-image");
    const inputImg = document.getElementById("image-input");
    const deleteBtn = document.getElementById("deleteBtn");
    
    let initCheck; // 이미지 업로드 O : true / 기본 이미지 : false
    let deleteCheck = -1; // -1 : 초기값(취소) / 0 : 프로필 삭제 / 1 : 이미지 업로드
    
    const originalImg = profileImg.getAttribute("src");
    const defaultImg = "/resources/images/member/profile/defaultProfile.png";

    if(profileImg.getAttribute(src) == defaultImg){
        initCheck = false;
    }else{
        initCheck = true;
    }

    inputImg.addEventListener("change", e=>{
        if(e.target.files[0] != undefined){ // 선택된 파일 o
            const reader = new FileReader(); // 파일을 읽음
            reader.readAsDataURL(e.target.files[0]); // 지정된 파일 읽기 시작
            reader.onload = event =>{
                profileImg.setAttribute("src", event.target.result);
                deleteCheck = 1;
            }
        }else{ // 사진 업로드 취소 버튼 클릭
                profileImg.setAttribute("src", originalImg);
                deleteCheck = -1;
            }
    });

    deleteBtn.addEventListener("click", ()=>{
        profileImg.setAttribute("src", defaultImg);
        profileImg.value="";
        deleteCheck = 0;
    });

    function profileValidate(){
        
    }
}