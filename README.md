# cubeIt
A lightweight library to generate HTML/CSS cubes with various options

This is a basic implementation to generate 3d Cubes using CSS transforms through Jquery.

## Instantiation
`$('.main').cubeIt();`
This generates a cube of size 100px. You can overide the defaults through the options you provide through a object literal.

### Options available
        border: "1px solid black",
        backgroundColor: "transparent",
        size: 100,
        animate:false
        
Animation by default is a spin animation that rotates the cube in the Y direction.
More updates to come. Please feel free to contribute and make this library better.

PS: This was created just for fun
