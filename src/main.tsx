import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './styles/global.css';

const rootElement = document.getElementById('root') as HTMLElement;
createRoot(rootElement).render(
    <StrictMode>
        <App />
    </StrictMode>
);
