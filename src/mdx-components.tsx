import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Add custom components or overrides for MDX rendering here
    ...components,
  };
}
