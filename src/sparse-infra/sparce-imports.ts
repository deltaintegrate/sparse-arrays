
import { WriteStream, createWriteStream } from "fs";


export class importationModules {
    inputString: string;
    inputLines: string[];
    currentLine: number; 
    
    constructor(){
        this.inputString = ''
        this.inputLines = []
        this.currentLine = 0
    }

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    process.stdin.on('data', function(inputStdin: string): void {
    this.inputString += inputStdin;
    });

    process.stdin.on('end', function(): void {
    this.inputLines = inputString.split('\n');
    this.inputString = '';

    main();
    });

    function readLine(): string {
        return inputLines[currentLine++];
    }
}