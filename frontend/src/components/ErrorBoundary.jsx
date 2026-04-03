import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })
    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      const isDev = import.meta.env?.DEV
      
      return (
        <div className="min-h-screen flex items-center justify-center bg-bg-page px-4 py-8">
          <div className="text-center max-w-2xl">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Something went wrong
            </h2>
            <p className="text-text-secondary mb-6">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            
            {/* Show error details in development or for debugging */}
            {(isDev || this.state.error) && (
              <div className="mb-6 p-4 bg-bg-card rounded-lg text-left overflow-auto">
                <p className="text-red-400 font-mono text-sm mb-2">
                  {this.state.error?.toString()}
                </p>
                {this.state.errorInfo && (
                  <pre className="text-text-muted font-mono text-xs whitespace-pre-wrap">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}
            
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-accent-primary text-white font-semibold rounded-full hover:bg-accent-hover transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary