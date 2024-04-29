export class Github {
    constructor(){
        this.client_id = "fb54e4bf5bd85e71fbc8";
        this.client_secret = "7c67cc131e982b9bb8927a7f23e5ed0cf77c5bd1"
        this.per_page = 10;
        this.sort = "asc"
    }
    //api'den kullanıcı bilgilerini alma
    async fetchUserData(username){
        //parametre olarak gelen kullanıcı adına göre istek attık

        const profileRes = await fetch(
            `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        )
        //kullanıcı repolarını almak için istek attık
        const repoRes = await fetch(
            `https://api.github.com/users/${username}/repos?cliend_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}&sort=${this.sort}`
          );


        //api'den aldıgımız cevabı json yapısına cevirdik
        const data= await profileRes.json();
        const repos = await repoRes.json()
        

        //fonksiyonun cagrıldıgı yere bilgileri gönderme
        return { data , repos }
    }
}