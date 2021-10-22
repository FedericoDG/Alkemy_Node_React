const formOnChange = (target, object, setObject) => {
  if (target.name === "date") {
    setObject({ ...object, date: target.value });
  } else if (target.name === "type") {
    setObject({ ...object, type: target.value });
  } else if (target.name === "category") {
    setObject({ ...object, category: target.value });
  } else if (target.name === "description") {
    setObject({ ...object, description: target.value });
  } else if (target.name === "amount") {
    setObject({ ...object, amount: parseFloat(target.value) });
  }
  return object;
};

export default formOnChange;