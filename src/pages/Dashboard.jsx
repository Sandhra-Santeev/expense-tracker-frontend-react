import React from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

function Dashboard({ dataForChart }) {
  // Placeholder data for bar chart
  if (!dataForChart || dataForChart.length === 0) {
    return (
      <div className="container mt-4">
        <h2 className="text-center">Dashboard</h2>
        <p className="text-center">No data available for charts</p>
      </div>
    );
  }

  // const barChartData = 
 console.log(dataForChart)
  
 const data = dataForChart

// Directly calculate month-wise amounts and map it for bar chart
const barChartData = Object.entries(
  data.reduce((acc, { amount, date }) => {
    const monthYear = new Date(date).toLocaleString("default", { month: "long", year: "numeric" });
    const parsedAmount = parseFloat(amount);
    acc[monthYear] = (acc[monthYear] || 0) + parsedAmount;
    return acc;
  }, {})
).map(([monthYear, amount]) => ({
  month: monthYear.split(" ")[0], // Month name
  amount,
}));


const pieChartData = Object.entries(
  dataForChart.reduce((acc, { category, amount }) => {
    const newAmt = parseInt(amount, 10);
    acc[category] = acc[category] ? acc[category] + newAmt : newAmt;
    return acc;
  }, {})
).map(([category, amount]) => ({
  name: category, 
  value: amount,  
}));

console.log(pieChartData);
const totalExpense = pieChartData.reduce((acc,item)=>acc+item.value,0)


  

  const colors = [...Array(pieChartData.length)].map((_,i)=>{
    const length = 5;
    const hue = 250 + (i * (40 / length)); 
    const saturation = 60 + (i * (20 / length)); 
    const lightness = 30 + (i * (50 / length)); 
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  }) // Colors for pie chart

  // Create a color map for the legend
  const colorMap = pieChartData.map((_, index) => colors[index % colors.length]);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Dashboard</h2>

      {/* Summary Cards */}
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card text-white bg-primary p-3 shadow-sm">
            <h5>Total Expenses</h5>
            <h3>₹{totalExpense}</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-primary border border-primary p-3 shadow-sm">
            <h5>Monthly Budget</h5>
            <h3>₹2500</h3>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-primary p-3 shadow-sm">
            <h5>Remaining Balance</h5>
            <h3>₹{2500-totalExpense}</h3>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="row mt-4 mb-5">
        <div className="col-md-6">
          <div className="chart-container p-3 border rounded bg-light shadow-sm">
            <h5>Monthly Expense Breakdown</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="col-md-6">
          <div className="chart-container p-3 border rounded bg-light shadow-sm">
            <h5>Expense Category Distribution</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={pieChartData} cx="50%" cy="50%" outerRadius={100} label>
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
