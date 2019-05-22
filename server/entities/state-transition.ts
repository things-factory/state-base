import { Entity, Index, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { Domain, DomainBaseEntity } from '@things-factory/shell'

@Entity('state-transitions')
@Index('ix_state-transition_0', (stateTransition: StateTransition) => [stateTransition.domain, stateTransition.name], {
  unique: true
})
@Index('ix_state-transition_1', (stateTransition: StateTransition) => [
  stateTransition.domain,
  stateTransition.from,
  stateTransition.action
])
export class StateTransition extends DomainBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text')
  from: string

  @Column('text')
  to: string

  @Column('text')
  action: string
}
