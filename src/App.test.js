import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Techstarter website heading', () => {
  // Render the App component
  render(<App />);
  
  // Use a test ID, text content, role, or other queries to find elements
  const headingElement = screen.getByText(/My Techstarter Website/i);
  
  // Check if the element is in the document
  expect(headingElement).toBeInTheDocument();
});
