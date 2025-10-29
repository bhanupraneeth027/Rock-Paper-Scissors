
# Rock-Paper-Scissors

A simple, browser-based implementation of the classic Rock–Paper–Scissors game, built using standard front-end technologies.

## Table of Contents  
- [About](#about)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Project Structure](#project-structure)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

## About  
This project is a lightweight interactive game where a user plays the classic Rock–Paper–Scissors against the computer. It is designed for both learning purposes and as a fun front-end project. The UI is responsive and minimal, relying solely on HTML, CSS, and JavaScript.

## Features  
- User selects Rock, Paper or Scissors; computer makes a random selection.  
- Outcome (Win / Lose / Draw) is displayed in real time.  
- Simple scorekeeping and reset functionality.  
- Clean, responsive UI that works on desktop and mobile.  
- No external dependencies or frameworks – all logic runs in-browser.

## Tech Stack  
- **HTML5** — markup and structure (file: `rps.html`)  
- **CSS3** — styling and responsive design (file: `rps.css`)  
- **JavaScript (ES6+)** — game logic, event handling and UI updates (file: `rps.js`)  
- No server-side code, no database—runs entirely in the browser.

## Getting Started  
### Prerequisites  
- A modern web browser (Chrome, Firefox, Edge, Safari).  
- (Optional) A local HTTP server for testing (for example: `python3 -m http.server`, `npx http-server`).

### Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/bhanupraneeth027/Rock-Paper-Scissors.git
   cd Rock-Paper-Scissors
````

2. Open `rps.html` in your browser or serve the directory via a local server and navigate to `http://localhost:<port>/rps.html`.

## Usage

* Choose one of Rock / Paper / Scissors by clicking the corresponding icon.
* The computer will randomly select its move and display the result.
* The user’s score and computer’s score are displayed on-screen.
* Click “Reset” (if provided) to start a fresh game.

## Project Structure

```
Rock-Paper-Scissors/
├── rps.html        ← main game UI  
├── rps.css         ← styles and responsive design  
├── rps.js          ← game logic and UI interactions  
├── rps.rock.png    ← image asset for rock  
├── rps.paper.png   ← image asset for paper  
└── rps.scissors.png← image asset for scissors  
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes (and test thoroughly).
4. Commit your changes (`git commit -m "Add <feature>"`).
5. Push to your fork (`git push origin feature/your-feature`).
6. Open a Pull Request describing your changes.

