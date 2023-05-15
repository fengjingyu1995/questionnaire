import { renderHook, act } from '@testing-library/react-hooks';
import { fetchQuestionnaire } from '../../api/questionnaireApi';

import { vi } from 'vitest';
import { QuestionnaireData } from '../../api/questions.model';
import { useQuestionnaire } from '../../hooks/useQuestionnaire';
vi.mock('../../api/questionnaireApi', () => {
  return {
    fetchQuestionnaire: vi.fn(),
    submitQuestionnaire: vi.fn(),
  };
});

const mockQuestionnaireData: QuestionnaireData = {
  questionnaireTitle: 'Questionnaire',
  questions: [
    {
      id: '1',
      title: 'What is your name?',
      type: 'text',
      required: true,
    },
  ],
};

describe('useQuestionnaire', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test('should fetch questionnaire data on mount', async () => {
    (fetchQuestionnaire as any).mockResolvedValue(mockQuestionnaireData);

    const { result, waitForNextUpdate } = renderHook(() => useQuestionnaire());

    expect(fetchQuestionnaire).toHaveBeenCalledTimes(1);
    await waitForNextUpdate();

    expect(result.current.questionnaireData).toEqual(mockQuestionnaireData);
  });

  test('should update form data', () => {
    const { result } = renderHook(() => useQuestionnaire());

    act(() => {
      result.current.updateFormData('1', 'name1');
    });

    expect(result.current.formData).toEqual({ '1': 'name1' });
  });
});
