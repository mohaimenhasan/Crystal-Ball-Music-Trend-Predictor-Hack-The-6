
# CrystalBall Popularity Detector

This project is a React application that predicts the future popularity of songs based on user data from Spotify. Users can log in with their Spotify account, view their top tracks, and get predictions about the popularity of these tracks.

## Features

- **Spotify Login**: Users can log in with their Spotify account.
- **Top Tracks**: Displays the user's top tracks.
- **Popularity Prediction**: Predicts the future popularity of each track.
- **Audio Features**: Displays audio features like acousticness, danceability, speechiness, and tempo.
- **Play Previews**: Allows users to play 30-second previews of the tracks directly in the app.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   \`\`\`bash
   git clone <https://github.com/yourusername/song-popularity-detector.git>
   cd song-popularity-detector
   \`\`\`

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add your Spotify API credentials:
   \`\`\`
   REACT_APP_SPOTIFY_CLIENT_ID=your_spotify_client_id
   REACT_APP_SPOTIFY_REDIRECT_URI=<http://localhost:3000/>
   \`\`\`

4. **Run the app**:
   \`\`\`bash
   npm start
   \`\`\`

   The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Log in with Spotify**: Click the "Log in with Spotify" button and authenticate with your Spotify account.
2. **View Top Tracks**: After logging in, your top tracks will be displayed.
3. **Play Previews**: Click the play button on any track to listen to a 30-second preview.
4. **Predict Popularity**: Click the "Predict" button on any track to view the predicted popularity.

## Code Structure

- **src/api/spotify.ts**: Contains functions to interact with the Spotify API.
- **src/components/Login.tsx**: Login component for Spotify authentication.
- **src/Icons.tsx**: Contains icon components used in the app.
- **src/App.tsx**: Main application component.
- **src/App.css**: Main stylesheet for the application.

## Dependencies

- **React**: JavaScript library for building user interfaces.
- **Axios**: Promise-based HTTP client for the browser and Node.js.
- **Spotify Web API**: Interface to access Spotify's data.

## Screenshots

### Login Screen

![Login Screen](./screenshots/login_screen.png)

### Main Screen

![Main Screen](./screenshots/main_screen.png)

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
