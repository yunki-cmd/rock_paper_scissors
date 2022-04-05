export function getRandom() {
  return Math.floor(Math.random() * 3);
}

export function piedraPapelTiejera(x, y) {
  //papel gana piedra piede contra tijera
  // piedra gana tijera pierde contra papel
  // tijera gana papel pierde piedra
  //papel = 0 piedra = 1 tijera = 2
  //player2             player2
  //          player1    
  // 2  win      0           1 loss
  // 0  win      1           2  loss
  // 1  win      2           0  loss
  if(x === y) return -1
  if (mod(x - y, 3) < 3 / 2) {
    return x;
  } else {
    return y;
  }

}

function mod(a, b) {
  const c = a % b;
  return c < 0 ? c + b : c;
}