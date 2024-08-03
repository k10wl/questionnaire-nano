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
    const next = this.next.clone()
    next.prev = prev
    this.next = next
  }
}

export class Question {
  text: string
  options: Choice[]
  prev?: Question

  clone(): Question {
    return new Question(this.text, this.options)
  }

  constructor(text: string, options: Choice[]) {
    this.text = text
    this.options = options
    this.options.forEach((option) => option.setPrev(this))
  }
}
