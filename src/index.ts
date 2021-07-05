import gm from 'gm'

gm('/home/amslimaa/www/bets-banner/src/content/anonymous.jpg')
  .fill('#fff')
  .stroke("#21F45C")
  .font("Helvetica.ttf", 300)
  .drawText(1224, 1500, "Anonymous!")
  .autoOrient()
  .write('/home/amslimaa/www/bets-banner/src/content/out.jpg', err => {
    if(err)  console.log(err); 
    else console.log();
})