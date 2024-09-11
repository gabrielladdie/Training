// Import the readline module for handling user input in the console
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
})

let list = [
  {
    itemName: 'Apples',
    Quantity: 5,
    Price: 1.99,
    Purchased: 'no'
  },
  {
    itemName: 'Eggs',
    Quantity: 5,
    Price: 1.99,
    Purchased: 'no'
  },
  {
    itemName: 'Oranges',
    Quantity: 5,
    Price: 1.99,
    Purchased: 'no'
  }
]

function addItem () {
  rl.question('What do you want to add? ', itemN => {
    rl.question('How many do you want to add? ', quant => {
      rl.question('How much does it cost? ', cost => {
        rl.question('Have you purchased it? ', bought => {
          let newItemObj = {
            itemName: itemN,
            Quantity: quant,
            Price: cost,
            Purchased: bought
          }
          list.push(newItemObj)
          console.log(list)

          rl.question('Do you want to add another item? ', answer => {
            if (answer == 'yes') {
              addItem()
            } else {
              rl.close()
            }
          })
        })
      })
    })
  })
}

function removeItem () {
  rl.question('What do you want to remove? ', answer => {
    console.log(list)
    list.forEach((item, index) => {
      if (item.itemName == answer) {
        list.splice(index, 1)
      }
    })
    console.log(list)
    console.log('List has been updated.')
    rl.question('Do you want to remove another item? ', answer => {
      if (answer == 'yes') {
        removeItem()
      } else {
        rl.close()
      }
    })
  })
}

function viewItems () {
  console.log(list)
}

rl.question('What do you want to do? add, remove, or view? ', answer => {
  console.log(`You selected: ${answer}`)

  if (answer == 'add') {
    addItem()
  } else if (answer == 'remove') {
    console.log(list)
    removeItem()
  } else if (answer == 'view') {
    viewItems();
  } else {
    console.log('Invalid input')
    rl.close()
  }
})

rl.on('line', line => {
  console.log(line)
})

rl.once('close', () => {
  // end of input
  console.log('Goodbye')
})
