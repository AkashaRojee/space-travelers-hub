import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';
import App from '../app/App';

describe('Rockets are displayed correctly', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('Reserving a rockets add it to the display', async () => {
    const buttons = await screen.findAllByRole('button');
    userEvent.click(buttons[0]);
    userEvent.click(buttons[3]);
    const reservedRockets = [
      buttons[0].parentElement.parentElement.querySelector('h2').textContent,
      buttons[3].parentElement.parentElement.querySelector('h2').textContent,
    ];
    const profileMenu = screen.getByText('My profile');

    userEvent.click(profileMenu);
    const displayedRockets = [
      screen.getByText(reservedRockets[0]),
      screen.getByText(reservedRockets[1]),
    ];

    displayedRockets.forEach((displayedRocket) => {
      expect(displayedRocket).toBeVisible();
    });
  });

  test('Cancelling a rocket removes it from the display', async () => {
    // having to click on rockets menu because of RTL bug where previous render leaks into test
    // https://github.com/testing-library/react-testing-library/issues/716#
    const rocketsMenu = screen.getByText('Rockets');
    userEvent.click(rocketsMenu);
    const buttons = await screen.findAllByRole('button');
    userEvent.click(buttons[0]);
    userEvent.click(buttons[3]);
    const reservedRocket = buttons[3].parentElement.parentElement.querySelector('h2').textContent;
    const profileMenu = screen.getByText('My profile');

    userEvent.click(buttons[0]);
    const cancelledRocket = buttons[0].parentElement.parentElement.querySelector('h2').textContent;
    userEvent.click(profileMenu);
    const displayedRocket = screen.getByText(reservedRocket);
    const removedRocket = screen.queryByText(cancelledRocket);

    expect(displayedRocket).toBeVisible();
    expect(removedRocket).toBeNull();
  });
});
