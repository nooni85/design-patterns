interface Fan {
    turnOn(): void;
    turnOff(): void;
}

class SamsungFan implements Fan{
    turnOn(): void {
        console.log("Turn on Samsung Fan");
    }
    turnOff(): void {
        console.log("Turn off Samsung Fan");
    }
}

class LgFan implements Fan {
    turnOn(): void {
        console.log("Turn off LG Fan");
    }
    turnOff(): void {
        console.log("Turn off LG Fan");
    }

}

interface Device {
    turnOn(): void;
    turnOff(): void;
}

class RemoteDevice implements Device {
    private fan: Fan;

    constructor(fan: Fan) {
        this.fan = fan;
    }

    turnOn(): void {
        console.log("Use remote control");
        this.fan.turnOn();
    }
    turnOff(): void {
        console.log("Use remote control");
        this.fan.turnOff();
    }
}

const device1 = new RemoteDevice(new SamsungFan());
device1.turnOn();
device1.turnOff();

const device2 = new RemoteDevice(new LgFan());
device2.turnOn();
device2.turnOff();