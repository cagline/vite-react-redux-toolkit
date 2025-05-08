import React, { Component } from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', minHeight: '100vh', justifyContent: 'center' }}>
          <div style={{ maxWidth: '600px', textAlign: 'center', padding: '20px' }}>
            <div
              style={{
                marginBottom: '2em',
                margin: '0 auto',
                width: '6em',
                height: '6em',
                backgroundColor: 'red',
                borderRadius: '50%',
              }}
            >
              {/* Placeholder for an icon */}
            </div>
            <h1 style={{ fontSize: '35px', fontWeight: 700, letterSpacing: '2.5px' }}>Uh oh!</h1>
            <p
              style={{
                color: 'gray',
                fontSize: '25px',
                fontWeight: 400,
                letterSpacing: '2.5px',
                margin: '1em 0',
              }}
            >
              Something went wrong. Please try again.
            </p>
            <button
              style={{
                display: 'block',
                margin: '2em auto 0',
                padding: '10px 30px',
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: '#1976d2',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => (window.location.href = window.location.origin)}
            >
              Ok
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
