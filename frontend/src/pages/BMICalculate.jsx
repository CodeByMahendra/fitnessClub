import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BMICalculate = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState(null); // Use null for no initial value

  const calculateBMI = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight, and gender.");
      return;
    }

    const heightInMeters = parseFloat(height) / 100; // Convert height to meters
    const weightInKg = parseFloat(weight); // Convert weight to number

    // Check if height is a valid positive number
    if (heightInMeters <= 0) {
      toast.error("Height must be a positive number.");
      return;
    }

    const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue); // Store the calculated BMI value

    // Provide feedback based on BMI value
    if (bmiValue < 18.5) {
      toast.warning("You are underweight. Consider seeking advice from a healthcare provider.");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have a normal weight. Keep maintaining a healthy lifestyle.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are overweight. Consider seeking advice from a healthcare provider.");
    } else {
      toast.error("You are in the obese range. It is recommended to seek advice from a healthcare specialist.");
    }
  };

  return (
    <section className="bmi">
      <h1>BMI CALCULATOR</h1>
      <div className="container">
        <div className="wrapper">
          <form onSubmit={calculateBMI}>
            <div>
              <label>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                min="0" // Ensure positive values only
              />
            </div>
            <div>
              <label>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                min="0" // Ensure positive values only
              />
            </div>
            <div>
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                required // Make gender selection required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMI</button>
          </form>
        </div>
        <div className="wrapper">
          <img src="/bmi.jpg" alt="BMI Illustration" />
        </div>
      </div>
      {bmi && ( // Display the calculated BMI value if available
        <div className="result">
          <h2>Your BMI: {bmi}</h2>
        </div>
      )}
    </section>
  );
};

export default BMICalculate;


