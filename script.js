const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Introduce los grados Celsius"),
  };
  const kelvin = measurement.value + 273;
  return kelvin;
};
measureKelvin();
