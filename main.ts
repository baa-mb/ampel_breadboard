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
    basic.pause(4000)
    basic.showString("Y")
    pins.analogWritePin(AnalogPin.P1, 512)
    basic.pause(1000)
    basic.showString("G")
    aus()
    pins.analogWritePin(AnalogPin.P2, 512)
    basic.pause(4000)
    for (let Index = 0; Index <= 3; Index++) {
        pins.analogWritePin(AnalogPin.P2, 0)
        basic.pause(400)
        pins.analogWritePin(AnalogPin.P2, 512)
        basic.pause(400)
    }
    basic.showString("Y")
    aus()
    pins.analogWritePin(AnalogPin.P1, 512)
    basic.pause(2000)
})
