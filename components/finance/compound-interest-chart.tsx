"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function CompoundInterestChart() {
  const data = []
  const principal = 10000
  const rate = 0.05
  for (let year = 0; year <= 30; year++) {
    const compound = principal * Math.pow(1 + rate, year)
    const simple = principal * (1 + rate * year)
    data.push({
      year,
      compound: Math.round(compound),
      simple: Math.round(simple)
    })
  }

  return (
    <div className="h-64 md:h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="year" 
            label={{ value: 'Years', position: 'insideBottom', offset: -5 }}
            className="text-xs"
          />
          <YAxis 
            label={{ value: 'Value ($)', angle: -90, position: 'insideLeft' }}
            className="text-xs"
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />
          <Tooltip 
            formatter={(value: number) => `$${value.toLocaleString()}`}
            labelFormatter={(label) => `Year ${label}`}
          />
          <Legend />
          <Area 
            type="monotone" 
            dataKey="compound" 
            stackId="1" 
            stroke="#3b82f6" 
            fill="#3b82f6" 
            fillOpacity={0.6}
            name="Compound Interest"
          />
          <Area 
            type="monotone" 
            dataKey="simple" 
            stackId="2" 
            stroke="#ef4444" 
            fill="#ef4444" 
            fillOpacity={0.6}
            name="Simple Interest"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

