/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_KEY: string;
    // Thêm các biến môi trường khác nếu cần, ví dụ:
    REACT_APP_ANOTHER_VAR: string;
  }
}
