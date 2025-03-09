// src/lib/syntax-highlighter.ts
import { Highlighter, getHighlighter, Lang } from 'shiki';

let highlighter: Highlighter | null = null;

export async function initHighlighter() {
  if (!highlighter) {
    highlighter = await getHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: ['html', 'css', 'js', 'jsx', 'ts', 'tsx', 'json', 'bash', 'markdown'],
    });
  }
  return highlighter;
}

export async function highlightCode(code: string, lang: Lang, isDarkMode: boolean) {
  const highlighter = await initHighlighter();
  const theme = isDarkMode ? 'github-dark' : 'github-light';
  
  return highlighter.codeToHtml(code, {
    lang,
    theme,
  });
}

// Utility to create code blocks with highlighting
export function createCodeBlock(code: string, language: string = 'tsx', isDarkMode: boolean = false): Promise<string> {
  return highlightCode(code, language as Lang, isDarkMode);
}