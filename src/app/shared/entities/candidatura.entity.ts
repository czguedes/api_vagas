import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { UserEntity } from "./usuario.entity";
import { VagaEntity } from "./vaga.entity";

@Entity({ name: 'usuario_vaga' })
export class CandidaturaEntity {

    @PrimaryColumn({ type: 'uuid', name: 'id' })
    id!: string

    @Column({ type: 'timestamp', name: 'data_aplicacao' })
    dataAplicacao!: Date

    @Column({ default: false })
    sucesso!: boolean

    @ManyToOne(() => VagaEntity, (v) => v.idVaga)
    @JoinColumn({
        name: 'id_vaga',
        referencedColumnName: 'id'
    })
    idVaga!: VagaEntity

    @ManyToOne(() => UserEntity, (u) => u.idUser)
    @JoinColumn({
        name: 'id_candidato',
        referencedColumnName: 'id'
    })
    idCandidato!: UserEntity

}