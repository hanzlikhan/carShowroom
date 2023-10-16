import inquirer,{Answers} from "inquirer";
interface usertype {
    username:string,
    pin:number
}
var users:usertype[] = [{username:"hanzla",pin:1234}]
let currentuser:string;


function login_page() {
    console.log("Hanzla Gormani car Showroom");
    
    const ans:Promise<Answers> = inquirer.prompt([{
        name: "selected",
        type: "list",
        choices:['SIGN IN','SIGN UP','EXIT'],
        message: "IF YOU CREATED AN ACCOUNT SELECT LOGIN ELSE CREATE NEW ACCOUNT"
        
    }])
    ans.then((ans)=>{
        if(ans.selected == "SIGN IN"){
        login();
        }
        else if(ans.selected== "SIGN UP"){
            signup();
        }
        else{
            console.log("thanx for visiting our showroom");
            
        }
    })
}
function login() {
    console.log(" SIGN IN PAGE");
    const ans:Promise<Answers> = inquirer.prompt([{
        name: "usersname",
        type: "string",
        message: "enter your user name:"
    },{
        name: "Pin",
        type: "number",
        message: "enter your password:"
    }]) 
ans.then((ans)=>{
users.map((user)=>{
    if(user.username==ans.usersname  && user.pin==ans.Pin){
        currentuser = user.username;
        console.log("successfully Login");
       home();
        }
        else{
            console.log("invalid username or password");
            console.log("please try again later");
            login_page();
        }
})
})   
}
function signup() {
    console.log("create your new account");
    const ans:Promise<Answers> = inquirer.prompt([{
        name: "usersname",
        type: "string",
        message: "enter your username:"
    },{
        name: "Pin",
        type: "number",
        message: "enter your password:"
    }])
    ans.then((ans)=>{
        
            if(!ans.usersname){
                console.log("invalid username");
                
            }
            else{
                const newuser = {username:ans.usersname,pin:ans.Pin}
                users.push(newuser)
                currentuser = ans.usersname
                console.log("Account has been created successfully");
                console.log("please login your account");
                login();
                
            }
        
    })
    .catch((err)=>{
        console.log("error",err);
        
    })
    
    
}
login_page();
function home() {
    console.log("Welcome to Hanzla Gormani Car Showroom");
    
    const ans:Promise<Answers> = inquirer.prompt([{
        name:"select",
        type: "list",
        choices:["yes", 'NO'],
        message: "Do you want to buy a car , yes or No"
    }])
    ans.then((ans)=>{
        if(ans.select=="yes"){
            showroom();
        }
        else{
            home();
        }
    })
    .catch((err)=>{
        console.log('error',err);
    })    
}
function showroom() {
    console.log("welcome to showroom");
    const ans: Promise<Answers>= inquirer.prompt([{
        name: "select",
        type: "list",
        choices: ["civic","grandi","fortuner","gli","tucson","revo","city","Wagonr","cultus"],
        message: "select a car which you want to buy"
    }])
    ans.then((ans)=>{
        switch (ans.select) {
            case "civic":
                civic();   
                break;
            case "grandi":
                grandi();
                break;
                case 'fortuner':
                    fortuner();
                    break;
                    case "gli":
                        gli();
                        break;
                        case 'tucson':
                            tucson();
                            break;
                            case 'revo':
                                revo();
                                break;
                                case "city":
                                    city();
                                    break;
                                    case "wagonr":
                                        wagonr();
                                        break;
                                        case "cultus":
                                            cultus();
                                            break;
            default:
                console.log("invalid choice !");
                
                break;
        }
    })
    .catch((err)=>{
        console.log("error",err);       
    })    
}
function civic() {
   var color:string = "red"
   var model:number = 2020;
   var engine:string = "1800cc"
   var price:number = 7500000;
    console.log(`color:${color},model:${model},engine:${engine},price:${price}`);

    const ans:Promise<Answers> = inquirer.prompt([{
        name:"select",
        type: 'list',
        choices: ["yes","NO"],
        message: "do you want to buy this car, yes or No"
    }])
    ans.then((ans)=>{
        if(ans.select=="yes"){
            console.log("CONGRATULATION, THIS IS YOUR CAR");
            console.log("do you want to buy other car");
            showroom(); 
        }
        else{
            console.log("thanx for visiting this car");
         showroom();   
        }
    })
    .catch((err)=>{
        console.log("error",err);
    })
    
}
function grandi() {
   var color:string = "white"
   var model:number = 2018;
   var engine:string = "1800cc"
   var price:number = 6900000;
    console.log(`color:${color},model:${model},engine:${engine},price:${price}`);
    const ans:Promise<Answers> = inquirer.prompt([{
        name:"select",
        type: 'list',
        choices: ["yes","NO"],
        message: "do you want to buy this car, yes or No"
    }])
    ans.then((ans)=>{
        if(ans.select=="yes"){
            console.log("CONGRATULATION, THIS IS YOUR CAR");
            console.log("do you want to buy other car");
            showroom(); 
        }
        else{
            console.log("thanx for visiting this car");
         showroom();   
        }
    })
    .catch((err)=>{
        console.log("error",err);
    })
}
function fortuner() {
   var color:string = "white"
   var model:number = 2021;
   var engine:string = "2700cc"
   var price:number = 156500000;
    console.log(`color:${color},model:${model},engine:${engine},price:${price}`);
    const ans:Promise<Answers> = inquirer.prompt([{
        name:"select",
        type: 'list',
        choices: ["yes","NO"],
        message: "do you want to buy this car, yes or No"
    }])
    ans.then((ans)=>{
        if(ans.select=="yes"){
            console.log("CONGRATULATION, THIS IS YOUR CAR");
            console.log("do you want to buy other car");
            showroom(); 
        }
        else{
            console.log("thanx for visiting this car");
         showroom();   
        }
    })
    .catch((err)=>{
        console.log("error",err);
    })
}
function gli() {
   var color:string = "white"
   var model:number = 2020;
   var engine:string = "1200cc"
   var price:number = 4500000;
    console.log(`color:${color},model:${model},engine:${engine},price:${price}`);
    const ans:Promise<Answers> = inquirer.prompt([{
        name:"select",
        type: 'list',
        choices: ["yes","NO"],
        message: "do you want to buy this car, yes or No"
    }])
    ans.then((ans)=>{
        if(ans.select=="yes"){
            console.log("CONGRATULATION, THIS IS YOUR CAR");
            console.log("do you want to buy other car");
            showroom(); 
        }
        else{
            console.log("thanx for visiting this car");
         showroom();   
        }
    })
    .catch((err)=>{
        console.log("error",err);
    })
}
function tucson() {
   var color:string = "red"
   var model:number = 2021;
   var engine:string = "1600cc"
   var price:number = 6500000;
    console.log(`color:${color},model:${model},engine:${engine},price:${price}`);
    const ans:Promise<Answers> = inquirer.prompt([{
        name:"select",
        type: 'list',
        choices: ["yes","NO"],
        message: "do you want to buy this car, yes or No"
    }])
    ans.then((ans)=>{
        if(ans.select=="yes"){
            console.log("CONGRATULATION, THIS IS YOUR CAR");
            console.log("do you want to buy other car");
            showroom(); 
        }
        else{
            console.log("thanx for visiting this car");
         showroom();   
        }
    })
    .catch((err)=>{
        console.log("error",err);
    })
}
function revo() {
   var color:string = "black"
   var model:number = 2019;
   var engine:string = "3000cc"
   var price:number = 9000000;
    console.log(`color:${color},model:${model},engine:${engine},price:${price}`);
    const ans:Promise<Answers> = inquirer.prompt([{
        name:"select",
        type: 'list',
        choices: ["yes","NO"],
        message: "do you want to buy this car, yes or No"
    }])
    ans.then((ans)=>{
        if(ans.select=="yes"){
            console.log("CONGRATULATION, THIS IS YOUR CAR");
            console.log("do you want to buy other car");
            showroom(); 
        }
        else{
            console.log("thanx for visiting this car");
         showroom();   
        }
    })
    .catch((err)=>{
        console.log("error",err);
    })
}
function city() {
   var color:string = "white"
   var model:number = 2019;
   var engine:string = "1300cc"
   var price:number = 4000000;
    console.log(`color:${color},model:${model},engine:${engine},price:${price}`);
    const ans:Promise<Answers> = inquirer.prompt([{
        name:"select",
        type: 'list',
        choices: ["yes","NO"],
        message: "do you want to buy this car, yes or No"
    }])
    ans.then((ans)=>{
        if(ans.select=="yes"){
            console.log("CONGRATULATION, THIS IS YOUR CAR");
            console.log("do you want to buy other car");
            showroom(); 
        }
        else{
            console.log("thanx for visiting this car");
         showroom();   
        }
    })
    .catch((err)=>{
        console.log("error",err);
    })
}
function wagonr() {
   var color:string = "white"
   var model:number = 2019;
   var engine:string = "900cc"
   var price:number = 2500000;
    console.log(`color:${color},model:${model},engine:${engine},price:${price}`);
    const ans:Promise<Answers> = inquirer.prompt([{
        name:"select",
        type: 'list',
        choices: ["yes","NO"],
        message: "do you want to buy this car, yes or No"
    }])
    ans.then((ans)=>{
        if(ans.select=="yes"){
            console.log("CONGRATULATION, THIS IS YOUR CAR");
            console.log("do you want to buy other car");
            showroom(); 
        }
        else{
            console.log("thanx for visiting this car");
         showroom();   
        }
    })
    .catch((err)=>{
        console.log("error",err);
    })
}
function cultus() {
   var color:string = "silver"
   var model:number = 2020;
   var engine:string = "1000cc"
   var price:number = 2800000;
    console.log(`color:${color},model:${model},engine:${engine},price:${price}`);
    const ans:Promise<Answers> = inquirer.prompt([{
        name:"select",
        type: 'list',
        choices: ["yes","NO"],
        message: "do you want to buy this car, yes or No"
    }])
    ans.then((ans)=>{
        if(ans.select=="yes"){
            console.log("CONGRATULATION, THIS IS YOUR CAR");
            console.log("do you want to buy other car");
            showroom(); 
        }
        else{
            console.log("thanx for visiting this car");
         showroom();   
        }
    })
    .catch((err)=>{
        console.log("error",err);
    })
}
