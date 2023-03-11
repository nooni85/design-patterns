interface Notifier {
    send(message: string): void;
}

class ConcreteNotifier implements Notifier {
    send(message: string): void {
        console.log("Starting notifing");
    }
}

class NotifierDecorator implements Notifier {
    wrappee: Notifier;

    constructor(notifier: Notifier) {
        this.wrappee = notifier;
    }

    send(message: string): void {
        this.wrappee.send(message);
    }
}

class FacebookNotifier extends NotifierDecorator {
    public send(message: string) {
        super.send(message);
        console.log("Facebook notifier");
    }
}

class TwitterNotifier extends NotifierDecorator {
    public send(message: string) {
        super.send(message);
        console.log("Twitter notifier");
    }
}

const decorator1 = new NotifierDecorator(new FacebookNotifier(new ConcreteNotifier()));
decorator1.send('d');