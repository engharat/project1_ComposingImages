In this project we will implement an alpha compositing function for raster images using JavaScript.
You are given an HTML file that implements a simple web-based image compositing application. The video on the following link shows how the interface works:
https://youtu.be/QpwfzYpseeo

The missing part of this application (the part you will implement) is the JavaScript function that composites a foreground image onto a background image using alpha blending. Here how that function looks like:

function composite( bgImg, fgImg, fgOpac, fgPos )
This function takes 4 input parameters:

bgImg is the given background image to be modified.
fgImg is the foreground image that is to be composited onto the background image.
fgOpac is the opacity of the foreground image. The alpha values of the foreground image should be scaled using this argument.
fgPos is the position of the foreground image on the background image. It holds x and y coordinates in pixels, such that x=0 and y=0 means that the top-left pixels of the foreground and background images are aligned. Note that the given x and y coordinates can be negative.
This function does not return anything. It just modifies the given background image. The foreground image may have a different size and its position can be negative. The parts of the foreground image that fall outside of the background image should be ignored.

You are given the following files to help you with this project:

project1.html: This file contains the entire implementation of the interface, except for the composite function.
project1.js: This file contains the placeholder for the composite function. It is included by the project1.html file. Please make sure to put them in the same directory.
You can also use these images to test your implementation: background.png, teapot.png, u.png, and star.png.
Complete the composite function in the project1.js file, such that it composites the given foreground image onto the given background image with the given opacity and position arguments for the foreground image. Then, submit the completed project1.js file on canvas. Please do not rename project1.js in your submission.

Useful tip: Pressing the F4 key reloads the project1.js file without reloading the page, so you can quickly test your implementation.
