export interface BodyCreateMember {
    email: string;
    name: string;
    password?: string;
    areas: number[];
    admin: boolean;
    timeStart?: string;
    timeEnd?: string;
}

export interface BodyImportUserList {
    file?: File;
}

export interface BodyUserLogin {
    email: string;
    password: string;
}

export interface BodyInsertArea {
    idArea?: number;
    name: string;
}
