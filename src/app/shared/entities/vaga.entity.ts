import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { UserEntity } from "./usuario.entity";

@Entity({ name: 'vagas' })
export class VagaEntity {

    @PrimaryColumn({ type: 'uuid', name: 'id' })
    id!: string

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

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

    @ManyToOne(() => UserEntity, (r) => r.id)
    @JoinColumn({
        name: 'id_recrutador',
        referencedColumnName: 'id'
    })
    recrutador!: UserEntity

}