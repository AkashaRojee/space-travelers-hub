import React from 'react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { render, screen } from '../test-utils';
import Dragons from '../features/dragons/Dragons';

describe('Clicking on Reserve/Cancel button', () => {
  beforeEach(() => {
    render(<Dragons />);
  });

  test('Clicking on Reserve shows Reserved badge and changes text to Cancel', async () => {
    const buttons = await screen.findAllByRole('button');

    userEvent.click(buttons[1]);
    const buttonsAfterClick = screen.getAllByRole('button');
    const reservedBadge = screen.getByText('Reserved');

    expect(buttonsAfterClick[1]).toHaveTextContent('Cancel');
    expect(reservedBadge).toBeVisible();
  });

  test('Clicking on Cancel hides Reserved badge and changes text to Reserve', async () => {
    const buttons = await screen.findAllByRole('button');
    userEvent.click(buttons[0]);

    userEvent.click(buttons[0]);
    const buttonsAfterClick = screen.getAllByRole('button');
    const reservedBadge = screen.queryByText('Reserved');

    expect(buttonsAfterClick[0]).toHaveTextContent('Reserve');
    expect(reservedBadge).toBeNull();
  });
});
