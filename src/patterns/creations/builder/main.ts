class House {
    parts: String[] = [];

    public addParts(part: String): void {
        this.parts.push(part);
    }

    public printParts(): void {
        console.log(this.parts);
    }
}

interface HouseBuilder {
    buildSwimmingPool(): HouseBuilder;
    buildWalls(): HouseBuilder;
    buildDoors(): HouseBuilder;
    buildWindows(): HouseBuilder;
    buildRoof(): HouseBuilder;
    buildGarage(): HouseBuilder;
    getHouse(): House;
}

class HugeHouseBuilder implements HouseBuilder {
    house: House = new House();

    buildDoors(): HouseBuilder {
        this.house.addParts("Doors");
        return this;
    }

    buildGarage(): HouseBuilder {
        this.house.addParts("Garage");
        return this;
    }

    buildRoof(): HouseBuilder {
        this.house.addParts("Roof");
        return this;
    }

    buildSwimmingPool(): HouseBuilder {
        this.house.addParts("SwimmingPool");
        return this;
    }

    buildWalls(): HouseBuilder {
        this.house.addParts("Walls");
        return this;
    }

    buildWindows(): HouseBuilder {
        this.house.addParts("Windows");
        return this;
    }

    getHouse(): House {
        return this.house;
    }
}

class Director {
    private builder: HouseBuilder;

    constructor(builder: HouseBuilder) {
        this.builder = builder;
    }

    public getHugeHouse(): House {
        return new HugeHouseBuilder()
            .buildGarage()
            .buildDoors()
            .buildDoors()
            .getHouse();
    }
}

const builder = new HugeHouseBuilder();
const director = new Director(builder);

const house = director.getHugeHouse();
house.printParts();