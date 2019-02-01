import knex from 'knex'
import { db as config } from '@/config'

export const db = knex(config)
