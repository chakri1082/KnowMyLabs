import React from 'react';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import ExplanationCard from '../ExplanationCard';

describe('smoke', () => {
  it('renders ExplanationCard without crashing', () => {
    const explanation = {
      testName: 'Test A',
      value: '5.2',
      unit: 'mg/dL',
      refMin: 3,
      refMax: 7,
      interpretation: 'NORMAL',
      whatItIs: 'Description',
      whatItMeasures: 'Measures something',
      whyItsOrdered: 'Routine',
      upReasons: 'High diet',
      downReasons: 'Low diet',
      analogy: 'Like a thermometer',
      educationalNotes: 'Notes',
      personalInsight: 'Keep hydrated',
      doctorAdvice: 'Consult if abnormal',
    } as any;

    const { container } = render(<ExplanationCard explanation={explanation} /> as any);
    expect(container).toBeTruthy();
  });
});
