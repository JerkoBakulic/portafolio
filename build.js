// Genera index.html (documento completo para GitHub Pages) a partir de page.html
const fs=require('fs');
const page=fs.readFileSync(__dirname+'/page.html','utf8');
const head=page.slice(0,page.indexOf('</style>')+8), body=page.slice(page.indexOf('</style>')+8);
fs.writeFileSync(__dirname+'/index.html',`<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
${head}
</head>
<body>${body}
</body>
</html>
`);
