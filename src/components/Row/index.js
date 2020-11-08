import { lazy } from 'react';
import AsyncImport from '../AsyncImport';

export default AsyncImport(lazy(() => import('./Row')));
