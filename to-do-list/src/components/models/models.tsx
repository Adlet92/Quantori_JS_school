export interface PostItemProps{
    id: number,
    title: string,
    completed: boolean,
    remove?: (id: number) => void
}
