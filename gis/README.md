### GIS system

##### Formula
> λ: longtidue in radian

> θ: latitude in radian

```javascript
GET_X = λ 

GET_Y = ln(tan(π/4 + θ/2))
```

##### Mercator Projection
> Earth radius: R

```javascript
x = GET_X * R

y = GET_Y * R
```

##### In slippy map, Lon and lat to TMS(tile numbers or pixel coordinates) x/y
> latlog(θ, λ) => tile(x, y)

```javascript
 n = 2 ^ zoom
 xtile = n * ((GET_X + π)/ 2π)
 ytile = (n/2) * (1 - GET_Y / π)
```
