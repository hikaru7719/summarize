// Cloudflare Workers環境の型定義

export interface Env {
  // D1データベース
  DB: D1Database;
  
  // KVネームスペース
  SESSIONS: KVNamespace;
  
  // 環境変数
  OPENAI_API_KEY: string;
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  GITHUB_CALLBACK_URL: string;
  SESSION_SECRET: string;
  SESSION_TTL: string;
  APP_URL: string;
}
