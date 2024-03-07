input.onButtonPressed(Button.A, function () {
    wuKong.setLightMode(wuKong.LightMode.BREATH)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, -50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, -50)
    basic.pause(350)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 210)
    wuKong.stopAllMotor()
    rainwater = false
})
input.onButtonPressed(Button.B, function () {
    wuKong.setLightMode(wuKong.LightMode.OFF)
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 360)
    basic.pause(500)
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
    wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
    basic.pause(350)
    wuKong.stopAllMotor()
    rainwater = true
})
let rainwater = false
basic.showIcon(IconNames.Ghost)
basic.pause(2000)
basic.showString("Hello! I am Smart Airer.")
basic.showIcon(IconNames.Ghost)
basic.pause(5000)
rainwater = false
basic.forever(function () {
    if (Environment.ReadWaterLevel(AnalogPin.P1) > 10) {
        basic.showNumber(100)
        if (rainwater == false) {
            wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, 360)
            basic.pause(500)
            wuKong.setMotorSpeed(wuKong.MotorList.M1, 50)
            wuKong.setMotorSpeed(wuKong.MotorList.M2, 50)
            basic.pause(350)
            wuKong.stopAllMotor()
            rainwater = true
        }
    }
    if (Environment.ReadWaterLevel(AnalogPin.P1) < 10) {
        if (rainwater == true) {
            rainwater = false
        }
    }
})
