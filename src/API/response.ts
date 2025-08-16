type ReasoningDetails = {
  effort: 'low' | 'medium' | 'high';
  summary: string | null;
};

type TextFormatConfiguration = {
  [key: string]: unknown;
};

type TextConfiguration = {
  format: TextFormatConfiguration;
  verbosity: 'low' | 'medium' | 'high';
};

type TokenUsageDetails = {
  [key: string]: unknown;
};

type UsageStatistics = {
  input_tokens: number;
  input_tokens_details: TokenUsageDetails;
  output_tokens: number;
  output_tokens_details: TokenUsageDetails;
  total_tokens: number;
};

export type rawTextResponse = {
  background: boolean;
  created_at: number;
  error: string | null;
  id: string;
  incomplete_details: unknown | null;
  instructions: string | null;
  max_output_tokens: number | null;
  max_tool_calls: number | null;
  metadata: Record<string, unknown>;
  model: string;
  object: string;
  output: unknown[];
  output_text: string;
  parallel_tool_calls: boolean;
  previous_response_id: string | null;
  prompt_cache_key: string | null;
  reasoning: ReasoningDetails;
  safety_identifier: string | null;
  service_tier: string;
  status: 'completed' | 'pending' | 'failed';
  store: boolean;
  temperature: number;
  text: TextConfiguration;
  tool_choice: string;
  tools: unknown[];
  top_logprobs: number;
  top_p: number;
  truncation: string;
  usage: UsageStatistics;
  user: string | null;
};
