import { User } from '@things-factory/auth-base'
import { Domain } from '@things-factory/shell'
import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('state-transitions')
@Index('ix_state-transition_0', (stateTransition: StateTransition) => [stateTransition.domain, stateTransition.name], {
  unique: true
})
@Index('ix_state-transition_1', (stateTransition: StateTransition) => [
  stateTransition.domain,
  stateTransition.from,
  stateTransition.action
])
export class StateTransition {
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

  @ManyToOne(type => User, {
    nullable: true
  })
  creator: User

  @ManyToOne(type => User, {
    nullable: true
  })
  updater: User

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
