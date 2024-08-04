import assert from 'node:assert'
import { describe, it } from 'node:test'

import { Choice, Question } from './constructors'

describe('should link to correct ancestor if has mulitple routes', () => {
  const destination = new Question({
    text: 'destination',
    options: [new Choice({ text: 'destination' })]
  })
  const route1 = new Question({
    text: 'route1',
    options: [new Choice({ text: 'route1', next: destination })]
  })
  const route2 = new Question({
    text: 'route2',
    options: [new Choice({ text: 'route2', next: destination })]
  })

  it('route1 -> destination.previous should be linked to route1', () => {
    assert.equal(route1.options[0].next?.text, 'destination')
    assert.equal(route1.options[0].next?.prev?.text, 'route1')
  })

  it('route2 -> destination.previous should be linked to route2', () => {
    assert.equal(route2.options[0].next?.text, 'destination')
    assert.equal(route2.options[0].next?.prev?.text, 'route2')
  })
})

describe('ability to render dynamic text', () => {
  const subject1 = new Question({ text: 'test {subject}', options: [] })
  it('should render dynamic value', () => {
    assert.equal(subject1.getText({ subject: 'case' }), 'test case')
  })
  const subject2 = new Question({
    text: 'test {subject} {another}',
    options: []
  })
  it('should render dynamic value', () => {
    assert.equal(
      subject2.getText({ subject: 'case', another: 'test' }),
      'test case test'
    )
  })
})
