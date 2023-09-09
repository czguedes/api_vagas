import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: 'usuarios' })
export class UserEntity {

    @PrimaryColumn({ type: 'uuid', name: 'id' })
    idUser!: string

    @Column({ type: 'varchar', length: 100 })
    name!: string

    @Column({ type: 'varchar', length: 30, unique: true })
    username!: string

    @Column({ type: 'varchar', length: 60 })
    password!: string

    @Column({ type: 'varchar', nullable: true, length: 100, name: 'nome_empresa' })
    nomeEmpresa!: string

    @Column({ type: 'int' })
    userType!: number
}