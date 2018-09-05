const fs = require('fs')
const path = require('path')
const pad = require('./utils/pad')

function generateContent() {
    let content = []
    for (let i = 1; i <= 10000; i++) {
        let line = []
        for (let j = 1; j <= 100; j++) {
            line.push(
                Math.floor(
                    Math.random() * 1000
                )
            )
        }
        content.push(line.join(','))
    }
    return content.join('\n')
}

function saveFile(filepath, content) {
    fs.writeFileSync(filepath, content, { encoding: 'utf8', flag: 'w+' })
}

const createDirectory = (dir) => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).forEach(function(file,index){
            const curPath = path.join(dir, file);
            if(fs.lstatSync(curPath).isDirectory()) { // recurse
                throw new Error('cannot delete directory: ' + curPath)
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
    fs.mkdirSync(dir)
}

function generateFiles(min = 1, max = 1000) {
    const minFileName = pad(min, 6)
    const maxFileName = pad(max, 6)
    const folderName = `${minFileName}-${maxFileName}`
    const directory = path.join(__dirname, `../files/${folderName}`)

    createDirectory(directory)

    console.log('generating:', minFileName, maxFileName)

    for (let i = min; i <= max; i++) {
        const filePath = `${directory}/${pad(i, 6)}.csv`
        saveFile(filePath, generateContent())
    }
}

const i = Number(process.argv.slice(2)[0]) || fs.readdirSync(path.join(__dirname, '../files')).length

const min = (i * 1000) + 1

const max = ((i + 1) * 1000)

generateFiles(min, max)
