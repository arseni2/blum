export type LoginResponseType = {
    token: {
        access: string
        refresh: string
        user: UserType
    }
    justCreated: boolean
}

export type UserType = {
    id: { id: string },
    username: string
}