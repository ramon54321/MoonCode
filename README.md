# MoonCode
MoonCode is a simple language to simplify JavaScript basic operations and to scaffold basic JavaScript constructs, such as interfaces, classes and modules. MoonCode is being created mainly as an educational project.

## Getting Started
MoonCode is written in tags inside a JavaScript file, which is then run through MCC to transpile the MoonCode segments to JavaScript.

The idea of MoonCode is to encapsulate as much as possible. This means when functions and variables are declared they are added to a specific interface object. You use MoonCode to build your interfaces, so it is used as a complement to JavaScript and not as a replacement.

MoonCode also allows you to build simple markdown documentation from your interfaces, making the separation of private and public variables all the more logical.

### Example

MoonCode input file - index.mc
``` javascript
let someVar = "someNormalJS"

<mooncode>

VehicleGarage:
  private GarageName = "Bob's Garage"
  private Vehicles = []

  func AddVehicle x:
    Vehicles.push(x)
    
  func GetVehicles:
    return Vehicles

</mooncode>
```

JavaScript output file - index.js
``` javascript
let someVar = "someNormalJS"

var VehicleGarage = {
  AddVehicle: function(x) {
    VehicleGarage.__priv__Vehicles.push(x);
  },
  GetVehicles: function() {
    return VehicleGarage.__priv__Vehicles;
  },
  __priv__GarageName: "Bob's Garage",
  __priv__Vehicles: []
}
```

## Contributing
Contributions are welcome! If you fix bugs, add features or come up with a cool idea, feel free to open a pull request!
