import type { PipeResult } from '../../types.ts';

/**
 * Creates a validation functions that validates the length of a string or array.
 *
 * @param requirement The length.
 * @param error The error message.
 *
 * @returns A validation function.
 */
export function length<TInput extends string | any[]>(
  requirement: number,
  error?: string
) {
  return (input: TInput): PipeResult<TInput> => {
    if (input.length !== requirement) {
      return {
        issue: {
          validation: 'length',
          message: error || 'Invalid length',
          input,
        },
      };
    }
    return { output: input };
  };
}
