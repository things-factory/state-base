import { MigrationInterface, QueryRunner, getRepository } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { StateDefinition } from '../entities'

const SEED = [
  {
    name: 'Seed',
    description: 'Description for Seed',
    initialState: 'INIT'
  }
]

export class SeedStateDefinition1558518726970 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(StateDefinition)
    const domainRepository = getRepository(Domain)
    const domain = await domainRepository.findOne({
      name: 'SYSTEM'
    })

    try {
      SEED.forEach(async stateDefinition => {
        await repository.save({
          ...stateDefinition,
          domain
        })
      })
    } catch (e) {
      console.error(e)
    }
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    const repository = getRepository(StateDefinition)
    SEED.reverse().forEach(async stateDefinition => {
      let record = await repository.findOne({ name: stateDefinition.name })
      await repository.remove(record)
    })
  }
}
