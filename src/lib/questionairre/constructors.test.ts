import assert from 'node:assert'
import { describe, it } from 'node:test'

import { Choice, Question } from './constructors'

describe('should link to correct ancestor if has mulitple routes', () => {
  const destination = new Question('destination', [new Choice('destination')])
  const route1 = new Question('route1', [new Choice('route1', destination)])
  const route2 = new Question('route2', [new Choice('route2', destination)])

  it('route1 -> destination.previous should be linked to route1', () => {
    assert.equal(route1.options[0].next?.text, 'destination')
    assert.equal(route1.options[0].next?.prev?.text, 'route1')
  })

  it('route2 -> destination.previous should be linked to route2', () => {
    assert.equal(route2.options[0].next?.text, 'destination')
    assert.equal(route2.options[0].next?.prev?.text, 'route2')
  })
})
