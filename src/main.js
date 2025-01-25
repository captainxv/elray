import './app.css';
import { browser } from '$app/environment';

if (browser) {
  await import('$app/navigation');
}