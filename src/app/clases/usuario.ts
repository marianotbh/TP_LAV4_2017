export class Usuario {
    public id: number;
    public name: string;
    public mail: string;
    public role: string;
    public password: string;
    public avatar: any;

    constructor(id: number, name: string, mail: string, role: string, password: string, avatar: any) {
        this.id = id;
        this.name = name;
        this.mail = mail;
        this.role = role;
        this.password = password;
        this.avatar = avatar;
    }
}
