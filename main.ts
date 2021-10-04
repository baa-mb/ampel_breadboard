function aus () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    basic.showString("R")
    aus()
    pins.analogWritePin(AnalogPin.P0, 512)
    basic.pause(2000)
    basic.showString("Y")
    pins.analogWritePin(AnalogPin.P1, 512)
    basic.pause(2000)
    basic.showString("G")
    aus()
    pins.analogWritePin(AnalogPin.P2, 512)
    basic.pause(2000)
})
