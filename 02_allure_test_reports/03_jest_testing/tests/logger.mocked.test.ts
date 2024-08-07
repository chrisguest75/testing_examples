import { logger } from '../src/logger'

describe('logger', () => {
  it('test logger mocking and assertions', async () => {
    // ARRANGE
    logger.trace('TRACE - level message')
    logger.debug('DEBUG - level message')
    logger.info('INFO - level message')
    logger.warn('WARN - level message')
    logger.error('ERROR - level message')
    logger.fatal('FATAL - level message')

    logger.child({ extra: 'this is extra' }).trace('TRACE - level message')
    logger.child({ extra: 'this is extra' }).debug('DEBUG - level message')
    logger.child({ extra: 'this is extra' }).info('INFO - level message')
    logger.child({ extra: 'this is extra' }).warn('WARN - level message')
    logger.child({ extra: 'this is extra' }).error('ERROR - level message')
    logger.child({ extra: 'this is extra' }).fatal('FATAL - level message')

    // ACT

    // ASSERT
  })
})
