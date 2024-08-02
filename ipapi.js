class ipapi{
    constructor(){
        this.api = "https://ipapi.co"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0"}
    }
    async my_ip(){
        let req=await fetch(`${this.api}/json/`,{method:"POST",headers: this.headers});
        return await req.json();
    }
    async ip_info(ip){
        let req=await fetch(`${this.api}/${ip}/json/`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {ipapi};