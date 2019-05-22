import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'

@Entity('state-definitions')
@Index('ix_state-definition_0', (stateDefinition: StateDefinition) => [stateDefinition.domain, stateDefinition.name], {
  unique: true
})
export class StateDefinition extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text', {
    nullable: true
  })
  description: string

  @Column('text')
  initialState: string
}
