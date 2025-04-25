
    function calculateMinimumCosts() {
      const regular = document.getElementById("regular").value.split(",").map(Number);
      const express = document.getElementById("express").value.split(",").map(Number);
      const expressCost = parseInt(document.getElementById("expressCost").value);

      const n = regular.length;
      const dpRegular = Array(n + 1).fill(0);
      const dpExpress = Array(n + 1).fill(0);

      dpRegular[0] = 0;
      dpExpress[0] = expressCost;

      const result = [];

      for (let i = 0; i < n; i++) {
        dpRegular[i + 1] = Math.min(
          dpRegular[i] + regular[i],
          dpExpress[i] + regular[i]
        );
        dpExpress[i + 1] = Math.min(
          dpExpress[i] + express[i],
          dpRegular[i] + express[i] + expressCost
        );
        result.push(Math.min(dpRegular[i + 1], dpExpress[i + 1]));
      }

      document.getElementById("output").innerHTML = `
        <strong>📍 Minimum Cost to Reach Each Station:</strong>
        [${result.join(", ")}]
      `;
    }

    document.getElementById('darkModeToggle').addEventListener('change', function () {
      document.body.classList.toggle('dark');
    });
