const adSoyad = document.getElementById("adsoyad")
const sifre = document.getElementById("sifre")
const btn = document.getElementById("btn")
const basari = document.querySelector(".basari")


const loginAdSoyad = document.getElementById("loginAdsoyad")
const loginSifre = document.getElementById("loginSifre")
const btnIkı = document.getElementById("btn2")
const basariGiris = document.querySelector(".basariGiris")
   


    btn?.addEventListener("click", () =>{
        if(adSoyad.value != "" && sifre.value != 0){
            let kayit = [
                {
                    ad:adSoyad.value,
                    sifre:sifre.value
                }
            ]
            localStorage.setItem("kayitlar",JSON.stringify(kayit))
        }
        basari.textContent = "Kayıt Başarılı"
        basari.style.color = "success"
      })

    
           btnIkı?.addEventListener("click", () => {
                if(localStorage.getItem("kayitlar")){
                 let getir = JSON.parse(localStorage.getItem("kayitlar"))
                 for( let i of getir){
                    if(loginAdSoyad.value != i.ad  &&  loginSifre.value != i.sifre){
                        basariGiris.textContent = "kullanıcı bulunamadı"
                        basariGiris.classList.toggle("text-danger")
                       
                   }else{
                       loginAdSoyad.value = i.ad
                       loginSifre.value = i.sifre
                       basariGiris.textContent = "Giriş yaptınız"
                       basariGiris.style.color = "success"
                   }
                   
                 } 
                 
             }
        })
  
       

