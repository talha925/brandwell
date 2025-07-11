'use client';

import React, { memo, ComponentType } from 'react';

/**
 * Creates a memoized version of a component with custom comparison function
 * 
 * @param Component - The component to memoize
 * @param propsAreEqual - Optional custom comparison function
 * @returns Memoized component
 */
export function createMemoizedComponent<P extends object>(
  Component: ComponentType<P>,
  propsAreEqual?: (prevProps: Readonly<P>, nextProps: Readonly<P>) => boolean
): React.MemoExoticComponent<ComponentType<P>> {
  return memo(Component, propsAreEqual);
}

/**
 * Default props comparison function that does deep comparison of objects
 */
export function deepCompareProps<P extends object>(prevProps: P, nextProps: P): boolean {
  return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

/**
 * Creates a memoized component with deep props comparison
 */
export function createDeepMemoizedComponent<P extends object>(
  Component: ComponentType<P>
): React.MemoExoticComponent<ComponentType<P>> {
  return createMemoizedComponent(Component, deepCompareProps);
} 