module.exports = {
    //general server setup stuff
    "http": {
        "port": 8601,
        "appEndpoint": "http://localhost:3600",
        "apiEndpoint": "http://localhost:3600",
    },
    "app": {
        "lightsMode": {
            //enum containing modes for light settings
            "DAY": 0,
            "NIGHT": 1
        },
        "lightSwitch": {
            "OFF": 0,
            "ON": 1,
        },
        "lights": {
            "STAND": 0,
            "DESK_AMBIENT": 1,
            "DESK_ABOVE": 2,
        }
    },


}
