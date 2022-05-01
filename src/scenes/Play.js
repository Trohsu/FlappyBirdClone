import Phaser from 'phaser';
import skyImage from '../../assets/sky.png';
import birdImage from '../../assets/bird.png';
import pipeImage from "../../assets/pipe.png";

const PIPES_TO_RENDER = 4;

class PlayScene extends Phaser.Scene {

    constructor() {
        //This identifies the Scene
        super('PlayScene');
    }

    //Loading asset files
    preload() {
        this.load.image('sky', skyImage);
        this.load.image('bird', birdImage);
        this.load.image('pipe', pipeImage);

    }

    //Called once 
    //Initializes game objects, interactions and subscribes to events
    create() {
        this.add.image(0, 0, 'sky').setOrigin(0);

        this.bird = this.physics.add.sprite(40, 300, 'bird');
        this.bird.setGravityY(600);
        this.bird.setCollideWorldBounds(true);

        this.createPipes();

        this.input.on('pointerdown', () => {
           this.bird.setVelocityY(-300);
        })

        //this.physics.add.collider(this.bird, this.pipes);

      

    }

    createPipes() {
        this.pipes = this.physics.add.group();

        //Positioning
        this.pipeHorizontalPosition = 400;
        

        for(let i = 0; i < PIPES_TO_RENDER; i++)
        {
            //Adds pipes to physics group
            const upperPipe = this.pipes.create(0, 0, 'pipe').setOrigin(0, 1);
            const lowerPipe = this.pipes.create(0, 0, 'pipe').setOrigin(0, 0);

            this.placePipe(upperPipe, lowerPipe);
        }

        this.pipes.setVelocityX(-200);
        
    }

    placePipe(upperPipe, lowerPipe){

        const rightMostPipeX = this.getRightMostPipe();

        this.pipeHorizontalDistance = Phaser.Math.Between(300, 400);
        this.pipeVerticalDistance = Phaser.Math.Between(100, 250);

        this.pipeVerticalPosition = Phaser.Math.Between(20, 600 - 20 - this.pipeVerticalDistance);

        upperPipe.x = rightMostPipeX + this.pipeHorizontalDistance;
        upperPipe.y = this.pipeVerticalPosition;

        lowerPipe.x = upperPipe.x;
        lowerPipe.y = upperPipe.y + this.pipeVerticalDistance;

    }


    recyclePipes()
    {
        const tempPipes = [];
        this.pipes.getChildren().forEach(pipe => {
            if(pipe.getBounds().right < 0) {
                tempPipes.push(pipe);
                if(tempPipes.length === 2) {
                    this.placePipe(tempPipes[0], tempPipes[1])
                }
            }
        })
    }

    getRightMostPipe()
    {
        let rightMost = 0;

        this.pipes.getChildren().forEach(pipe => {
            
            rightMost = Math.max(pipe.x, rightMost);
        });

        return rightMost;
    }

    //Called on each render of the game. 60FPS
    // time -> in which update was called
    // delta -> time from the last frame
    update(time, delta) {
       this.recyclePipes();
    }


}



export default PlayScene;