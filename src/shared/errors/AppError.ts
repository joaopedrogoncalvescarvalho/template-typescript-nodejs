class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  constructor(message = 'AppError', statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
