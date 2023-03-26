export interface INoute {
    _id: string
    title: string
    date: string
    description: string
}

export interface INouteTemplate {
    id: string
    title: string
    date: string
    description: string
}

export interface INouteDialogData {
    noute: INouteTemplate
    titleDialog: string
}