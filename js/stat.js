'use strict';

const createRect = (ctx, x, y, width, height, color='#000') => {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}

const createStats = (ctx, gap, len, width, timeArray) => {
  var heightArray = [];
  var maxTime = 0;

  for (var i = 1; i < timeArray.length; i++) {
    if (timeArray[i] > maxTime) {
      maxTime = Math.round(timeArray[i]);
    }
  }

  for (var i = 0; i < timeArray.length; i++) {
    var height = Math.round(timeArray[i]) / maxTime;
    heightArray.push(height);
  }

  for (var i = 0; i < len.length; i++) {
    if (i === 0) {
      var color = 'rgba(255, 0, 0, 1)';
    } else {
      var randomColor = Math.random() * 100;
      color = `hsl(240, 100%, ${randomColor}%)`;
    }

    console.log(heightArray);
    var rectGapX = 190 + (gap + width) * i;
    let statHeight = 150 * heightArray[i];
    var rectGapY = 240 - 150 * heightArray[i]
    createRect(ctx, rectGapX, rectGapY, width, statHeight, color);

    ctx.fillStyle = '#000';
    let time = Math.round(timeArray[i]);
    let gapY = rectGapY - 20;
    ctx.fillText(time, rectGapX, gapY);
  }
}

window.renderStatistics = function(ctx, names, times) {
  createRect(ctx, 150, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  createRect(ctx, 140, 10, 420, 270, '#fff');

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 160, 25);
  ctx.fillText('Список результатов:', 160, 47);
  ctx.fillText('Вы', 190, 250);
  ctx.fillText('Кекс', 280, 250);
  ctx.fillText('Катя', 370, 250);
  ctx.fillText('Игорь', 460, 250);

  createStats(ctx, 50, names, 40, times);
}
