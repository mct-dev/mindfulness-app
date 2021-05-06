import { v4 as uuid } from 'uuid'

export class Goal {
  _id: string
  _title: string
  _createdDate: Date

  constructor (title: string) {
    this._id = uuid()
    this._title = title
    this._createdDate = new Date()
  }

  get name (): string {
    return this._title
  }
}
