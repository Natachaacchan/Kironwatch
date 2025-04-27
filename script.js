const ctx = document.getElementById('graficoBatimentos').getContext('2d');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: Array.from({ length: 10 }, (_, i) => `T${i + 1}`),
    datasets: [{
      label: 'Batimentos',
      data: [70, 72, 74, 100, 90, 230, 233, 220, 210, 199],
      borderColor: 'red',
      borderWidth: 2,
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
});

