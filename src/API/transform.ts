import * as Transform from 'API/types';

export const OpenAiAPITransform = {
  chatResponse: (
    rawResponse: Transform.transformTextResponse,
  ): Transform.transformTextResponse => ({
    created_at: rawResponse.created_at,
    output_text: rawResponse.output_text,
  }),
};
