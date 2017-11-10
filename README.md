# fast-lorem-ipsum
Generate Lorem Ipsum text quickly

**To use in a project**
```
$npm install fast-lorem-ipsum
```

```javascript
var fastLoremIpsum = require('fast-lorem-ipsum').fastLoremIpsum;

fastLoremIpsum("10c");
fastLoremIpsum("100w");

fastLoremIpsum(10,'c');

//Performance result (Tested on Chrome 55.0.2883 / Ubuntu (Linux) )
fastLoremIpsum(100, 'w');  //34,783,141 calls/ps
fastLoremIpsum(1000, 'w'); //31,239,051 calls/ps
fastLoremIpsum(3000, 'w'); //17,811,509 calls/ps
fastLoremIpsum(5000, 'w'); //12,929,931 calls/ps

```

**To use from command line**

```
$npm install fast-lorem-ipsum -g
$loremipsum -c 5
$loremipsum -w 5
```

Performance comparision at [coparejs](https://naturalintelligence.github.io/comparejs/?q=lorem-ipsum-vs-fast-lorem-ipsum). Worth to check

![benchmark lorem ipsum](assets/img/lorem-ipsum.png)