import Phaser from 'phaser';
import skyImage from '../../assets/sky.png';
import birdImage from '../../assets/bird.png';

class PlayScene extends Phaser.Scene {

    constructor() {
        //This identifies the Scene
        super('PlayScene');
    }

    //Loading asset files
    preload() {
        this.load.image('sky', skyImage);
        this.load.image('bird', birdImage);

    }

    //Called once 
    //Initializes game objects, interactions and subscribes to events
    create() {
        this.add.image(0, 0, 'sky').setOrigin(0);

        this.bird = this.physics.add.sprite(40, 300, 'bird');
        this.bird.setGravityY(600);
        this.bird.setCollideWorldBounds(true);

        this.input.on('pointerdown', () => {
           this.bird.setVelocityY(-300);
        })

    }


    //Called on each render of the game. 60FPS
    // time -> in which update was called
    // delta -> time from the last frame
    update(time, delta) {

    }


}



export default PlayScene;