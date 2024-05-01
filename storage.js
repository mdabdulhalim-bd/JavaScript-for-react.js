const addUserInfo = () => {

    const userId = document.getElementById("userName");
        const id = userId.value;
    const userName    = document.getElementById("userId");
        const user = userName.value;
        
   localStorage.setItem(id, user);
    userId.value = '';
    userName.value = '';
   
}