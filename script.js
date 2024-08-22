const buzzwords = [
  "Blockchain",
  "AI",
  "Microservices",
  "Serverless",
  "DevOps",
  "Agile",
  "Machine Learning",
  "Big Data",
  "Quantum Computing",
  "IoT",
];
const tools = [
  "React",
  "Docker",
  "Kubernetes",
  "AWS",
  "Node.js",
  "TensorFlow",
  "Angular",
  "GraphQL",
  "Terraform",
  "Jenkins",
];
const methods = [
  "Continuous Integration",
  "Pair Programming",
  "Scrum",
  "Code Reviews",
  "Test-Driven Development",
  "Continuous Deployment",
  "Kanban",
  "Behavior-Driven Development",
  "Lean Startup",
  "DevSecOps",
];

// random number generator
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// random item selection
function generateRandomItem(arr) {
  const idx = generateRandomNumber(arr.length);
  return arr[idx];
}

// message generation
function generateRandomMessage(buzzwords, tools, methods) {
  const buzzword = generateRandomItem(buzzwords);
  const tool = generateRandomItem(tools);
  const method = generateRandomItem(methods);
  return `Leverage ${buzzword} with ${tool} to enhance ${method}.`;
}
