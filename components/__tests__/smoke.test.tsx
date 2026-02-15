import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ExplanationCard from '../ExplanationCard';

describe('smoke', () => {
  it('renders ExplanationCard without crashing', () => {
    const { container } = render(<ExplanationCard title="Test" body="Body" /> as any);
    expect(container).toBeTruthy();
  });
});
