class Product {
    public use(): string {
        return "Power Off";
    }
}

class PowerSocket {
    public socket(): string {
        return "This socket provides 110V electric power.";
    }
}

class Adapter extends Product {
    private powerSocket: PowerSocket;

    constructor(powerSocket: PowerSocket) {
        super();
        this.powerSocket = powerSocket;
    }

    public use(): string {
        const socket = this.powerSocket.socket();
        console.log(socket + "but transforms up to 220V");

        return "Power On";
    }
}

console.log(new Product().use());

console.log(new Adapter(new PowerSocket()).use());