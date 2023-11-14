export interface IAuth {
    access_token: string
}
export interface IAuthDecoded {
    exp: number,
    firstName: string,
    lastName: string,
    email: string,
    roles: string[],
    id: number,
    iat: number
}

