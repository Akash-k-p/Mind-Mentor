
// async function renderDiaryEntry() {
//     const response = await fetch("/api/diary", {
//         headers: {
//             "Content-Type": "application/json"
//         }
//     } )

//     const entries = await response.json();

//     var userId ;

//     async function fetchUserData() {
//         const response = await fetch('/api/login/user');
//         if (response.ok) {
//             const data = await response.json();
//             console.log("user id : ",data.user_id);
//             userId = data.user_id;
//         }
//         else {
//             data = await response.json();
//             console.log(data);
//             userId = -1;
//         }
//     }
//     await fetchUserData();

//     // console.log(entries);
//     const diaryListContainer = document.querySelector("#diary-container");
//     entries.forEach((entry)=> {

        
//         // Fetch the data from the backend endpoint
      
//         if (entry.user_id==userId){
           
//         const entryContainer = document.createElement('div');
//         const entryTitle = document.createElement('h3');
//         const entryDate = document.createElement('p');
//         const entryMood = document.createElement('p');
//         const entryDescription = document.createElement('p');
//         const entryAudio = document.createElement('audio');
//         const deleteButton = document.createElement('button');

//         deleteButton.textContent = "Delete";

//         deleteButton.addEventListener('click', async () => {
//             const deleteResponse = await fetch(`/api/diary/${entry.id}`, {
//                 method: 'DELETE',
//                 headers: {
//                     "Content-Type": "application/json"
//                 }
//             });

//             if (deleteResponse.ok) {
//                 entryContainer.remove();
//             } else {
//                 alert('Failed to delete entry');
//             }
//         });


//         entryTitle.textContent = entry.title;
//         entryDate.textContent = entry.date_created;
//         entryDescription.textContent = entry.description;
//         if (entry.audio_path) {
//             entryAudio.src = `/${entry.audio_path}`;  // Set the correct path
//             entryAudio.controls = true;
//         }
        
//         entryContainer.classList.add("entryContainer");
//         entryTitle.classList.add("entryTitle");
//         entryDate.classList.add("entryDate");
//         entryDescription.classList.add("entryDescription");
//         entryMood.classList.add("entryMood");
//         entryAudio.classList.add("entryAudio");
//         deleteButton.classList.add("btn");
//         deleteButton.classList.add("btndanger");
        
