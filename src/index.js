import Phaser from 'phaser';

import PlayScene from './scenes/Play';


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: [PlayScene]
}

new Phaser.Game(config);