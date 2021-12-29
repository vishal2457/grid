//type for props of the main gridprops
export type gridProps = {
    header: any
    data: any[]
    getFilterValue?:() => void 
}

export type headerObject = {
    field: string
    title: string
    filter?: {
        type: 'text'|'select',
        bindValue?: string
        bindName?: string
    }
    customElement?: HTMLElement
    tdClass?:string
    formatter?: () => void
}