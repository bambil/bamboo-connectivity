/*
 * +===============================================
 * | Author:        Parham Alvani (parham.alvani@gmail.com)
 * |
 * | Creation Date: 28-06-2017
 * |
 * | File Name:     message.js
 * +===============================================
 */

class Message {
  static version () {
    return '2.2'
  }

  constructor (hash, thingId, name, data) {
    this.hash = hash
    this.name = name
    this.data = data
  }

  toJSON () {
    return JSON.stringify({
      version: this.version(),
      hash: this.hash,
      name: this.name,
      data: this.data
    })
  }

  static fromJSON (payload) {
    let p = JSON.parse(payload)
    console.log(p)
    if (p.version !== Message.version()) {
      return null
    }
    return new Message(p.hash, p.name, p.data)
  }
}

module.exports = Message
