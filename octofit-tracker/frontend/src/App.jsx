import './App.css'

function App() {
  return (
    <main className="container py-5">
      <section className="row g-4 align-items-stretch">
        <article className="col-lg-7">
          <div className="card shadow-sm h-100 border-0 rounded-4">
            <div className="card-body p-4 p-xl-5">
              <p className="text-uppercase text-primary fw-semibold mb-2">OctoFit Tracker</p>
              <h1 className="display-5 fw-bold mb-3">Fitness tracking for the next challenge.</h1>
              <p className="lead text-secondary mb-4">
                A modern multi-tier app with a React 19 frontend, an Express + TypeScript API tier,
                and MongoDB-backed data access.
              </p>
              <ul className="list-unstyled d-grid gap-2">
                <li>• Activity logging and activity summaries</li>
                <li>• Team and leaderboard experiences</li>
                <li>• Workout suggestions and profile management</li>
              </ul>
            </div>
          </div>
        </article>

        <article className="col-lg-5">
          <div className="card shadow-sm h-100 border-0 rounded-4 bg-dark text-white">
            <div className="card-body p-4 p-xl-5">
              <h2 className="h4 fw-semibold mb-3">Current stack</h2>
              <ul className="list-group list-group-flush bg-transparent">
                <li className="list-group-item bg-transparent text-white-50">Frontend: React 19 + Vite</li>
                <li className="list-group-item bg-transparent text-white-50">Backend: Express + TypeScript</li>
                <li className="list-group-item bg-transparent text-white-50">Database: MongoDB + Mongoose</li>
                <li className="list-group-item bg-transparent text-white-50">Ports: 5173 / 8000 / 27017</li>
              </ul>
            </div>
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
