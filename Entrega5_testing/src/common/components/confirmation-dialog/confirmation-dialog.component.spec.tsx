import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialog } from './confirmation-dialog.component';

describe('ConfirmationDialog specs', () => {
  const mockOnAccept = jest.fn();
  const mockOnClose = jest.fn();

  const Props = {
    isOpen: true,
    onAccept: mockOnAccept,
    onClose: mockOnClose,
    title: 'Title',
    labels: {
      closeButton: 'Close',
      acceptButton: 'Accept',
    },
    children: 'Content',
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should renders with correct content and buttons', () => {
    const { getByText } = render(<ConfirmationDialog {...Props} />);
    screen.debug();
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Content')).toBeInTheDocument();
    expect(getByText('Close')).toBeInTheDocument();
    expect(getByText('Accept')).toBeInTheDocument();
  });

  it('should calls onAccept and onClose on Accept button click', async () => {
    const { getByText } = render(<ConfirmationDialog {...Props} />);
    const acceptButton = getByText('Accept');

    await userEvent.click(acceptButton);

    expect(mockOnAccept).toHaveBeenCalledTimes(1);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onClose on Close button click', async () => {
    const { getByText } = render(<ConfirmationDialog {...Props} />);
    const closeButton = getByText('Close');

    await userEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
    expect(mockOnAccept).not.toHaveBeenCalled();
  });

  it('shouldnt render when isOpen is false', () => {
    const { queryByText } = render(
      <ConfirmationDialog {...Props} isOpen={false} />
    );
    expect(queryByText('Title')).not.toBeInTheDocument();
    expect(queryByText('Content')).not.toBeInTheDocument();
  });
});
