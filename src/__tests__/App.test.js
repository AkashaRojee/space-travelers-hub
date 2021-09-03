import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';
import App from '../app/App';

describe('When app loads', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Menu items are displayed as links', () => {
    const rocketsMenu = screen.getByText('Rockets').closest('a');
    const dragonsMenu = screen.getByText('Dragons').closest('a');
    const missionsMenu = screen.getByText('Missions').closest('a');
    const profileMenu = screen.getByText('My profile').closest('a');

    expect(rocketsMenu).toHaveAttribute('href');
    expect(dragonsMenu).toHaveAttribute('href');
    expect(missionsMenu).toHaveAttribute('href');
    expect(profileMenu).toHaveAttribute('href');
  });

  test('List of rocket cards is displayed with name, image and reserve button', async () => {
    const rocketNames = await screen.findAllByText(/Falcon/i);
    const rocketImages = screen.getAllByRole('img');
    const reserveButtons = screen.getAllByRole('button');

    rocketNames.forEach((rocketName) => {
      expect(rocketName).toBeVisible();
    });

    rocketImages.forEach((rocketImage) => {
      expect(rocketImage).toBeVisible();
    });

    reserveButtons.forEach((reserveButton) => {
      expect(reserveButton).toBeVisible();
      expect(reserveButton).toHaveTextContent('Reserve');
    });
  });
});
