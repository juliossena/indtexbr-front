export interface Menu {
    idMenu: number;
    name: string;
    icon: string;
    father?: number;
}

export interface TypeUser {
    idTypeUser: number;
    name: string;
    menus: Menu[];
}

export interface Company {
    idCompany: number;
    name: string;
    block: boolean;
    image: string;
}

export interface Area {
    idArea: number;
    name: string;
}

export interface User {
    idUser: number;
    email: string;
    name: string;
    password: string;
    idTypeUser: number;
    block: boolean;
    createdAt: Date;
    updatedAt: Date;
    idCompany: number;
    typeUser: TypeUser;
    company: Company;
    areas: Area[];
    timeStart?: string;
    timeEnd?: string;
}
