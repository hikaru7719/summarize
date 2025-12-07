// Cloudflare Workers エントリーポイント
import { Hono } from 'hono';
import type { Env } from './types/env';

// Honoアプリケーションの初期化
const app = new Hono<{ Bindings: Env }>();

// ヘルスチェックエンドポイント
app.get('/health', (c) => {
  return c.json({ status: 'ok', message: 'Summarize is running' });
});

// ルートエンドポイント
app.get('/', (c) => {
  return c.text('Summarize API');
});

// Cloudflare Workers用のエクスポート
export default app;
