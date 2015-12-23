# Word Cloud

You work for a tech conference company. Somebody transcribes all the noteworthy quotes from all the speakers, and enters them into a system. This system outputs a JSON file that looks like this:

```
{
  "Ila Huels": [
    "OPTIMIZE WEB-ENABLED SUPPLY-CHAINS",
    "brand sexy channels",
    "ENVISIONEER ROBUST E-COMMERCE",
    "TRANSFORM WIRELESS ARCHITECTURES",
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS"
  ],
  "Cristopher Feest": [
    "BENCHMARK CROSS-PLATFORM PARTNERSHIPS",
    "brand sexy channels",
    "BENCHMARK 24/7 PARADIGMS"
  ]
}
```

Your mission is to turn that data into an object that can be used by a word cloud. The output should look like this:

```
{
  "optimize" : { count: 1, people: ["Ila Huels"] },
  "web-enabled" : { count: 1, people: ["Ila Huels"] },
  "supply-chains" : { count: 1, people: ["Ila Huels"] },
  "brand" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "sexy" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "channels" : { count : 2, people : ["Ila Huels", "Cristopher Feest"] },
  "envisioneer" : { count: 1, people: ["Ila Huels"] },
  "robust" : { count: 1, people: ["Ila Huels"] },
  "e-commerce" : { count: 1, people: ["Ila Huels"] },
  "transform" : { count: 1, people: ["Ila Huels"] },
  "wireless" : { count: 1, people: ["Ila Huels"] },
  "architectures" : { count: 1, people: ["Ila Huels"] },
  "benchmark" : { count: 3, people: ["Ila Huels", "Cristopher Feest"] },
  "cross-platform" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "partnerships" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
  "24/7" : { count: 1, people: ["Cristopher Feest"] },
  "paradigms" : { count: 1, people: ["Cristopher Feest"] }
}
```

The words appear in a mix of uppercase and lowercase letters, but the resulting word-cloud should be all lowercase.

## EXERCISE
In `src/word_cloud.js` write a function (or functions) that processes all the words in the `data/quotes.json` file
and outputs the above desired result.

## TEST DRIVING IT!

```
jasmine init
spec/word_cloud_spec.js
```

__You will need to:__

* Export your function(s) to your spec file

```
module.exports = {
  someFunc: function() {
    return "hello";
  }
}
```
__Jasmine tests look like this__

```
describe('Somewhat general description', function() {
  it('more specific description here', function() {


    })
  })

```

__HELP__

* Practice breaking the problem into tiny bits, don't bite it all off at once.
* User smaller samples of data in your tests
* After achieving desired results with sample data, run your giant file
through to confirm it works with your actual data

__SEE TESTS BRANCH FOR PROVIDED TESTS__
