import Phaser from 'phaser';
import skyImage from '../../assets/sky.png';
import birdSheet from '../../assets/redbird.png';
import pipeImage from "../../assets/pipe.png";
import atlas from "../../assets/RedBird.json";

const PIPES_TO_RENDER = 4;

class PlayScene1 extends Phaser.Scene {

    constructor() {
        //This identifies the Scene
        super('PlayScene1');
    }

    //Loading asset files
    preload() {
        this.load.image('sky', skyImage);
        this.load.image('pipe', pipeImage);
        this.load.spritesheet('bird', birdSheet,
        {
            frameWidth: 102, 
            frameHeight: 24
        });

        this.load.atlas('atlas', birdSheet, atlas);


    }

    //Called once 
    //Initializes game objects, interactions and subscribes to events
    create() {

        const { width, height } = this.scale;
        this.add.image(0, 0, 'sky').setOrigin(0);

        this.add.image(width * 0.5, height * 0.5, 'bird')

        

        

      

    }

   

    


    
    //Called on each render of the game. 60FPS
    // time -> in which update was called
    // delta -> time from the last frame
    update(time, delta) {
       
    }


}



export default PlayScene1;