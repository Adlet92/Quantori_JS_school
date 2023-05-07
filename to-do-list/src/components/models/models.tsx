export interface PostItemProps{
    id?: number,
    title: string,
    dateValue: string,
    completed: boolean,
    remove?: (id: number) => void
}
