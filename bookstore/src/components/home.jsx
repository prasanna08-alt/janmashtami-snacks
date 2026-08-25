import React from "react";
import '../assets/style/style.css';

function Home() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#"> PageTurners Bookstore</a>
          <div className="collapse navbar-collapse show">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#featured">Featured Books</a></li>
              <li className="nav-item"><a className="nav-link" href="#categories">Categories</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="custom-carousel mb-5">
        <div className="custom-carousel-slide">
          <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1200&q=80" alt="Slide 1" />
          <div className="carousel-caption bg-dark bg-opacity-50 rounded p-3">
            <h3>Welcome to PageTurners</h3>
            <p>Explore thousands of classic and modern stories.</p>
          </div>
        </div>
        <div className="custom-carousel-slide">
          <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80" alt="Slide 2" />
          <div className="carousel-caption bg-dark bg-opacity-50 rounded p-3">
            <h3>Bestseller Collection</h3>
            <p>Get up to 30% off top fiction books this week.</p>
          </div>
        </div>
        <div className="custom-carousel-slide">
          <img src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=1200&q=80" alt="Slide 3" />
          <div className="carousel-caption bg-dark bg-opacity-50 rounded p-3">
            <h3>Quiet Reading Nooks</h3>
            <p>Discover peaceful reads tailored for your evening routine.</p>
          </div>
        </div>
        <div className="custom-carousel-slide">
          <img src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=1200&q=80" alt="Slide 4" />
          <div className="carousel-caption bg-dark bg-opacity-50 rounded p-3">
            <h3>Rare &amp; Vintage Titles</h3>
            <p>Check out our curated collection of out-of-print books.</p>
          </div>
        </div>
        <div className="custom-carousel-slide">
          <img src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80" alt="Slide 5" />
          <div className="carousel-caption bg-dark bg-opacity-50 rounded p-3">
            <h3>Join Our Monthly Book Club</h3>
            <p>Connect with local readers and participate in live discussions.</p>
          </div>
        </div>
      </div>
      <main id="featured" className="container flex-grow-1 mb-5">
        <h2 className="text-center mb-4">Featured Books</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=500&q=80" className="card-img-top object-fit-cover" style={{ height: '250px' }} alt="The Great Gatsby" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">The Great Gatsby</h5>
                <h6 className="card-subtitle mb-2 text-muted">F. Scott Fitzgerald</h6>
                <p className="card-text flex-grow-1">A classic novel set in the Roaring Twenties exploring themes of wealth and ambition.</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold fs-5 text-primary">14.99</span>
                  <a href="#" className="btn btn-outline-primary btn-sm">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80" className="card-img-top object-fit-cover" style={{ height: '250px' }} alt="To Kill a Mockingbird" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">To Kill a Mockingbird</h5>
                <h6 className="card-subtitle mb-2 text-muted">Harper Lee</h6>
                <p className="card-text flex-grow-1">A deeply moving story of justice, racial tension, and coming of age in the Deep South.</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold fs-5 text-primary">12.50</span>
                  <a href="#" className="btn btn-outline-primary btn-sm">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=500&q=80" className="card-img-top object-fit-cover" style={{ height: '250px' }} alt="1984" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">1984</h5>
                <h6 className="card-subtitle mb-2 text-muted">George Orwell</h6>
                <p className="card-text flex-grow-1">A chilling dystopian story depicting a totalitarian regime and total surveillance.</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold fs-5 text-primary">15.00</span>
                  <a href="#" className="btn btn-outline-primary btn-sm">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=500&q=80" className="card-img-top object-fit-cover" style={{ height: '250px' }} alt="Pride and Prejudice" />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">Pride and Prejudice</h5>
                <h6 className="card-subtitle mb-2 text-muted">Jane Austen</h6>
                <p className="card-text flex-grow-1">A timeless romance navigating societal expectations, love, and misunderstandings.</p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <span className="fw-bold fs-5 text-primary">10.99</span>
                  <a href="#" className="btn btn-outline-primary btn-sm">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-dark text-light py-4 mt-auto">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mb-3 mb-md-0">
              <h5>PageTurners Bookstore</h5>
              <p className="text-secondary mb-0">Your premier destination for classic literature, modern fiction, and rare finds.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="mb-1">&copy; 2026 PageTurners Bookstore. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;