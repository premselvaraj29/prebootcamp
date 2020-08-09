class TV {
  constructor(brand, channel = 1, price, inches, status, volume = 50) {
    this._brand = brand;
    this._channel = channel;
    this._price = price;
    this._inches = inches;
    this._status = status;
    this._volume = volume;
  }

  increaseVolume() {
    if (this._volume < 100) {
      this._volume += 1;
    }
  }

  decreaseVolume() {
    if (!this._volume < 0) {
      this._volume--;
    }
  }

  setChannel(num) {
    if (!this._channel > 50 && num > 0) {
      this._channel = num;
    }
    return this._channel;
  }

  resetTV() {
    this._channel = 1;
    this._volume = 50;
  }

  status() {
    console.log(
      `${this._brand} at channel ${this._channel}, volume ${this._volume}`
    );
  }
}

let panasonic = new TV("Panasonic", "40", "40000", "40", "ON", 60);

panasonic.status();
console.log("\n");
class LED extends TV {
  constructor(
    brand,
    channel = 1,
    price,
    inches,
    status,
    volume = 50,
    screenThickness,
    energyUsage,
    lifeSpan,
    refreshRate
  ) {
    super(brand, channel, price, inches, status, volume);
    this._screenThickness = screenThickness;
    this._energyUsage = energyUsage;
    this._lifeSpan = lifeSpan;
    this._refreshRate = refreshRate;
  }

  status() {
    super.status();
    console.log("Additional Features are ");
    console.log(
      `Screen thickness is ${this._screenThickness}, Energy Usage is ${this._energyUsage} & Refresh rate is ${this._refreshRate}`
    );
  }
}

let samsung = new LED(
  "Samsung",
  "60",
  "50000",
  "50",
  "OFF",
  30,
  "2.5",
  "40",
  "5",
  "120"
);

samsung.status();
console.log("\n");
class Plasma extends TV {
  constructor(
    brand,
    channel = 1,
    price,
    inches,
    status,
    volume = 50,
    viewingAngle,
    backlight,
    displayDetails
  ) {
    super(brand, channel, price, inches, status, volume);
    this._viewingAngle = viewingAngle;
    this._backlight = backlight;
    this._displayDetails = displayDetails;
  }

  status() {
    super.status();
    console.log("Additional Details are");
    console.log(
      `Viewing angle is ${this._viewingAngle}, backlight is ${this._backlight} & display details is ${this._displayDetails}`
    );
  }
}

let sony = new Plasma(
  "Sony",
  "60",
  "70000",
  "50",
  "ON",
  30,
  "30",
  "Black",
  "Plasma"
);

sony.status();
