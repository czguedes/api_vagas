import { randomUUID } from "crypto"
import { VagaDTO } from "../shared/types"
import { RecrutadorUser } from "./Recrutador.model"


export class Vaga {
    private _id: string
    private _descricao: string
    private _nomeEmpresa: string
    private _dataLimite: Date
    private _vagaAtiva: boolean
    private _numCandidatos?: number | undefined
    private _recrutador: RecrutadorUser

    constructor(dados: VagaDTO) {
        this._id = randomUUID()
        this._vagaAtiva = true
        this._dataLimite = dados.dataLimite
        this._descricao = dados.descricao
        this._nomeEmpresa = dados.nomeEmpresa
        this._numCandidatos = dados.numCandidatos
        this._recrutador = dados.recrutador
    }

    toJSON() {
        return {
            idVaga: this._id,
            descricao: this._descricao,
            nomeEmpresa: this._nomeEmpresa,
            dataLimite: this._dataLimite,
            vagaAtiva: this._vagaAtiva,
            recrutador: this._recrutador.toJSON(),
            numCandidatos: this._numCandidatos
        }
    }


}