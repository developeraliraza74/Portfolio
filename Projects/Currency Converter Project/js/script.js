 const dropdowns = document.querySelectorAll(".dropdown select");
      const btn = document.querySelector("form button");
      const fromCurr = document.querySelector(".from select");
      const toCurr = document.querySelector(".to select");
      const msg = document.querySelector(".msg");
      const exchangeIcon = document.querySelector(".dropdown i");

      // Populate dropdowns with currency options
      for (let select of dropdowns) {
        for (let currCode in countryList) {
          let newOption = document.createElement("option");
          newOption.innerText = currCode;
          newOption.value = currCode;
          if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
          } else if (select.name === "to" && currCode === "PKR") {
            newOption.selected = "selected";
          }
          select.append(newOption);
        }
        select.addEventListener("change", (evt) => {
          updateFlag(evt.target);
        });
      }

      // Function to update flag image
      const updateFlag = (element) => {
        let currCode = element.value;
        let countryCode = countryList[currCode];
        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
      };

      // Function to get exchange rate
      const updateExchangeRate = async () => {
        let amount = document.querySelector(".amount input");
        let amtVal = amount.value;
        if (amtVal === "" || amtVal < 1) {
          amtVal = 1;
          amount.value = "1";
        }

        msg.innerText = "Getting exchange rate...";

        // Updated API URL
        const URL = `https://v6.exchangerate-api.com/v6/77d63d899c9fae43583f819d/latest/${fromCurr.value}`;

        // NOTE: The old API is no longer reliable.
        // Get a free API key from https://www.exchangerate-api.com/
        // And replace 'YOUR_API_KEY' in the URL above.

        // As a fallback, here is another free API that does not require a key, but may be less reliable.
        // const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;

        try {
          let response = await fetch(URL);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          let data = await response.json();

          // Logic to get rate depends on which API you use.
          // For exchangerate-api.com:
          let rate = data.conversion_rates[toCurr.value];

          // For fawazahmed0/currency-api:
          // let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

          if (!rate) {
            throw new Error(`Could not find rate for ${toCurr.value}`);
          }

          let finalAmount = amtVal * rate;
          msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount.toFixed(
            2
          )} ${toCurr.value}`;
        } catch (error) {
          console.error("Fetch Error:", error);
          msg.innerText = "Couldn't get exchange rate. Please try again.";
        }
      };

      // Event listener for the button
      btn.addEventListener("click", (evt) => {
        evt.preventDefault(); // Prevent form from submitting
        updateExchangeRate();
      });

      // Event listener for page load
      window.addEventListener("load", () => {
        updateExchangeRate();
      });

      // Event listener for currency swap icon
      exchangeIcon.addEventListener("click", () => {
        // Swap currencies
        let tempCode = fromCurr.value;
        fromCurr.value = toCurr.value;
        toCurr.value = tempCode;

        // Update flags
        updateFlag(fromCurr);
        updateFlag(toCurr);

        // Get new rate
        updateExchangeRate();
      });