import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/global.css';
import './styles/variables.css';
import './styles/global.css';
import './styles/layout.css';
import './styles/hero.css';
import './styles/cards.css';
import './styles/docks.css';
import './styles/windows.css';
import './styles/content.css';
import './styles/desktop-icon.css';
import './styles/responsive.css';
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);