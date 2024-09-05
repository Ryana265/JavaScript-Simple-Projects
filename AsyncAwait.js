<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cart Page</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>
<body>
    <style>
        body{
            background-color: black;
        }
        .card {
            margin: 20px;
            display: flex;
            justify-content: center;
        }
        .btn{
            margin-left: 25%;
        }
    </style>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold text-light" href="#">Product Cart</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">Pricing</a>
              </li>
            </ul>
            <span class="navbar-text text-light">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>
      <!-- display result -->
       <h1 class="text-center fw-bold text-light">Product Cart</h1>
      <div class="row justify-content-center" id="card-container"></div>

<script>
    async function fetchPost(){
        const response = await fetch('https://dummyjson.com/carts');
        const data = await response.json();
        return data.carts;
    }

    async function displayPost() {
        const carts = await fetchPost();
        const cardContainer = document.getElementById('card-container');
        let cardsHTML = "";

        for (let cart of carts) {
            for (let product of cart.products) {
                cardsHTML += `
                <div class="col-md-4 mb-3" style="width: 18rem;">
                    <div class="card">
                        <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}" style="width: 100%; height: auto;">
                        <div class="card-body">
                            <h5 class="card-title text-center">${product.title}</h5>
                            <p class="card-text text-center">Product ID: ${product.id}</p>
                            <p class="card-text text-center">Price: $${product.price}</p>
                            <p class="card-text text-center">Quantity: ${product.quantity}</p>
                            <button class="btn btn-dark text-center">Buy Now</button>
                        </div>
                    </div>
                </div>`;
            }
        }
        cardContainer.innerHTML = cardsHTML;
    }

    displayPost();
</script>
</body>
</html>
