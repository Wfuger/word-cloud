const expect = require('chai').expect
var myFuncs = require('../src/word_cloud');

describe('word cloud', function () {
  var input = {
    "Ila Huels": [
      "OPTIMIZE WEB-ENABLED SUPPLY-CHAINS",
      "brand sexy channels",
    ],
    "Cristopher Feest": [
      "BENCHMARK CROSS-PLATFORM PARTNERSHIPS",
      "brand sexy channels",
      "BENCHMARK 24/7 PARADIGMS"
    ]
  }

  it('turns the phrases into an array of lowercase words', function () {
    var expected = {
      "Ila Huels": [
        "optimize", "web-enabled", "supply-chains",
        "brand", "sexy", "channels"
      ],
      "Cristopher Feest": [
        "benchmark", "cross-platform", "partnerships",
        "brand", "sexy", "channels",
        "benchmark", "24/7", "paradigms"
      ]
    }
    expect(myFuncs.prepData(input)).to.deep.equal(expected);
  });

  it('logs a new word to the word cloud object', function () {
    var wordObject = {};
    var word = "optimize";
    var user = "Ila Huels";
    var expected = {
      "optimize" : { count: 1, people: ["Ila Huels"] }
    }
    expect(myFuncs.logWord(wordObject, word, user )).to.deep.equal(expected);
    word = 'web-enabled';
    user = 'Cristopher Feest';
    expected = {
      "optimize" : { count: 1, people: ["Ila Huels"] },
      "web-enabled" : { count: 1, people: ['Cristopher Feest'] }
    }
    expect(myFuncs.logWord(wordObject, word, user)).to.deep.equal(expected);
  })

  it('updates the count and people for an existing word and new user', function () {
    var wordObject = {
      "optimize" : { count: 1, people: ["Ila Huels"] },
      "web-enabled" : { count: 1, people: ['Cristopher Feest'] }
    }
    var word = "optimize";
    var user = "Cristopher Feest";
    var expected = {
      "optimize" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
      "web-enabled" : { count: 1, people: ['Cristopher Feest'] }
    }
    expect(myFuncs.updateWordCount(wordObject, word, user)).to.deep.equal(expected);
  })

  it('updates the count for an existing word without duplicating the user in people', function () {
    var wordObject = {
      "optimize" : { count: 2, people: ["Ila Huels", "Cristopher Feest"] },
      "web-enabled" : { count: 1, people: ['Cristopher Feest'] }
    }
    var word = "optimize";
    var user = "Cristopher Feest";
    var expected = {
      "optimize" : { count: 3, people: ["Ila Huels", "Cristopher Feest"] },
      "web-enabled" : { count: 1, people: ['Cristopher Feest'] }
    }
    expect(myFuncs.updateWordCount(wordObject, word, user)).to.deep.equal(expected);
  })

  it('given an object of users and phrases returns a word cloud object', function () {
    var data = {
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
    var expected = {
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
    expect(myFuncs.makeWordCloud(data)).to.deep.equal(expected);
  })
})
