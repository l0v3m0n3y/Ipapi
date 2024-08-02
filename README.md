# Ipapi
JavaScript library for ipapi.co
# main
```js
async function main(){
    const {ipapi} = require('./ipapi');
    const ip= new ipapi();
    let req=await ip.my_ip()
    console.log(req)
}
main()
```
