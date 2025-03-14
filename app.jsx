// Get components from global scope - ensuring they exist
const { Header } = window;

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="min-h-screen bg-transparent">
    <Header />
  </div>
);