//         switch(entry.mood_id) {
//             case 1:
//                 entryContainer.style.border = "2px solid black"
//                 entryMood.textContent = 'Worst Day Ever';
//                 break;
//             case 2:
//                 entryContainer.style.border = "2px solid darkred"
//                 entryMood.textContent = 'Really bad';
//                 break;
//             case 3:
//                 entryContainer.style.border = "2px solid red"
//                 entryMood.textContent = 'Sad';
//                 break;
//             case 4:
//                 entryContainer.style.border = "2px solid orange"
//                 entryMood.textContent = 'Not Good';
//                 break;
//             case 5:
//                 entryContainer.style.border = "2px solid yellow"
//                 entryMood.textContent = 'Adequate';
//                 break;
//             case 6:
//                 entryContainer.style.border = "2px solid darkgreen"
//                 entryMood.textContent = 'Pretty Good';
//                 break;
//             case 7:
//                 entryContainer.style.border = "2px solid green"
//                 entryMood.textContent = 'Good';
//                 break;
//             case 8:
//                 entryContainer.style.border = "2px solid lightgreen"
//                 entryMood.textContent = 'Happy';
//                 break;
//             case 9:
//                 entryContainer.style.border = "2px solid #a9ff29"
//                 entryMood.textContent = 'Elated';
//                 break;
//             case 10:
//                 entryContainer.style.border = "2px solid pink"
//                 entryMood.textContent = 'Best Day Ever';
//                 break;
//             default:
//                 entryContainer.style.border = "2px solid white"
//         }
//         entryContainer.append(entryTitle);
//         entryContainer.append(entryDate);
//         entryContainer.append(entryMood);
//         entryContainer.append(entryDescription);
//         entryContainer.append(entryAudio);
//         entryContainer.append(deleteButton);
//         diaryListContainer.append(entryContainer);
//     }
//     })
// }
// renderDiaryEntry();
async function renderDiaryEntry() {
    const response = await fetch("/api/diary", {
        headers: {
            "Content-Type": "application/json"
        }
    });

    const entries = await response.json();
    var userId;

    async function fetchUserData() {
        const response = await fetch('/api/login/user');
        if (response.ok) {
            const data = await response.json();
            console.log("user id : ", data.user_id);
            userId = data.user_id;
        } else {
            const data = await response.json();
            console.log(data);
            userId = -1;
        }
    }
    await fetchUserData();

    const diaryListContainer = document.querySelector("#diary-container");
    entries.forEach((entry) => {
        if (entry.user_id == userId) {
            const entryContainer = document.createElement('div');
            const entryTitle = document.createElement('h3');
            const entryDate = document.createElement('p');
            const entryMood = document.createElement('p');
            const entryDescription = document.createElement('p');
            const entryAudio = document.createElement('audio');
            const deleteButton = document.createElement('button');
            const moodColorBox = document.createElement('div');

            // Set delete button functionality
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener('click', async () => {
                const deleteResponse = await fetch(`/api/diary/${entry.id}`, {
                    method: 'DELETE',
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (deleteResponse.ok) {
                    entryContainer.remove();
                } else {
                    alert('Failed to delete entry');
                }
            });

            // Set content of the diary entry
            entryTitle.textContent = entry.title;
            entryDate.textContent = entry.date_created;
            entryDescription.textContent = entry.description;
            if (entry.audio_path) {
                entryAudio.src = `/${entry.audio_path}`;  // Set the correct path
                entryAudio.controls = true;
            }

            // Style and mood-specific color logic
            moodColorBox.classList.add("moodColorBox");
            switch (entry.mood_id) {
                case 1:
                    moodColorBox.style.backgroundColor = "black";
                    entryMood.textContent = 'Worst Day Ever';
                    break;
                case 2:
                    moodColorBox.style.backgroundColor = "darkred";
                    entryMood.textContent = 'Really bad';
                    break;
                case 3:
                    moodColorBox.style.backgroundColor = "red";
                    entryMood.textContent = 'Sad';
                    break;
                case 4:
                    moodColorBox.style.backgroundColor = "orange";
                    entryMood.textContent = 'Not Good';
                    break;
                case 5:
                    moodColorBox.style.backgroundColor = "yellow";
                    entryMood.textContent = 'Adequate';
                    break;
                case 6:
                    moodColorBox.style.backgroundColor = "darkgreen";
                    entryMood.textContent = 'Pretty Good';
                    break;
                case 7:
                    moodColorBox.style.backgroundColor = "green";
                    entryMood.textContent = 'Good';
                    break;
                case 8:
                    moodColorBox.style.backgroundColor = "lightgreen";
                    entryMood.textContent = 'Happy';
                    break;
                case 9:
                    moodColorBox.style.backgroundColor = "#a9ff29";
                    entryMood.textContent = 'Elated';
                    break;
                case 10:
                    moodColorBox.style.backgroundColor = "pink";
                    entryMood.textContent = 'Best Day Ever';
                    break;
                default:
                    moodColorBox.style.backgroundColor = "white";
            }

            // Apply class styles
            entryContainer.classList.add("entryContainer");
            entryTitle.classList.add("entryTitle");
            entryDate.classList.add("entryDate");
            entryDescription.classList.add("entryDescription");
            entryMood.classList.add("entryMood");
            entryAudio.classList.add("entryAudio");
            deleteButton.classList.add("btn", "btndanger");

            // First row: entryDate, entryMood, moodColorBox (3 columns)
            const firstRow = document.createElement('div');
            firstRow.classList.add("firstRow");
            firstRow.append(entryDate);
            firstRow.append(entryMood);
            firstRow.append(moodColorBox);

            // Second row: entryTitle
            const secondRow = document.createElement('div');
            secondRow.append(entryTitle);

            // Third row: entryDescription
            const thirdRow = document.createElement('div');
            thirdRow.append(entryDescription);

            // Append rows to the entry container
            entryContainer.append(firstRow);
            entryContainer.append(secondRow);
            entryContainer.append(thirdRow);
            entryContainer.append(entryAudio);
            entryContainer.append(deleteButton);

            diaryListContainer.append(entryContainer);
        }
    });
}

renderDiaryEntry();
