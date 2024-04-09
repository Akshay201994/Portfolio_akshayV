/*
const chords = ['G', 'C', 'D', 'Em'];

// Function to change the chord
function changeChord() {
    // Get a random chord
    const randomChordIndex = Math.floor(Math.random() * chords.length);
    const randomChord = chords[randomChordIndex];
    
    // Display the chord (here console.log is used, you can replace it with any other way to display the chord)
    console.log('Current chord: ' + randomChord);
}

// Set the time interval (in milliseconds) to change the chord
const interval = 2000; // Change the chord every 2 seconds

// Start changing the chord repeatedly after the specified time interval
const chordInterval = setInterval(changeChord, interval);

// Stop changing the chord after a certain duration (for demonstration purpose)
const duration = 10000; // Change chords for 10 seconds
setTimeout(() => {
    clearInterval(chordInterval); // Stop changing the chord
    console.log('Chord change stopped.');
}, duration);
*/

// const myChords=['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
// let randomNotes=[]
// for(i=0;i<myChords.length;i++)

// Math.floor(Math.random()*myChords.length)
// notes += myChords[randomNotes]
// console.log(notes)



// const notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];


// function generateRandomNotes(numNotes) {
//     const practiceNotes=document.querySelector('#notes')
//     const randomNotes = [];
//     for (let i = 0; i < numNotes; i++) {
//         const randomNoteIndex = Math.floor(Math.random() * notes.length);
//         const randomNote = notes[randomNoteIndex];
//         randomNotes.push(randomNote);
//     }

//     const myNotes='Current notes: ' + randomNotes.join(', ')
//     console.log(myNotes)
//     practiceNotes.innerHTML=myNotes
// }

// const interval = 2000;



// const noteInterval = setInterval(() => {
//     const numNotes=Math.floor(Math.random()*3)+3
//     generateRandomNotes(numNotes);
// }, interval);

// // Stop generating notes after a certain duration (for demonstration purpose)
// const duration = 30000; // Generate notes for 10 seconds
// setTimeout(() => {
//     clearInterval(noteInterval); // Stop generating notes
//     console.log('Note generation stopped.');
// }, duration);

// function myNotes(){
//     const practiceNotes=document.querySelector('#notes')
//     const notes=['b3','b4','b5','b7']
//     const randomNum=Math.floor(Math.random()*4)
//     practiceNotes.innerHTML=notes[randomNum]
// }

// setInterval(()=>{
//     myNotes()
// },2000)
/*
const body=document.querySelector('body')
const note=document.createElement('h1')

const randomNotes=function(){
    let myNotes=['b3','b4','b5','b7']
    let randomNote=Math.floor(Math.random()*4)
    console.log(myNotes[randomNote])
    note.innerHTML=myNotes[randomNote]
}

body.appendChild(note)
body.style.height='100vh'
body.style.display='flex'
body.style.justifyContent='center'
body.style.alignItems='center'
note.style.fontSize='200px'

const randomColor=function(){
    const colors=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E',"F"]
    let colorCode='#'
    for(i=0;i<=5;i++){
        const myColor=Math.floor(Math.random()*16)
        colorCode += colors[myColor]
    }
    console.log(colorCode)
    body.style.backgroundColor=colorCode
}
let noteInterval=prompt('please enter time interval(1-4sec)')
noteInterval *=1000
console.log(noteInterval)
setInterval(randomColor,noteInterval)
setInterval(randomNotes,noteInterval)

R
b2
M2
b3
M3
P4
b5
#4
P5
#5
b6
M6
b7
M7
8

*/
const form=document.querySelector('.form')
let timeInt;

form.addEventListener('submit',(e)=>{
    console.log(e)
    e.preventDefault()
    let noteSet=document.querySelector('#noteSet')
    const timeInterval=document.querySelector('#timeInterval')

    const myNotes=function(){
    let noteOutput=document.querySelector('#randomNote')
    let userNotes=noteSet.value
    let noteList=userNotes.split(',')
    console.log(noteList)
    let randomNote=Math.floor(Math.random()*(noteList.length))
    let randomNoteList=noteList[randomNote]
    noteOutput.innerHTML=randomNoteList

    }
    
    myNotes()
    timeInt=timeInterval.value*1000
    console.log(timeInt)

    setInterval(myNotes,timeInt)
}) 

const pendulum = document.getElementById('pendulum');

    // Function to update the pendulum rotation based on current time
    function updatePendulum() {
        const now = new Date();
        const seconds = now.getSeconds();
        const rotation = (seconds % 2 === 0) ? 10 : -10; // Swing left or right every 2 seconds
        pendulum.style.transform = `rotate(${rotation}deg)`;
    }

    // Update pendulum rotation every second
    setInterval(updatePendulum, timeInt);

// const notePicker=function(){
//     let message = prompt('please enter your Notes set separated with coma ','')
//     let arr=message.split(',')
//     console.log(arr)
//     const randomNotes=Math.floor(Math.random()*arr.length)
//     console.log(arr[randomNotes])
// }

// let timeInterval=prompt('please enter time interval in seconds(1-120s)')
// let newInterval=timeInterval*1000
// console.log(newInterval)

// notePicker()
//setInterval(notePicker,newInterval)s