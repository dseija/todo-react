import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '../../app';

// react-redux useSelector hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// react-redux useDispatch hook
export const useAppDispatch: () => AppDispatch = useDispatch;
