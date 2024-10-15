const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

const freelancerList = document.querySelector("#freelancer-list");
const averagePriceDisplay = document.querySelector("#average-price");

function renderFreelancers() {
  freelancerList.innerHTML = "";

  freelancers.forEach((freelancer) => {
    const freelancerDiv = document.createElement("div");
    freelancerDiv.classList.add("freelancer");
    freelancerDiv.textContent = `${freelancer.name}, ${freelancer.occupation}, starting price: $${freelancer.price}`;
    freelancerList.appendChild(freelancerDiv);
  });
}

function calculateAveragePrice() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  const average = (total / freelancers.length).toFixed(2);
  averagePriceDisplay.textContent = `$${average}`;
}

renderFreelancers();
calculateAveragePrice();

const names = ["Carol", "Dave", "Eve", "Frank", "Grace"];
const occupations = [
  "programmer",
  "designer",
  "musician",
  "artist",
  "photographer",
];

function generateRandomFreelancer() {
  const name = names[Math.floor(Math.random() * names.length)];
  const occupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const price = Math.floor(Math.random() * 50) + 20;
  return { name, price, occupation };
}

setInterval(() => {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  renderFreelancers();
  calculateAveragePrice();
}, 5000);
