type ToBePersisted<T extends {id?: string}> = Omit<T, 'id'>

export default ToBePersisted