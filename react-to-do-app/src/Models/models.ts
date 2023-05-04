export interface IProduct {
    id?: number
    title: string
    completed: boolean
    dateValue: string
}

export interface ITasks{
    tasks: IProduct[];
}