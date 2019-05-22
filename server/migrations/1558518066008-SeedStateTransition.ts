import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { StateTransition } from '../entities'

const SEED = [
  {
    name: 'Seed',
    description: 'Description for Seed',
    from: 'READY',
    to: 'FINISHED',
    action: 'SAMPLE'
  }
]

export class SeedStateTransition1558518066008 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(StateTransition)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async stateTransition => {
        await repository.save({
          ...stateTransition,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(StateTransition)
    SEED.reverse().forEach(async stateTransition => {
      let record = await repository.findOne({ name: stateTransition.name })
      await repository.remove(record)
    })
  }
}
