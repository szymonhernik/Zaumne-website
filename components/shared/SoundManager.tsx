import { Howl } from 'howler'

class SoundManager {
  sound: Howl // Add the 'sound' property

  constructor() {
    this.sound = new Howl({
      src: ['./zaumne-click.mp3'],
      preload: true,
    })
  }

  play() {
    this.sound.play()
  }
}

const soundManagerInstance = new SoundManager()
export default soundManagerInstance
