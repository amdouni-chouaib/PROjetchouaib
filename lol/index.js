// const xlsx = require('xlsx');
// const brain = require('brain.js');

// // Function to extract input features from a row and normalize them
// function extractInputFeatures(row) {
//   const inputFeatures = [
//     'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8'
//   ];

//   return inputFeatures.map(feature => normalize(row[feature]));
// }

// // Function to extract output labels from a row
// // Function to extract output labels from a row
// function extractOutputLabels(row) {
//   const Y1Value = row['Y1'];
//   const Y2Value = row['Y2'];

//   return {
//     Y1: typeof Y1Value === 'string' ? parseFloat(Y1Value.replace(',', '.')) : Y1Value,
//     Y2: typeof Y2Value === 'string' ? parseFloat(Y2Value.replace(',', '.')) : Y2Value
//   };
// }


// // Function to normalize a value between 0 and 1
// function normalize(value) {
//   if (value === undefined || value === null || isNaN(value)) {
//     return 0.5; // Set a default value or handle missing values based on your data
//   }

//   // Ensure the value is a string before attempting to replace
//   const stringValue = typeof value === 'string' ? value : value.toString();

//   return parseFloat(stringValue.replace(',', '.')); // Adjust the normalization as needed
// }

// // Read data from the Excel file
// const workbook = xlsx.readFile('data.xlsx');
// const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
// const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// // Filter out rows with missing or NaN values
// const cleanData = data.filter(row => {
//   const inputFeatures = extractInputFeatures(row);
//   const outputLabels = extractOutputLabels(row);
//   return !inputFeatures.some(isNaN) && !Object.values(outputLabels).some(isNaN);
// });

// if (cleanData.length !== data.length) {
//   console.error('Warning: Data contains missing or NaN values. Cleaned data will be used.');
// }

// // Prepare training data for brain.js
// const trainingData = cleanData.map(row => ({
//   input: extractInputFeatures(row),
//   output: extractOutputLabels(row)
// }));

// // Print training data for inspection
// console.log('Training Data:', trainingData);

// // Create a neural network
// const net = new brain.NeuralNetwork();

// // Print training progress and debug NaN issue
// net.train(trainingData, {
//   log: true,
//   iterations: 1000,
//   errorThresh: 0.0001,
//   callback: ({ error, iterations }) => {
//     console.log({ error, iterations });
//     if (isNaN(error)) {
//       console.error('Error: Training error became NaN. Adjust your data or training parameters.');
//       process.exit(1);
//     }
//   }
// });

// // Make predictions for new data
// const newDataPoint = {
//   X1: 0.98,
//   X2: 514.50,
//   X3: 294.00,
//   X4: 110.25,
//   X5: 7.00,
//   X6: 2,
//   X7: 0.00,
//   X8: 0
// };

// const prediction = net.run(extractInputFeatures(newDataPoint));

// // Print prediction
// console.log('Prediction:', prediction);


















// const brain = require('brain.js');
// const xlsx = require('xlsx');

// // Load data from the XLSX file
// const workbook = xlsx.readFile('cars.xlsx');
// const sheetName = workbook.SheetNames[0];
// const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);

// // Example: Display the first row of data
// console.log('Example Row:', data[0]);

// // Prepare the data for training (modify as needed)
// const trainingData = data.map(row => ({
//   input: {
//     EngineSize: row.EngineSize,
//     Cylinders: row.Cylinders,
//     Horsepower: row.Horsepower,
//     Weight: row.Weight
//   },
//   output: { MPG_City: row.MPG_City }
// }));

// // Create a neural network
// const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

// // Train the neural network
// net.train(trainingData);

// // Make predictions on new data
// const input = { EngineSize: 3.0, Cylinders: 6, Horsepower: 220, Weight: 3583 };
// const output = net.run(input);

// console.log('Predicted MPG_City:', output.MPG_City);
const nodemailer = require('nodemailer');

// Replace with your Mailtrap credentials
const smtpConfig = {
  host: 'live.smtp.mailtrap.io',
  port: 587,
  auth: {
    user: 'api',
    pass: 'd5d76c118c3bcb6a06216072886bc299'
  }
};

const transporter = nodemailer.createTransport(smtpConfig);

// Function to send an email (modify as needed)
async function sendEmail(to, subject, text, html) {
  const mailOptions = {
    from: 'ali@demomailtrap.com', // Replace with your desired sender email
    to,
    subject,
    text,
    html
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
}

// Example usage:
sendEmail('chouaibamdouni@gmail.com', 'Test Email', 'This is a plain text email.', '<h1>This is an HTML email!</h1>');
