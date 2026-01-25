import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 bg-red-50 border border-red-200 rounded-lg mx-4 my-4">
          <h2 className="text-lg font-semibold text-red-900 mb-2">Something went wrong</h2>
          <p className="text-red-700 text-sm mb-4">
            An unexpected error occurred. Please refresh the page to continue.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="text-xs text-red-600 whitespace-pre-wrap break-words">
              <summary className="cursor-pointer font-mono font-bold mb-2">Error details</summary>
              {this.state.error.toString()}
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
