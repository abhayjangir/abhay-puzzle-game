# Signal Decoder - The Invisible Pattern Game

A React + TypeScript pattern-matching puzzle game where players decode hidden patterns in a 5×5 grid of flashing squares.

## 🎮 Game Overview

Signal Decoder challenges players to observe a sequence of flashing squares and identify the underlying pattern. Each level introduces a new rule that determines which squares flash.

### Levels

1. **Level 1: Even Indices** - Squares flash where `index % 2 === 0`
2. **Level 2: Diagonals** - Squares on both diagonals flash
3. **Level 3: Prime Numbers** - Squares with prime number indices flash
4. **Level 4: Center Cluster** - Center square and its 4 neighbors flash
5. **Level 5: Modulo Pattern** - Squares flash where `(row + col) % 3 === 0`

## 🚀 Running Locally

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## 🎯 How to Play

1. **Watch**: Observe the 5×5 grid as certain squares flash on and off for 10 seconds
2. **Decode**: Identify the pattern behind which squares are flashing
3. **Select**: Click on the squares you believe were flashing
4. **Submit**: Check your answer and get immediate feedback
5. **Progress**: Advance through 5 increasingly challenging levels

## 🛠️ Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Grid.tsx        # 5×5 game grid
│   ├── GameHeader.tsx  # Level and score display
│   ├── Instructions.tsx # Game instructions
│   ├── GameControls.tsx # Action buttons
│   ├── Feedback.tsx    # Results display
│   └── VictoryScreen.tsx # Completion screen
├── types/              # TypeScript type definitions
│   └── game.ts         # Game state interfaces
├── utils/              # Game logic
│   └── gameRules.ts    # Level rules and scoring
└── pages/
    └── Index.tsx       # Main game page
```

## 🎨 Features

- ✅ 5 progressively challenging levels
- ✅ Real-time flashing animation
- ✅ Score tracking system
- ✅ Visual feedback for correct/incorrect selections
- ✅ Hint system for wrong answers
- ✅ Responsive design
- ✅ Clean, modern UI with smooth animations
- ✅ TypeScript for type safety
- ✅ Modular, reusable components

## 🎯 Game Logic

The game follows these core mechanics:

1. **Pattern Generation**: Each level has a unique rule function that determines which cells should flash
2. **Flashing Phase**: Cells flash for 10 seconds with 1-second intervals
3. **Selection Phase**: Players click cells they believe were flashing
4. **Validation**: Compares selected cells against the actual pattern
5. **Scoring**: Awards points for correct selections, deducts for errors

### Scoring System

- +10 points per correctly selected square
- -5 points per incorrect selection or missed square
- Minimum score per level: 0

## 📝 License

This project was created as a frontend assignment demonstration.
