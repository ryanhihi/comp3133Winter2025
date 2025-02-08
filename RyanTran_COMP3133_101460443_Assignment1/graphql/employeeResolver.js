const Employee = require("../models/employee");

const employeeResolver = {
  Query: {
    getAllEmployees: async () => {
      try {
        return await Employee.find();
      } catch (error) {
        throw new Error(`Error fetching employees: ${error.message}`);
      }
    },
    searchEmployeeById: async (_, { eid }) => {
      try {
        const employee = await Employee.findById(eid);
        if (!employee) throw new Error("Employee not found");
        return employee;
      } catch (error) {
        throw new Error(`Error searching employee: ${error.message}`);
      }
    },
    searchEmployeeByDesignationOrDepartment: async (_, { designation, department }) => {
      try {
        const filter = {};
        if (designation) filter.designation = designation;
        if (department) filter.department = department;

        return await Employee.find(filter);
      } catch (error) {
        throw new Error(`Error searching employees: ${error.message}`);
      }
    },
  },
  Mutation: {
    addEmployee: async (_, { firstName, lastName, email, gender, designation, salary, dateOfJoining, department, employeePhoto }) => {
      try {
        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) throw new Error("Employee with this email already exists");

        const newEmployee = new Employee({
          firstName,
          lastName,
          email,
          gender,
          designation,
          salary,
          dateOfJoining,
          department,
          employeePhoto,
        });

        return await newEmployee.save();
      } catch (error) {
        throw new Error(`Error adding employee: ${error.message}`);
      }
    },
    updateEmployeeById: async (_, { id, ...updatedData }) => {
      try {
        const updatedEmployee = await Employee.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedEmployee) throw new Error("Employee not found");
        return updatedEmployee;
      } catch (error) {
        throw new Error(`Error updating employee: ${error.message}`);
      }
    },
    deleteEmployeeById: async (_, { eid }) => {
      try {
        const deletedEmployee = await Employee.findByIdAndDelete(eid);
        if (!deletedEmployee) throw new Error("Employee not found");
        return deletedEmployee;
      } catch (error) {
        throw new Error(`Error deleting employee: ${error.message}`);
      }
    },
  },
};

module.exports = { employeeResolver };
