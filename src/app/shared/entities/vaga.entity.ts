import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./usuario.entity";

@Entity({ name: 'vagas' })
export class VagaEntity {

    @PrimaryColumn({ type: 'uuid', name: 'id' })
    idVaga!: string

    @Column({ type: 'text' })
    descricao!: string

    @Column({ type: 'varchar', length: 100, name: 'nome_empresa' })
    nomeEmpresa!: string

    @Column({ type: 'timestamp', name: 'data_limite' })
    dataLimite!: Date

    @Column({ type: 'boolean', name: 'vaga_ativa', default: true })
    vagaAtiva!: boolean

    @Column({ type: 'int', name: 'num_candidatos', nullable: true })
    numCandidatos!: number

    @ManyToOne(() => UserEntity, (r) => r.idUser)
    @JoinColumn({
        name: 'id_recrutador',
        referencedColumnName: 'id'
    })
    recrutador!: UserEntity
}