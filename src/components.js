/*
 * +===============================================
 * | Author:        Parham Alvani (parham.alvani@gmail.com)
 * |
 * | Creation Date: 21-07-2017
 * |
 * | File Name:     components.js
 * +===============================================
 */
const Random = require('random-js')

class BambooComponents {
  constructor () {
    this.channels = {
      'Bamboo/log': {},
      'Bamboo/discovery': {}
    }
  }

  addComponentSubscription (name, id, channel) {
    if (channel in this.channels) {
      if (name in this.channels[channel]) {
        this.channels[channel][name].add(id)
      } else {
        this.channels[channel][name] = new Set([id])
      }
    }
  }

  removeComponentSubscription (name, id, channel) {
    if (channel in this.channels) {
      if (name in this.channels[channel]) {
        this.channels[channel][name].delete(id)
      }
    }
  }

  pickComponents (channel) {
    let selectedIds = []
    for (let name in this.channels[channel]) {
      let selectedId = Random.pick(Random.engines.nativeMath, Array.from(this.channels[channel][name]))
      selectedIds.push(selectedId)
    }
    return selectedIds
  }

  removeComponent (name, id) {
    for (let channel in this.channels) {
      if (name in this.channels[channel]) {
        this.channels[channel][name].delete(id)
      }
    }
  }
}

module.exports = BambooComponents
