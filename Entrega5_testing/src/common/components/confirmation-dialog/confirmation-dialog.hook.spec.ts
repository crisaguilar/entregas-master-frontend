import { renderHook, act } from '@testing-library/react';
import { Lookup } from 'common/models';
import { useConfirmationDialog } from './confirmation-dialog.hook';

describe('useConfirmationDialog specs', () => {
  it('should initialize with isOpen as false and empty itemToDelete', () => {
    const newItemToDelete: Lookup = { id: '', name: '' };

    const { result } = renderHook(() => useConfirmationDialog());

    expect(result.current.isOpen).toBe(false);
    expect(result.current.itemToDelete).toEqual(newItemToDelete);
  });

  it('should reset itemToDelete when onAccept is called', () => {
    const resetItemToDeleted: Lookup = { id: '', name: '' };

    const { result } = renderHook(() => useConfirmationDialog());
    act(() => {
      result.current.onAccept();
    });

    expect(result.current.itemToDelete).toEqual(resetItemToDeleted);
  });

  it('should set isOpen to true and update itemToDelete when onOpenDialog is called', () => {
    const newItemToDelete: Lookup = { id: '1', name: 'test' };
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    });

    expect(result.current.isOpen).toBe(true);
    expect(result.current.itemToDelete).toEqual(newItemToDelete);
  });

  it('should set isOpen to false when onClose is called', () => {
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onClose();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
