export type ErrorData = {
  code?: string;
  message?: string;
};

export type ServiceErrorResponse = {
  code: number;
  type: string;
  message: string;
  data: any;
};

export class ApiError extends Error {
  code: number;
  type: string;
  data: ErrorData;

  constructor(response: ServiceErrorResponse) {
    super(response.message);
    this.code = response.code;
    this.type = response.type;
    this.data = response.data;
  }

  static isApiError(error: unknown): error is ApiError {
    const maybeApiError = error as Partial<ApiError> | undefined;
    return (
      !!maybeApiError?.code &&
      maybeApiError?.type != null &&
      maybeApiError instanceof Error
    );
  }
}
