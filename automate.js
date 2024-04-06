const fs = require('fs');

const args = process.argv.slice(2);

function makeDirs(){
  // Check if directory exists and if not, creates one
  fs.mkdirSync('./scss', { recursive: true});
  fs.mkdirSync('./js', {recursive: true});
}

function generate(fileName){
  makeDirs();
  fs.writeFileSync(
    `./scss/${fileName}.scss`,
    `// Begin our SCSS file.\n`
  );

  fs.writeFileSync(
    `./js/${fileName}.js`,
    `// Comment for JS file`
  );
}
generate(args[0]);