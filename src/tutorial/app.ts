// Type Aliases

type UserType = {
    username: string;
    age: number;
    phone?:string;

}

let betterFunc = (user:UserType) =>{
    console.log(user.username)
}

type myFunc = (a: number, b:string) => void

let write: myFunc = (num,str) =>{
    console.log(num + " times " + str)
}