# MoonCode
MoonCode is a simple language to simplify JavaScript basic operations and to scaffold basic JavaScript constructs, such as interfaces, classes and modules. MoonCode is being created mainly as an educational project.

## Getting Started
MoonCode is written in tags inside a JavaScript file, which is then run through MCC to transpile the MoonCode segments to JavaScript.

The idea of MoonCode is to encapsulate as much as possible. This means when functions and variables are declared they are added to a specific interface object. You use MoonCode to build your interfaces, so it is used as a complement to JavaScript and not as a replacement.

MoonCode also allows you to build simple markdown documentation from your interfaces, making the separation of private and public variables all the more logical.

MoonCode will keep your JSDoc comments in place, and add the required directives to the JavaScript output, meaning you can still create valid documentation from the JavaScript output.

### Example

MoonCode input file - index.mc
``` javascript
let someVar = "someNormalJS"

<mooncode>

/**
 *  An interface for a garage containing vehicles.
 */
VehicleGarage:
  /**
   *  The rating of the garage, anyone can get or set.
   */
  Rating = 3
  private GarageName = "Bob's Garage"
  private Vehicles = []

  
  func AddVehicle x:
    Vehicles.push(x)
    
  /**
   *  Returns the current vehicles.
   */
  func GetVehicles:
    return Vehicles

</mooncode>
```

JavaScript output file - index.js
``` javascript
let someVar = "someNormalJS"

/**
 *  An interface for a garage containing vehicles.
 */
var VehicleGarage = {
  AddVehicle: function(x) {
    VehicleGarage.__priv__Vehicles.push(x);
  },
  /**
   * Returns the current vehicles.
   * @memberof VehicleGarage
   */
  GetVehicles: function() {
    return VehicleGarage.__priv__Vehicles;
  },
  /**
   * The rating of the garage, anyone can get or set.
   * @memberof VehicleGarage
   */
  Rating: 3,
  __priv__GarageName: "Bob's Garage",
  __priv__Vehicles: []
}
```

Markdown documentation file - index.doc.md

---

### VehicleGarage
#### Variables
Name | Description
--- | ---
Rating | The rating of the garage, anyone can get or set.

#### Methods
Name | Description
--- | ---
AddVehicle | 
GetVehicles | Returns the current vehicles.


---

## Contributing
Contributions are welcome! If you fix bugs, add features or come up with a cool idea, feel free to open a pull request!
