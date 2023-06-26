// Update a single record
Model.updateOne({ _id: id }, { $set: { field: value } }, (err, res) => {
  if (err) throw err;
  console.log('Record updated successfully');
});

// Update multiple records
Model.updateMany({ field: value }, { $set: { field: newValue } }, (err, res) => {
  if (err) throw err;
  console.log('Records updated successfully');
});

// Delete a single record
Model.deleteOne({ _id: id }, (err, res) => {
  if (err) throw err;
  console.log('Record deleted successfully');
});

// Delete multiple records
Model.deleteMany({ field: value }, (err, res) => {
  if (err) throw err;
  console.log('Records deleted successfully');
});