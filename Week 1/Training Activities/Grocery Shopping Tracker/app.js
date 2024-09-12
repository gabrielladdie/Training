const http = require('http')
const fs = require('fs')

const { createLogger, transports, format } = require('winston')

// create the logger instance
const logger = createLogger({
    level: 'info', // log only messages with level 'info' and above
    format: format.combine(
        format.timestamp(),
        format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${message}`
        })
    ),
    transports: [
    new transports.Console(), // log to the console
    new transports.File({ filename: 'app.log' }) // log to a file
    ]
})

const PORT = 3000

// FUNCTIONS
let list = [] //temp list for manipulation
// read list.json, parse, then add to list temp array
let JSONlist = fs.readFileSync('list.json', 'utf8');
let parsedList = JSON.parse(JSONlist);
list.push(parsedList);

function writeFunction(){
    fs.writeFileSync('list.json', JSON.stringify(list), err => {
        if (err) {
            console.log(err)
        }
    })
}
function deleteProductByName(itemToRemove) {
  const initialLength = list.length
  list = list.filter(item => item.itemName !== itemToRemove)
  if (list.length === initialLength) {
      logger.warn(`Item with name ${itemToRemove} not found`)
  }
}


// CREATE SERVER
const server = http.createServer((req, res) => {
// request handling logic

logger.info(`[${req.method} ${req.url}]`)

res.setHeader('Content-Type', 'application/json')

  // handle the different HTTP methods
let body = ''
switch (req.method) {
    case 'GET':
        fs.readFile('list.json', 'utf8', (err, data) => {
            if (err) {
                console.error(err)
                return
            }
            console.log(data)

            // parse JSON data and return to client-side
            const jsonData = JSON.parse(data)
            res.end(JSON.stringify(jsonData))
        })
        res.statusCode = 200
        break;

    case 'POST':
        body = ''
        req.on('data', chunk => {
            body += chunk
        })

        req.on('end', () => {
            logger.info(`Request body: ${body}`);
            //push and parse request body body to list temp array
            list.push(JSON.parse(body));

            // call writefunction to update list.json
            writeFunction();
            res.statusCode = 201; // created
            res.end(JSON.stringify({message: "POST request handled"}));
        })
    break;

    case 'PUT':
    // expects there to be a body
        body = ''
        req.on('data', chunk => {
            body += chunk
        })
        req.on('end', () => {
            logger.info(`Request body: ${body}`)
            const updatedItem = JSON.parse(body);
            const index = list.findIndex(item => item.itemName === updatedItem.itemName);
            
            if (index !== -1) {
                // Update the item
                list[index] = { ...list[index], ...updatedItem };
                
                // Write the updated list to the file
                writeFunction();
                
                res.statusCode = 200;
                res.end(JSON.stringify({ message: 'Item updated successfully', updatedItem: list[index] }));
            res.statusCode = 200
            res.end(JSON.stringify({ message: 'PUT request handled' }))
        })
        break;
    case 'DELETE':
      //remove item from list with itemName from list temp array
      req.on('data', chunk => {
        body += chunk
    })
    req.on('end', () => {
        logger.info(`Request body: ${body}`)
        try {
            const { itemName } = JSON.parse(body)
            deleteProductByName(itemName)
            writeFunction()
            res.statusCode = 200
            res.end(JSON.stringify({ message: 'Item deleted' }))
        } catch (err) {
            logger.error('Error parsing request body')
            res.statusCode = 400
            res.end(JSON.stringify({ message: 'Bad Request' }))
        }
    })
    break;
    
    default: // method not allowed
        res.statusCode = 405
        res.end(JSON.stringify({ message: 'Method not supported' }))
        break;
    }

    // res.writeHead(200, { 'Content-Type': 'text/plain'});
    // res.end("Hello, World!");
})

server.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`)
})