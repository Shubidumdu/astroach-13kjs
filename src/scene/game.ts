import { canvas, context, draw } from '../canvas';
import { degreeToRadian } from '../utils';
import zzfx from '../zzfx';

const TILE_WIDTH = 120;
const TILE_HEIGHT = 40;
const TILE_SIZE = 4;

const ATTACK_TIME = 200;

const state = {
  x: 0,
  y: 0,
  attack: 0,
  direction: -1, // 1 = RIGHT, -1 = LEFT
};

export const drawGame = (time: number) => {
  drawMap(
    TILE_SIZE,
    canvas.width / 2,
    canvas.height / 2,
    TILE_WIDTH,
    TILE_HEIGHT,
  );
  drawPlayer(state.x, state.y, time);
};

const drawPlayer = (x: number, y: number, time: number) => {
  const attackProgress = (time - state.attack) / ATTACK_TIME;
  const isAttacking = attackProgress < 1 && state.attack ? true : false;
  draw(() => {
    // BODY
    context.setTransform(
      1,
      0,
      0,
      1,
      canvas.width / 2 + (-160 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
      canvas.height / 2 + (-20 + y * TILE_HEIGHT + Math.sin(time / 240)),
    );
    if (state.direction === -1) context.scale(-1, 1);
    if (isAttacking) {
      context.rotate(
        degreeToRadian(-20) *
          Math.pow(attackProgress, 2) *
          (3 * attackProgress - 3),
      );
    }
    context.ellipse(0, 0, 20, 40, 0, 0, 2 * Math.PI);
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillStyle = '#6A3D3D';
    context.fill();
  });
  draw(() => {
    // EYES
    if (isAttacking) {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-168 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) -
            2 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            (-40 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-160 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) +
            2 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            (-40 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
    } else {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-168 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-40 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-160 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-40 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
    }
    context.arc(0, 0, 3, 0, degreeToRadian(360));
    if (isAttacking) {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-158 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) -
            2 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            (-40 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-150 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) +
            2 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            (-40 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
    } else {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-158 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-40 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-150 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-40 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
    }
    if (isAttacking) {
      context.rotate(
        degreeToRadian(-20) *
          Math.pow(attackProgress, 2) *
          (3 * attackProgress - 3),
      );
    }
    context.arc(0, 0, 3, 0, degreeToRadian(360));
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillStyle = '#000';
    context.fill();
  });
  draw(() => {
    // Beam Sword
    if (state.direction === -1) {
      context.setTransform(
        1,
        0,
        0,
        1,
        canvas.width / 2 - 190 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6,
        canvas.height / 2 +
          Math.sin(time / 240) +
          y * TILE_HEIGHT +
          Math.sin(time / 240),
      );
      context.scale(-1, 1);
    } else {
      context.setTransform(
        1,
        0,
        0,
        1,
        canvas.width / 2 - 130 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6,
        canvas.height / 2 +
          Math.sin(time / 240) +
          y * TILE_HEIGHT +
          Math.sin(time / 240),
      );
    }
    context.rotate(degreeToRadian(190 + Math.sin(time / 240)));
    if (isAttacking) {
      context.rotate(
        degreeToRadian(-180) *
          Math.pow(attackProgress, 2) *
          (3 * attackProgress - 3),
      );
    }
    context.fillStyle = '#aaf';
    context.fillRect(-5, 0, 10, 120);
    if (state.direction === -1) {
      context.setTransform(
        1,
        0,
        0,
        1,
        canvas.width / 2 - 190 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6,
        canvas.height / 2 +
          Math.sin(time / 240) +
          y * TILE_HEIGHT +
          Math.sin(time / 240),
      );
      context.scale(-1, 1);
    } else
      context.setTransform(
        1,
        0,
        0,
        1,
        canvas.width / 2 - 130 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6,
        canvas.height / 2 +
          Math.sin(time / 240) +
          y * TILE_HEIGHT +
          Math.sin(time / 240),
      );
    context.rotate(degreeToRadian(190 + Math.sin(time / 240)));
    if (isAttacking) {
      context.rotate(
        degreeToRadian(-180) *
          Math.pow(attackProgress, 2) *
          (3 * attackProgress - 3),
      );
    }
    context.fillStyle = '#000';
    context.fillRect(-5, 0, 10, 20);
  });
  draw(() => {
    // arms
    if (isAttacking) {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-150 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 +
            (-30 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-170 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 +
            (-30 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
    } else {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-150 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-30 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
        context.scale(-1, 1);
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-170 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-30 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
    }
    context.moveTo(0, 0);
    if (isAttacking) {
      if (state.direction === -1) context.scale(-1, 1);
      context.quadraticCurveTo(
        0,
        30 - 30 * Math.sin(Math.PI * attackProgress),
        40 + 5 * Math.sin(Math.PI * attackProgress),
        20 + 5 * Math.sin(Math.PI * attackProgress),
      );
    } else context.quadraticCurveTo(0, 30, 40, 20);
    if (isAttacking) {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-178 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) -
            2 * Math.sin(attackProgress * Math.PI),
          canvas.height / 2 +
            (-30 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(attackProgress * Math.PI),
        );
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-142 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) +
            2 * Math.sin(attackProgress * Math.PI),
          canvas.height / 2 +
            (-30 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(attackProgress * Math.PI),
        );
    } else {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-178 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-30 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
        context.scale(-1, 1);
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-142 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-30 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
    }
    context.moveTo(0, 0);
    if (isAttacking) {
      if (state.direction === -1) context.scale(-1, 1);
      context.quadraticCurveTo(
        0,
        30 - 20 * Math.sin(Math.PI * attackProgress),
        12 + 5 * Math.sin(Math.PI * attackProgress),
        20 + 5 * Math.sin(Math.PI * attackProgress),
      );
    } else context.quadraticCurveTo(2, 30, 12, 20);
    context.strokeStyle = '#000';
    context.stroke();
  });
  draw(() => {
    // legs
    if (isAttacking) {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-150 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) +
            4 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            y * TILE_HEIGHT -
            4 * Math.sin(Math.PI * attackProgress),
        );
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-170 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) -
            4 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            y * TILE_HEIGHT -
            4 * Math.sin(Math.PI * attackProgress),
        );
    } else {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-150 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + y * TILE_HEIGHT,
        );
        context.scale(-1, 1);
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-170 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + y * TILE_HEIGHT,
        );
    }
    context.moveTo(0, 0);
    if (isAttacking) {
      if (state.direction === -1) context.scale(-1, 1);
      context.quadraticCurveTo(
        5 + Math.sin(time / 240),
        2 * Math.sin(Math.PI * attackProgress) + Math.sin(time / 240),
        0 - 10 * Math.sin(Math.PI * attackProgress),
        25 + 2 * Math.sin(Math.PI * attackProgress),
      );
    } else
      context.quadraticCurveTo(
        5 + Math.sin(time / 240),
        Math.sin(time / 240),
        0,
        25,
      );
    if (isAttacking) {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-174 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) +
            2 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            (-0 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-144 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) -
            2 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            (-0 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
    } else {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-174 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-0 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
        context.scale(-1, 1);
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-144 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-0 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
    }
    context.moveTo(0, 0);
    if (isAttacking) {
      if (state.direction === -1) context.scale(-1, 1);
      context.quadraticCurveTo(
        4 + Math.sin(time / 240),
        Math.sin(time / 240),
        4 - 2 * Math.sin(Math.PI * attackProgress),
        20 - 2 * Math.sin(Math.PI * attackProgress),
      );
    } else
      context.quadraticCurveTo(
        4 + Math.sin(time / 240),
        Math.sin(time / 240),
        4,
        20,
      );
    context.stroke();
  });
  draw(() => {
    // feelers
    if (isAttacking) {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-150 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) -
            4 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            (-50 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-170 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) +
            4 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            (-50 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
    } else {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-150 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-50 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
        context.scale(-1, 1);
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-170 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-50 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
    }
    context.moveTo(0, 0);
    if (isAttacking) {
      if (state.direction === -1) context.scale(-1, 1);
      context.quadraticCurveTo(
        20 - Math.sin(time / 240),
        -50 + Math.sin(time / 240),
        -10 - Math.sin(time / 240) + 16 * Math.sin(Math.PI * attackProgress),
        -30 + Math.sin(time / 240) - 20 * Math.sin(Math.PI * attackProgress),
      );
    } else
      context.quadraticCurveTo(
        20 - Math.sin(time / 240),
        -50 + Math.sin(time / 240),
        -10 - Math.sin(time / 240),
        -30 + Math.sin(time / 240),
      );
    if (isAttacking) {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-170 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) -
            4 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            (-50 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 +
            (-150 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6) +
            4 * Math.sin(Math.PI * attackProgress),
          canvas.height / 2 +
            (-50 + y * TILE_HEIGHT + Math.sin(time / 240)) +
            2 * Math.sin(Math.PI * attackProgress),
        );
    } else {
      if (state.direction === -1) {
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-170 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-50 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
        context.scale(-1, 1);
      } else
        context.setTransform(
          1,
          0,
          0,
          1,
          canvas.width / 2 + (-150 + x * TILE_WIDTH - (y * TILE_WIDTH) / 6),
          canvas.height / 2 + (-50 + y * TILE_HEIGHT + Math.sin(time / 240)),
        );
    }
    context.moveTo(0, 0);
    if (isAttacking) {
      if (state.direction === -1) context.scale(-1, 1);
      context.quadraticCurveTo(
        30 - Math.sin(time / 240),
        -50 + Math.sin(time / 240),
        -10 - Math.sin(time / 240) + 24 * Math.sin(Math.PI * attackProgress),
        -30 + Math.sin(time / 240) - 10 * Math.sin(Math.PI * attackProgress),
      );
    } else
      context.quadraticCurveTo(
        30 - Math.sin(time / 240),
        -50 + Math.sin(time / 240),
        -10 - Math.sin(time / 240),
        -30 + Math.sin(time / 240),
      );
    context.stroke();
  });
};

