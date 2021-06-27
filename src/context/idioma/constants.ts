import { IdiomasEnum } from "../../models/IdiomasEnum";

export interface IdiomaState {
    idioma: IdiomasEnum;
}

export const IDIOMA_INITIAL_STATE: IdiomaState = {
    idioma: IdiomasEnum.Portugues
}