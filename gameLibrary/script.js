// Sample game data (replace with your actual game data)
const gameLibrary = [
    {
      title: "Game 1",
      coverArt: "game1.jpg",
      played: true,
      startDate: "2023-06-01",
      finishDate: "2023-06-05",
      console: "PS5",
      length: "20 hours",
      genre: "Action",
      notes: "This game was awesome!"
    },
    {
      title: "Game 2",
      coverArt: "game2.jpg",
      played: false,
      startDate: "",
      finishDate: "",
      console: "Switch",
      length: "15 hours",
      genre: "Adventure",
      notes: ""
    },
    // Add more game objects as needed
  ];
  
  // Function to display the game library
  function displayGameLibrary() {
    const gameListContainer = document.getElementById("gameList");
    gameListContainer.innerHTML = "";
  
    gameLibrary.forEach((game) => {
      const gameEntry = document.createElement("div");
      gameEntry.classList.add("game-entry");
  
      const coverArt = document.createElement("img");
      cover
  