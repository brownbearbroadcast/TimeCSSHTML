# TimeCSSHTML
A simple, yet effective, way to calculate NTSC-DF timecodes.

## Why?
Most time-code calculators straddle the line between convenience, accuracy, and feature-base. This project strikes this concept through a mix of all three:
### Convenience
Mobile users can use their OS's numpad, computer users can use either numpad or number keys road. 
### Accuracy
There is no way to insert an incorrect timecode, so no exceptions due to that can occur. As well, the calculations are based upon the official EG 40 from SMPTE, and can bridge across days.
### Feature-base
The user can use three operations out of the box, and and code can be added to create new features based on a user's needs.
### Caveats
There is no automatic translation of invalid timecode for dropframe, meaning users must type exactly the right timecode. 
The accuracy is the strongest part, however this is designed for 24 hour timecode, and doesn't go higher. 
The feature-base is the weakest part, with users locked to NTSC-DF, and nothing else. This is the easiest to fix or add as EG 40 contains calculations for numerous other frame-rates & formats.
## Tests
There are no unit-tests due to the simplicity of the project, however with further additions these will have to be added due to complexity & javascript idiosyncrasies.
## Releases
As this repo is updated, the latest (not necessarily stable) version will be hosted on Github Pages at [https://BrownBearBroadcast.com/TimeCSSHTML/timecode-calc](https://BrownBearBroadcast.com/TimeCSSHTML/timecode-calc).
## Special Thanks
I would like to thank here Madison for ever encouraging my tinkering, Greg for being a (confused) tester, and Stacy for being a mentor, tester, and always encouraging me to follow my passions.
