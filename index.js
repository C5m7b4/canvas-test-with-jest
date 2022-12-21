const castlePath = new Path2D(
  'M 0,440 V 95 H 45.5 V 140 H 91 V 95 H 136.5 V 200 H 182 V 155 H 227.5 V 200 H 273 V 155 H 318.5 V 200 H 364 V 90 H 409.5 V 140 H 455 V 90 H 500.5 V 440 Z'
);
const windowsPath = new Path2D(
  'M 60,297 V 222 H 75.5 V 297 Z M 204.5,425 V 330 A 45.75 45.75 0 0 1 296,330 V 425 Z M 424,297 V 222 H 439.5 V 297 Z'
);

export function draw(ctx) {
  const shapePath = new Path2D();
  const castleShape = new Path2D();
  const castleWindowsShape = new Path2D();

  castleShape.addPath(castlePath);
  castleWindowsShape.addPath(windowsPath);

  shapePath.addPath(castleShape);
  shapePath.addPath(castleWindowsShape);

  ctx.fillStyle = 'gray';
  ctx.fill(shapePath);
  ctx.fillStyle = 'white';
  ctx.fill(castleWindowsShape);
  ctx.lineWidth = 2;
  ctx.strokeStyle = 'yellow';
  ctx.stroke(shapePath);
  ctx.stroke(castleShape);
  return shapePath;
}
