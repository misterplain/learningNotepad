
### Lines in the Plane

Pythagorean theroem:  $a^2 + b^2 = c^2$\
Distance in the xy Plane:  $d=\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

Radius of a circle: $r = \sqrt{(x - h)^2 + (y - k)^2}$\
(h,k) is the center of the circle, (x,y) is a point on the circle

Standard equation of a circle = $(x-h)^2 + (y-k)^2 = r^2$

Slope of a line between two points: $m = \frac{y_2 - y_1}{x_2 - x_1}$\
Slope of a line between two points on a curve: $m = \frac{dy}{dx}$\
Above can  be re-written as: $y - y_1 = m(x-x_1)$\
Slope intercept form: $y = mx + b$

### Functions and their graphs

y = 2x+3 is a function since for every x, there is only one y.\
$x^2 + y^2 = 1$ is not a function since for x=0, y can be 1 or -1.
$y= \sqrt{x}$ is not a function since for x=1, y can be 1 or -1.

Difference quotioent, the slope of the line between two points on a graph (x, f(x)) and ((x+h), f(x+h)): $\frac{f(x+h) - f(x)}{h}$

Example of above with f(x) = x^2:\
$\frac{(x+h)^2 - x^2}{h} = \frac{x^2 + 2hx + h^2 - x^2}{h} = \frac{2hx + h^2}{h} = 2x + h$

Example of above with f(x) = 3x - 7:\
$\frac{3(x+h) - 7 - (3x - 7)}{h} = \frac{3x + 3h - 7 - 3x + 7}{h} = \frac{3h}{h} = 3$

Exaple of above with rational function with f(x) = $\frac{1}{x}$\
$\frac{\frac{1}{x+h} - \frac{1}{x}}{h} = \frac{\frac{x - (x+h)}{x(x+h)}}{h} = \frac{\frac{-h}{x(x+h)}}{h} = \frac{-1}{x(x+h)}$

Axample of above with radical function with f(x) = $\sqrt{x+3}$\
$\frac{\sqrt{x+h+3} - \sqrt{x+3}}{h} = \frac{\sqrt{x+h+3} - \sqrt{x+3}}{h} * \frac{\sqrt{x+h+3} + \sqrt{x+3}}{\sqrt{x+h+3} + \sqrt{x+3}} = \frac{x+h+3 - x - 3}{h(\sqrt{x+h+3} + \sqrt{x+3})} = \frac{1}{\sqrt{x+h+3} + \sqrt{x+3}}$\
This requires multiplying by the congugate to get rid of the radical in the denominator, conguate is $\sqrt{x+h+3} + \sqrt{x+3}$

### Combinations of functions

Piecewise functiion depends on the value of x.\
Example: $f(x) = \begin{cases} x^2 & \text{if } x < 0 \\ 2x & \text{if } x \geq 0 \end{cases}$

Compositions of functions\
$(f \circ g)(x) = f(g(x))$
Example:\
$f(x) = x^2$\
$g(x) = 2x$\
$(f \circ g)(x) = f(g(x)) = f(2x) = (2x)^2 = 4x^2$

Absolute value functions, always appear over x axis
$|x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0 \end{cases}$\

Greatest integer functions, esentially finds the lowest integer where there is no remainder\
$[x] = \begin{cases} n & \text{if } n \leq x < n+1 \end{cases}$

Trigonomic functions
$sin(x)$\
$cos(x)$\
$tan(x)$\
$sin = \frac{opposite}{hypotenuse}$\
$cos = \frac{adjacent}{hypotenuse}$\
$tan = \frac{opposite}{adjacent}$\
All right triangles have a hypotenuse, opposite and adjacent side, and satisfy the pythagorean theorem.\

Exact values of sin/cos/tan for 0, 30, 45, 60, 90 degrees\
$sin(0) = 0$\
$cos(0) = 1$\
$tan(0) = 0$\
$sin(30) = \frac{1}{2}$\
$cos(30) = \frac{\sqrt{3}}{2}$\
$tan(30) = \frac{1}{\sqrt{3}}$\
$sin(45) = \frac{\sqrt{2}}{2}$\
$cos(45) = \frac{\sqrt{2}}{2}$\
$tan(45) = 1$\
$sin(60) = \frac{\sqrt{3}}{2}$\
$cos(60) = \frac{1}{2}$\
$tan(60) = \sqrt{3}$\
$sin(90) = 1$\
$cos(90) = 0$\
$tan(90) = \infty$

On the Unit circle, sin and cos are the y and x coordinates of the point on the circle, respectively. Tan is then the ratio of the coordinates
Example: 
$sin(30) = \frac{1}{2}$\
$cos(30) = \frac{\sqrt{3}}{2}$\
$tan(30) = \frac{1}{\sqrt{3}}$\
How we got there:\
$sin(30) = \frac{opposite}{hypotenuse} = \frac{1}{2}$\
$cos(30) = \frac{adjacent}{hypotenuse} = \frac{\sqrt{3}}{2}$\
$tan(30) = \frac{opposite}{adjacent} = \frac{1}{\sqrt{3}}$



![alt text](../assets/unitCircle.png)

Exponential and Logoarithmic functions\
$y = a^x$\
$y = log_a(x)$\
$a^x = e^{xln(a)}$\
$log_a(x) = \frac{ln(x)}{ln(a)}$

Find the value of $log_2(8)$ without using ln\