const drawMap = (
  size: number,
  x: number,
  y: number,
  tileWidth: number,
  tileHeight: number,
) => {
  draw(() => {
    context.setTransform(
      1,
      0,
      -0.5,
      1,
      x - (tileWidth * size) / 2 + tileWidth / size,
      y,
    );
    context.strokeStyle = '#0f0';
    context.shadowColor = '#fff';
    context.shadowOffsetX = 8;
    context.shadowOffsetY = 8;
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        context.strokeRect(
          tileWidth * j,
          tileHeight * i,
          tileWidth,
          tileHeight,
        );
      }
    }
  });
};

window.addEventListener('keydown', (e) => {
  const now = performance.now();
  if (now - state.attack < ATTACK_TIME) return;
  if (e.key === 'd') {
    if (state.x === TILE_SIZE - 1) return;
    state.x += 1;
  }
  if (e.key === 'a') {
    if (state.x === 0) return;
    state.x -= 1;
  }
  if (e.key === 'w') {
    if (state.y === 0) return;
    state.y -= 1;
  }
  if (e.key === 's') {
    if (state.y === TILE_SIZE - 1) return;
    state.y += 1;
  }
  if (e.key === 'ArrowRight') {
    soundLightSaber();
    state.direction = 1;
    state.attack = performance.now();
  }
  if (e.key === 'ArrowLeft') {
    soundLightSaber();
    state.direction = -1;
    state.attack = performance.now();
  }
});

const soundLightSaber = () => {
  zzfx(
    ...[
      ,
      ,
      334,
      ,
      0.08,
      0.09,
      2,
      1.52,
      -7.8,
      2.1,
      ,
      ,
      0.02,
      0.2,
      -28,
      ,
      ,
      0.65,
      0.1,
    ],
  );
};
