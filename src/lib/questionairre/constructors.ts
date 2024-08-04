export class Choice {
  text: string
  next?: Question
  meta?: Record<string, unknown>

  constructor({
    text,
    next,
    meta
  }: {
    text: string
    next?: Question
    meta?: Record<string, any>
  }) {
    this.text = text
    this.next = next
    this.meta = meta
  }

  setPrev(prev: Question) {
    if (!this.next) {
      return
    }
    if (this.next.prev) {
      const next = this.next.shallowCopy()
      this.next = next
    }
    this.next.prev = prev
  }
}

export class Question {
  text: string
  description?: string
  options: Choice[]
  prev?: Question
  special?: boolean

  shallowCopy(): Question {
    return new Question({
      text: this.text,
      description: this.description,
      options: this.options,
      prev: this.prev,
      special: this.special
    })
  }

  getText(arg?: Record<string, string>): string {
    if (!arg || typeof arg !== 'object') {
      return this.text
    }
    let text = this.text
    const arbitrary = text.match(/{([A-z]+)}/gm)
    arbitrary?.forEach((val) => {
      const key = val.match(/[A-z]+/gm)
      if (!key || !(key[0] in arg)) {
        return
      }
      text = text.replace(val, arg[key[0]])
    })
    return text.trim()
  }

  constructor({
    text,
    description,
    options,
    prev,
    special
  }: {
    text: string
    description?: string
    options: Choice[]
    prev?: Question
    special?: boolean
  }) {
    this.text = text
    this.description = description
    this.prev = prev
    this.special = special
    this.options = options
    this.options.forEach((option) => option.setPrev(this))
  }
}
