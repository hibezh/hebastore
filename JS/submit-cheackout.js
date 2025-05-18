const scriptURL = "https://script.google.com/macros/s/AKfycbygbbdOh3DaGNRRNyQgTlbEiGcQ1UDtGt7b-BOHg1Umz274lD96ACSG8wmzu47Cz-19/exec";

let form = document.getElementById('form-contact');

form.addEventListener("submit",(e)=>{

    e.preventDefault()
    fetch(scriptURL,{
        method: "POST",
        body: new FormData(form)
    })
    .then((response=>{
        setTimeout(()=>{
            alert("تم ارسال النموذج بنجاح سيتم اعادة تحميل الصفحة خلال ثوان")
            localStorage.removeItem("cart")
            window.location.reload()
        },1000)
    }))
    
    .catch((error)=> console.error("error!", error.message))




})