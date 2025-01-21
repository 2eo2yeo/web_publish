class Student {
    #name;
    #age;
    #address;
    constructor(name, age, address, nickName) {
        this.#name = name;
        this.#age = age; 
        this.#address = address;
        this.nickName = nickName;
    }

    get name() { return this.#name;}
    get age() { return this.#age;}
    get address() { return this.#address;}

    set name(name) { this.#name = name;}
    set age(age) { this.#age = age;}
    set address(address) { this.#address = address;}

}

const hong = new Student("홍길동", 20, "서울시 강서구", "홍홍" ) 
// 출력 : 홍길동 20 서울시 강남구 홍홍
console.log(`${hong.name}\n${hong.age}\n${hong.address}\n${hong.nickName}`);

//이름 바꿔서 출력 
hong.name = "홍길순";
console.log(`${hong.name}\n${hong.age}\n${hong.address}\n${hong.nickName}`);