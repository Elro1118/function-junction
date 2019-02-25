/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */
const max = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a > b ? a : b
  } else if (
    (typeof a === 'number' && typeof b === 'string') ||
    (typeof a === 'string' && typeof b === 'number')
  ) {
    return typeof a === 'number' ? a : b
  } else if (typeof a === 'string' && typeof b === 'string') {
    return 'string'
  }
}

// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */
const maxOfThree = (a, b, c) => {
  if (typeof a === 'number' && typeof b === 'number' && typeof c === 'number') {
    return a > b && a > c ? a : b > a && b > c ? b : c
  } else if (typeof a === 'string') {
    return b > c ? b : c
  } else if (typeof b === 'string') {
    return a > c ? a : c
  } else if (typeof c === 'string') {
    return a > b ? a : b
  } else if (typeof a === 'string' && typeof b === 'string') {
    return c
  } else if (typeof c === 'string' && typeof a === 'string') {
    return b
  } else if (typeof b === 'string' && typeof c === 'string') {
    return a
  } else if (
    typeof a === 'string' &&
    typeof b === 'string' &&
    typeof c === 'string'
  ) {
    return 'string'
  }
  // return Math.max(a, b, c) <= Explorer mode
}
// ...

/*
 * Define a function sum() that takes two numbers as
 * arguments and computes the sum of those two numbers.
 */
const sum = (a, b) => {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  } else if (typeof a === 'string' && typeof b === 'string') {
    return console.log('a and b need to be numbers or arrays')
  } else {
    let sumArray = []
    a.forEach(aElement => {
      b.forEach(bElement => {
        sumArray.push(aElement + bElement)
      })
    })
    return sumArray
  }
}
// ...

/*
 * Define a function sumOfArray that calculates the sum of
 * all the numbers in an array.
 */
const sumOfArray = arr => {
  let temp = 0
  arr.forEach(element => {
    temp += element
  })
  return temp
}
// ...

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
const isVowel = letter => {
  const vowelArray = ['a', 'e', 'i', 'o', 'u']
  return vowelArray.includes(letter.toLowerCase())
}
// ...

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */
const rovarspraket = text => {
  const vowelArray = ['a', 'e', 'i', 'o', 'u']
  let newText = ''
  for (let i = 0; i < text.length; i++) {
    if (!vowelArray.includes(text.charAt(i))) {
      newText += text.charAt(i) + 'o' + text.charAt(i)
    } else {
      newText += text.charAt(i)
    }
  }
  return newText
}
// ...

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */
const reverse = text => {
  let newText = ''
  let tempArray = []
  Array.from(text).forEach(element => {
    tempArray.unshift(element)
  })
  // tempArray.reverse() <= Explorer mode
  tempArray.forEach(letter => {
    newText += letter
  })
  return newText
}
// ...

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */
const findLongestWord = myString => {
  let wordsArray = myString.split(' ')
  let numberMax = 0
  let indexMax = 0
  wordsArray.forEach(word => {
    if (word.length > numberMax) {
      numberMax = word.length
      indexMax = wordsArray.indexOf(word)
    }
  })
  return wordsArray[indexMax]
}
// ...
/** My function is about  Max */
const findMaxito = arr => {
  if (typeof arr === 'number') {
    return 'the parameter needs to be an array'
  } else if (typeof arr === 'string') {
    return 'the parameter needs to be an array'
  } else {
    arr.sort((a, b) => b - a)
    return arr[0]
  }
}

// ...

/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from 'ava'

test('max()', t => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
})

test('maxOfThree()', t => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
})

test('sum()', t => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
  t.is(sum([1, 2], [3, 4])[(4, 6)])
})

test('sumOfArray()', t => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test('isVowel()', t => {
  t.is(isVowel('B'), false)
  t.is(isVowel('b'), false)
  t.is(isVowel('t'), false)
  t.is(isVowel('a'), true)
  t.is(isVowel('E'), true)
})

test('rovarspraket()', t => {
  t.is(rovarspraket('a'), 'a')
  t.is(rovarspraket('b'), 'bob')
  t.is(rovarspraket('cat'), 'cocatot')
  t.is(rovarspraket('javascript'), 'jojavovasoscocroripoptot')
})

test('reverse()', t => {
  t.is(reverse('books'), 'skoob')
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test('findLongestWord()', t => {
  t.is(findLongestWord('book dogs'), 'book')
  t.is(findLongestWord('life the universe and everything'), 'everything')
})

test('max() can handle non numbers', t => {
  t.is(max('aaa', 0), 0)
  t.true(isNaN(max('aaa', 'bbb')))
})

test('maxOfThree() can handle non numbers', t => {
  t.is(maxOfThree('aaa', 0, 1), 1)
  t.true(isNaN(maxOfThree('aaa', 'bbb', 'ccc')))
})

test('findMaxito()', t => {
  t.is(findMaxito([1, 2]), 2)
  t.is(findMaxito([3, 2]), 3)
  t.is(findMaxito([3, 2, 5, 9]), 9)
  t.is(findMaxito(3), 'the parameter needs to be an array')
  t.is(findMaxito('aaa'), 'the parameter needs to be an array')
})

/* eslint-enable */
