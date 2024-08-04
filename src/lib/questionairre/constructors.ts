export class Choice {
  text: string
  next?: Question

  constructor(text: string, next?: Question) {
    this.text = text
    this.next = next
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
