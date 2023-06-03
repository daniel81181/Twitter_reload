import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { TwitterApp } from './TwitterApp';

const container = document.getElementById('root');

const root = createRoot(container);

root.render(<TwitterApp />);
