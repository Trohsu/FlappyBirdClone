import Phaser from 'phaser';

import PlayScene from './scenes/Play';
import PlayScene1 from './scenes/Play1';


const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: [PlayScene1]
}

new Phaser.Game(config);