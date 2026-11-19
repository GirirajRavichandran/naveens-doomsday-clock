# MCU Doomsday Clock

A personalized countdown for Naveen Sunilkumar's last day at the company on January 6, 2027.

## Features

- Cinematic countdown with animated visual effects
- Mouse-reactive lighting (specular highlights, shadows, bloom)
- Rotating god rays and fog effects
- Floating particle system with adjustable count for performance
- Background music with a visible sound-enable control, an automatic clock-tick transition, and manual audio controls
- Last-day message with a signal-glitch transition and customizable name via URL parameter
- Utility bar with audio controls and particle settings
- Fully responsive design

## Demo

Visit: [girirajravichandran.github.io/naveens-doomsday-clock](https://girirajravichandran.github.io/naveens-doomsday-clock/)

Customize the name: `https://girirajravichandran.github.io/naveens-doomsday-clock/?name=Tony%20Stark`

GitHub Pages deployment is handled by the workflow in `.github/workflows/deploy-pages.yml`.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- CSS Animations & Blend Modes

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view it.

## Project Structure

```
app/
├── components/
│   ├── Countdown.tsx      # Countdown timer with shuffle animation
│   ├── DoomsdayClock.tsx  # Main scene with visual layers
│   ├── ParticleCanvas.tsx # Floating dust particles (adjustable count)
│   ├── UtilityBar.tsx     # Audio controls and particle settings
│   └── WillReturn.tsx     # "X Will Return" text animation
├── globals.css            # Keyframes & complex gradients
├── layout.tsx             # Metadata & fonts
└── page.tsx               # Entry point
```

## Disclaimer

This project is an independent creation for artistic and technical demonstration purposes. It is not associated, affiliated, authorized, or endorsed by Marvel Entertainment, LLC or The Walt Disney Company.

## Author

**Abhishek Kumar (KMaar)**

- Portfolio: [kmaar.vercel.app](https://kmaar.vercel.app)
- GitHub: [@SudoKMaar](https://github.com/SudoKMaar)
- LinkedIn: [AbhishekKMaar](https://www.linkedin.com/in/AbhishekKMaar)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.txt](LICENSE.txt) file for details.
